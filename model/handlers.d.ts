/**
 * The `MODEL:*` commands a store answers: what a model api's request reaches,
 * whether the store sits in the same runtime or behind a worker's port.
 */
import type { ModelHandler, ModelRequest, Store } from "./types.js";
/**
 * One handler per command, each over the store `getStore` answers when the
 * command arrives.
 */
export declare const createModelHandlers: (getStore: () => Store) => Record<string, ModelHandler>;
/**
 * The request over a store in the same runtime:
 * `configureModel({ request: storeRequest(store) })`.
 */
export declare const storeRequest: (store: Store) => ModelRequest;
