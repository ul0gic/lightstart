import type { WhereClause, QueryOptions, QueryResult, OrderSpec } from "./types.js";
/**
 * `"-field"` / `"field"` (comma-separated), `"field DESC"`, or a ready
 * `OrderSpec[]`.
 */
export declare function parseOrder(order: string | OrderSpec[] | undefined): OrderSpec[];
/** Single-shot match: `compileMatcher(where)(record)` in one call. */
export declare function matchesWhere(record: Record<string, unknown>, where: WhereClause | undefined): boolean;
/**
 * Throw if `options` has structurally invalid `limit`/`offset`/`where`/
 * `fields`. Used by adapters that accept user-supplied query options.
 */
export declare function validateQueryOptions(options?: QueryOptions): true;
/**
 * Compile a where clause into a fast matcher function. Used by both
 * the in-memory query path and the subscription manager.
 */
export declare function compileMatcher(where: WhereClause | undefined): (record: Record<string, unknown>) => boolean;
/** Slice records by `limit`/`offset`. */
export declare function applyPagination<T>(records: T[] | null | undefined, limit: number | undefined, offset?: number): T[];
/**
 * Deduplicate records by `groupField`: first record wins for each
 * value. Records missing the field pass through.
 */
export declare function applyGroupBy<T extends Record<string, unknown>>(records: T[], groupField: string | undefined): T[];
/**
 * Sort records by an order spec (string `"field asc, other desc"` or
 * pre-parsed `OrderSpec[]`).
 */
export declare function applyOrder<T extends Record<string, unknown>>(records: T[], order: string | OrderSpec[]): T[];
/** Project records to only the listed fields (plus `id`). */
export declare function applyFields<T extends Record<string, unknown>>(records: T[], fields: string[]): Record<string, unknown>[];
/**
 * Compose the standard query pipeline: where → order → groupBy →
 * pagination → fields projection. Returns the shape adapters use as
 * their query result.
 */
export declare function buildQueryResult(allRecords: Record<string, unknown>[], options?: QueryOptions): QueryResult;
declare const _default: {
    matchesWhere: typeof matchesWhere;
    validateQueryOptions: typeof validateQueryOptions;
    compileMatcher: typeof compileMatcher;
    applyOrder: (records: Record<string, unknown>[], order: string | OrderSpec[]) => Record<string, unknown>[];
    applyPagination: (records: Record<string, unknown>[] | null | undefined, limit: number | undefined, offset?: number) => Record<string, unknown>[];
    applyGroupBy: (records: Record<string, unknown>[], groupField: string | undefined) => Record<string, unknown>[];
    applyFields: (records: Record<string, unknown>[], fields: string[]) => Record<string, unknown>[];
    buildQueryResult: typeof buildQueryResult;
    parseOrder: typeof parseOrder;
};
export default _default;
