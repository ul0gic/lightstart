export function createFileType(options?: TypeOptions & {
    accept?: string;
    maxSize?: number;
    maxWidth?: number | null;
    maxHeight?: number | null;
    quality?: number | null;
}): TypeDefinition;
export function createFilesType(options?: TypeOptions & {
    accept?: string;
    maxSize?: number;
    maxWidth?: number | null;
    maxHeight?: number | null;
    quality?: number | null;
    maxItems?: number | null;
}): TypeDefinition;
import type { TypeOptions } from "./types.js";
import type { TypeDefinition } from "./types.js";
