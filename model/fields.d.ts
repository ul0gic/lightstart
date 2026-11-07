/**
 * How the model reads a record by a key named at run time. A key the record
 * may not hold is read as possibly undefined, which a native build needs to
 * answer `undefined` for it. A schema is a record of field descriptors and
 * `$` directives; its entries are read through its untyped view, so a native
 * build reads them the same way whether the schema was built in TypeScript
 * or in JavaScript.
 */
import type { ModelField, ModelSchema } from "./types.js";
/** `record[key]`, typed as possibly undefined. */
export declare const entryOf: <T>(record: Record<string, T>, key: string) => T | undefined;
/** The entry `name` of `schema`: a field, a directive, or undefined. */
export declare const schemaEntry: (schema: ModelSchema, name: string) => unknown;
/** The field `name` of `schema`, or undefined. */
export declare const schemaField: (schema: ModelSchema, name: string) => ModelField | undefined;
/** Visit each field of `schema` that holds a descriptor, in the schema's order; `$` directives are not fields. */
export declare const eachField: (schema: ModelSchema | undefined, visit: (field: string, def: ModelField) => void) => void;
