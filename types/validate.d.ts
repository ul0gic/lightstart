export function attachValidate(typeDef: object): TypeDefinition<never>;
export function validateType(object: Record<string, unknown>, { schema, row, undefinedProps, validateVirtual, operation, }: {
    schema: Record<string, TypeDefinition>;
    row?: Record<string, unknown>;
    undefinedProps?: boolean;
    validateVirtual?: boolean;
    operation?: string | null;
}): [Record<string, string> | null, Record<string, unknown> | null];
import type { TypeDefinition } from "./types.js";
