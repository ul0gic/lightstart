export function timestampValidator(value: unknown, prop: {
    update?: boolean;
    create?: boolean;
    min?: number;
    max?: number;
}, context?: {
    operation?: string;
}): ValidationTuple;
export function createTimestamp(options?: TypeOptions & {
    update?: boolean;
    create?: boolean;
}): TypeDefinition;
import type { ValidationTuple } from "./types.js";
import type { TypeOptions } from "./types.js";
import type { TypeDefinition } from "./types.js";
