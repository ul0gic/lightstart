/**
 * The `MODEL:*` commands a store answers: what a model api's request reaches,
 * whether the store sits in the same runtime or behind a worker's port.
 */

import {
  MODEL_ADD, MODEL_ADD_MANY, MODEL_COUNT, MODEL_EDIT, MODEL_EXISTS, MODEL_FACETS,
  MODEL_GET, MODEL_QUERY, MODEL_REMOVE, MODEL_REMOVE_MANY,
} from "./commands.js";

                                                                                                     

const queryOf = (opts         )               => (opts === undefined ? {} : (opts                ));

const writeOf = (opts         )                           => opts                            ;

/**
 * One handler per command, each over the store `getStore` answers when the
 * command arrives.
 */
export const createModelHandlers = (getStore             )                               => ({
  [MODEL_GET]: async ({ model, id, opts })                   => {
    const query = queryOf(opts);
    return await getStore().get(model, id ?? query.where ?? null, query);
  },
  [MODEL_QUERY]: async ({ model, opts })                   => await getStore().query(model, queryOf(opts)),
  [MODEL_COUNT]: async ({ model, opts })                   => await getStore().count(model, queryOf(opts)),
  [MODEL_EXISTS]: async ({ model, where })                   => await getStore().exists(model, where),
  [MODEL_FACETS]: async ({ model, fields, opts })                   => await getStore().facets(model, fields, queryOf(opts)),
  [MODEL_ADD]: async ({ model, row, opts })                   => await getStore().add(model, row       , writeOf(opts)),
  [MODEL_ADD_MANY]: async ({ model, rows, opts })                   => await getStore().addMany(model, rows         , writeOf(opts)),
  [MODEL_EDIT]: async ({ model, id, patch, opts })                   => await getStore().edit(model, id                   , patch       , writeOf(opts)),
  [MODEL_REMOVE]: async ({ model, id, opts })                   => await getStore().remove(model, id                   , writeOf(opts)),
  [MODEL_REMOVE_MANY]: async ({ model, where })                   => await getStore().removeAll(model, where),
});

/**
 * The request over a store in the same runtime:
 * `configureModel({ request: storeRequest(store) })`.
 */
export const storeRequest = (store       )               => {
  const handlers = createModelHandlers(() => store);
  return (action, model, payload = {}) => handlers[action]({ model, ...payload });
};
