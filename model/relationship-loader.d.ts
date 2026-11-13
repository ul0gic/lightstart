/**
 * Eager loading of `includes` on the worker side. Reads go through a reader
 * (the store) so every adapter, remote or local, answers the same shape and
 * the loaded rows are plain objects.
 */
import type { ModelSchema, Row, RowReader } from "./types.js";
/**
 * Enrich `record` with the relations listed in `includes`. An unknown name
 * warns and is skipped; a failed load emits `MODEL_ERROR` and leaves `[]` or
 * `null` per the relation's cardinality.
 */
export declare function loadRelationships<R extends RowReader>(reader: R, models: Record<string, ModelSchema>, modelName: string, record: Row, includes: string[]): Promise<Row>;
/**
 * Batch version of `loadRelationships`: a polymorphic `belongs` is resolved
 * with one query per target type instead of one per row.
 */
export declare function loadRelationshipsForMany<R extends RowReader>(reader: R, models: Record<string, ModelSchema>, modelName: string, records: Row[], includes: string[]): Promise<Row[]>;
