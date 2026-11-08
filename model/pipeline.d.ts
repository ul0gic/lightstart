/**
 * @lightstart/light/model/pipeline: the synchronous steps of a model write,
 * shared by the store (which runs them between its async hooks, uploads and
 * adapter calls) and by a writer over a synchronous database, which runs the
 * whole pipeline inside one transaction. A row is copied, never changed.
 */
import type { ModelSchema, Row } from "./types.js";
/** A row as an adapter stores it: a `many`/`one` value dropped, a loaded `belongs` row reduced to its id. */
export declare const forStorage: (schema: ModelSchema | undefined, row: Row) => Row;
/** The row with every absent field that declares a default filled in; a function default is called, an object one cloned. */
export declare const withDefaults: (schema: ModelSchema | undefined, row: Row) => Row;
/** The patch without the fields the schema marks `immutable` (an `id` stays). */
export declare const withoutImmutable: (schema: ModelSchema | undefined, patch: Row) => Row;
/** Whether `schema` declares a numeric id, which the database assigns when a row has none. */
export declare const numericIdOf: (schema: ModelSchema | undefined) => boolean;
/** The row with an id: its own, else `next()` when the adapter makes ids, else a fresh one unless the id is numeric. */
export declare const withId: (schema: ModelSchema | undefined, row: Row, next?: (() => string | number) | null) => Row;
/** The row an add stores, after its before hook and its id: relations reduced, defaults filled, validated. */
export declare const prepareAddRow: (models: Record<string, ModelSchema>, model: string, row: Row) => Row;
/** The row an edit stores: `changes` (after the before hook) merged over `current`, relations reduced, validated. */
export declare const prepareEditRow: (models: Record<string, ModelSchema>, model: string, current: Row, changes: Row, id: string | number) => Row;
