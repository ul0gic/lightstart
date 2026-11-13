/**
 * @lightstart/light/model: a model's api. `defineModel(name, schema)` is a
 * plain object of the eleven methods, imported where it is used, sending
 * `MODEL:*` commands through the request `configureModel` set: a store in
 * the same runtime, or a port to a worker that holds one. Rows are the plain
 * objects the store answered; liveness is `onChange`.
 */

import {
  MODEL_ADD, MODEL_ADD_MANY, MODEL_COUNT, MODEL_EDIT, MODEL_EXISTS, MODEL_FACETS,
  MODEL_GET, MODEL_QUERY, MODEL_REMOVE, MODEL_REMOVE_MANY,
} from "./commands.js";
import { applyQueryHooks } from "./query-hooks.js";

export { registerQueryHook } from "./query-hooks.js";
export { setFileStorage, getFileStorage } from "./file-storage.js";
export { onChange } from "./changes.js";
export { ValidationError } from "./validate.js";
import { modelRequest } from "./config.js";

export { configureModel, modelBus, modelRequest, newId } from "./config.js";

                                                                                                                                            

/** Brands a per-model api so a `sync:` binder can tell it from any other object. */
export const MODEL_API = Symbol.for("bootstrapp.model.api");

export const isModelApi = (value         )                    =>
  (typeof value === "object" || typeof value === "function") && value !== null && Reflect.get(value                             , MODEL_API) === true;

const isId = (value         )                           => typeof value === "string" || typeof value === "number";

const withOpts = (payload              , opts                                )               => (opts ? { ...payload, opts } : payload);

/**
 * The api of the model `name`, for a host that resolves schemas by name:
 * `schemaOf` answers the schema when it is read (by `api.schema` and the
 * query hooks), so a schema registered later is still found.
 */
export const modelApi = (name        , schemaOf                               )           => {
  const send = (action        , payload              )                   => modelRequest()(action, name, payload);
  const hooked = (opts              )               => applyQueryHooks({ model: name, schema: schemaOf(), opts });
  const api           = {
    [MODEL_API]: true,
    name,
    get schema() {
      return schemaOf();
    },
    get(idOrOpts, opts) {
      return (isId(idOrOpts) ? send(MODEL_GET, { id: idOrOpts, opts: hooked(opts ?? {}) }) : send(MODEL_GET, { opts: hooked(idOrOpts ?? {}) }))                       ;
    },
    async getAll(opts) {
      const copy                          = opts ? Object.fromEntries(Object.entries(opts)) : {};
      const query               = copy;
      query.total = false;
      return ((await send(MODEL_QUERY, { opts: hooked(query) }))             ).rows;
    },
    query(opts) {
      return send(MODEL_QUERY, { opts: hooked(opts ?? {}) })                      ;
    },
    count(opts) {
      return send(MODEL_COUNT, { opts: hooked(opts ?? {}) })                   ;
    },
    exists(where) {
      return send(MODEL_EXISTS, { where: where ?? {} })                    ;
    },
    facets(fields, opts) {
      const query               = opts ?? {};
      return send(MODEL_FACETS, { fields, opts: query })                        ;
    },
    add: (row, opts) => send(MODEL_ADD, withOpts({ row }, opts))                ,
    addMany: (rows, opts) => send(MODEL_ADD_MANY, withOpts({ rows }, opts))                  ,
    edit(idOrRow                                                   , patchOrOpts                                                          , opts                                ) {
      const byId = (id                 )               => send(MODEL_EDIT, withOpts({ id, patch: (patchOrOpts ?? {})        }, opts))                ;
      if (typeof idOrRow === "string") return byId(idOrRow);
      if (typeof idOrRow === "number") return byId(idOrRow);
      const row                                = idOrRow;
      return send(MODEL_EDIT, withOpts({ id: row.id, patch: { ...row } }, patchOrOpts                                  ))                ;
    },
    remove: (id, opts) => send(MODEL_REMOVE, withOpts({ id }, opts))                    ,
    removeAll: (where = {}) => send(MODEL_REMOVE_MANY, { where })                   ,
  };
  return api;
};

/**
 * A model to import where it is used: its api, typed by its schema, over the
 * request `configureModel` set.
 *
 *     export default defineModel("todos", { title: T.string({ required: true }) });
 */
                                                                                                             
export function defineModel(name        , schema             )          {
  return modelApi(name, () => schema);
}
