export const TYPESCRIPT_HINT: "light classes:bake reads templates with TypeScript 6: typescript 6, or @typescript/typescript6 beside TypeScript 7.\n  Install it where you are running from:  npm i -D @typescript/typescript6";
export function classStringsOf(source: string, file: string, ts: typeof import("typescript")): {
    classes: string[];
    problems: string[];
};
export function collectClasses(entry: string, ts: typeof import("typescript")): {
    classes: string[];
    problems: string[];
    files: string[];
};
export function bakeTables(classes: string[], theme: ThemeData, schemes: string[]): {
    tables: Map<string, BakedEntry[]>;
    problems: string[];
};
export function render(tables: Map<string, BakedEntry[]>, entry: string, command: string): string;
export function bake(argv: string[]): Promise<boolean>;
import type { ThemeData } from "./tokens.js";
import type { BakedEntry } from "./baked.js";
