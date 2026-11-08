/**
 * @lightstart/light/model/indexeddb: the IndexedDB storage adapter. One
 * object store per model, an index per
 * `index: true` / `unique: true` field, booleans and dates encoded so the
 * indexes can hold them. `query` reads one index when the `where` names an
 * indexed field and matches the rest in memory. A model that names this
 * adapter as its `$shadow` gets a store here too, under its own name, beside
 * the models that live here. Importing it registers nothing:
 * `registerStorageAdapter("indexeddb", IndexedDBAdapter)` where the store is
 * built.
 */
import type { ModelSchema, StorageAdapter, WhereClause } from "./types.js";
/**
 * Pick one index that can narrow this query.
 *
 * Deliberately modest: it finds the first indexed field the `where` mentions and
 * turns that one condition into a key range. Every condition is still applied in
 * JS afterwards, so a poor plan costs speed and never correctness.
 *
 * An array field gets a `multiEntry` index, so "contains" is a plain lookup.
 */
export declare const planIndex: (schema: ModelSchema | undefined, where: WhereClause | undefined) => {
    field: string;
    range: IDBKeyRange;
    multiEntry: boolean;
} | null;
declare const IndexedDBAdapter: StorageAdapter;
export default IndexedDBAdapter;
export { IndexedDBAdapter };
