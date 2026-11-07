import type { ModelSchema, Row } from "./types.js";
/** A write the schema rejects; `errors` maps each failing field to its message. */
export declare class ValidationError extends Error {
    errors: Record<string, string>;
    constructor(model: string, errors: Record<string, string>);
}
/**
 * Validate a row against its schema: required fields (on add), value types,
 * the field's own `validator`, and `format`. Relation fields are validated as
 * the ids they are stored as.
 */
export declare function validateRow(models: Record<string, ModelSchema>, modelName: string, row: Row, options?: {
    operation?: "add" | "edit";
}): {
    valid: boolean;
    errors: Record<string, string>;
};
