/** @type {{ lines: ((code: string, language?: string) => Run[][]) | null }} */
export const highlighter: {
    lines: ((code: string, language?: string) => Run[][]) | null;
};
export function configureHighlight(options: Partial<typeof highlighter>): void;
export function ensureLanguage(language: string, onReady: () => void): void;
export function highlightLines(code: string, language?: string): Run[][];
import type { Run } from "../types.js";
