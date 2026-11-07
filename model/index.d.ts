/**
 * @bootstrapp/light/model: a model's api. `defineModel(name, schema)` is a
 * plain object of the eleven methods, imported where it is used, sending
 * `MODEL:*` commands through the request `configureModel` set: a store in
 * the same runtime, or a port to a worker that holds one. Rows are the plain
 * objects the store answered; liveness is `onChange`.
 */
export { registerQueryHook } from "./query-hooks.js";
export { setFileStorage, getFileStorage } from "./file-storage.js";
export { onChange } from "./changes.js";
export { ValidationError } from "./validate.js";
export { configureModel, modelBus, modelRequest } from "./config.js";
import type { ModelApi, ModelSchema, RowOf } from "./types.js";
/** Brands a per-model api so a `sync:` binder can tell it from any other object. */
export declare const MODEL_API: unique symbol;
export declare const isModelApi: (value: unknown) => value is ModelApi;
/**
 * The api of the model `name`, for a host that resolves schemas by name:
 * `schemaOf` answers the schema when it is read (by `api.schema` and the
 * query hooks), so a schema registered later is still found.
 */
export declare const modelApi: (name: string, schemaOf: () => ModelSchema | undefined) => ModelApi;
/**
 * A model to import where it is used: its api, typed by its schema, over the
 * request `configureModel` set.
 *
 *     export default defineModel("todos", { title: T.string({ required: true }) });
 */
export declare function defineModel<S extends ModelSchema>(name: string, schema: S): ModelApi<RowOf<S>, ModelSchema>;
