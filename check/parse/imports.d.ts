export function parseImports(source: string): ParsedImport[];
export function typeImports(source: string): Array<{
    spec: string;
    offset: number;
}>;
import type { ParsedImport } from "../types.js";
