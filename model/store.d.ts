/**
 * @lightstart/light/model/store: every model's reads and writes over the
 * adapter that holds it, in the page or in a worker. The write pipeline runs
 * once here for every adapter: hooks, id, relation stripping, defaults,
 * validation, file uploads, then the adapter's own insert/update/delete, then
 * the `model:changed` event live queries follow. Adapters store rows; the store knows the
 * schema. A model's adapter is the routed one wrapped by the decorators its
 * schema directives call for (`registerAdapterDecorator`); a `$shadow`
 * directive names a second, device-local adapter a decorator may use.
 */
export { createModelHandlers, storeRequest } from "./handlers.js";
import type { Store, StoreConfig } from "./types.js";
/** The store over `models` and the adapters in `databases`, routing each model to its adapter. */
export declare function createStore({ models, databases, defaultAdapter, emit }: StoreConfig): Store;
