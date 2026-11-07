/**
 * Syntax colouring for `<lc-code-block>`, handed in by the host. Light draws a
 * snippet as plain lines until something configures a tokenizer; in a
 * Bootstrapp app `@bootstrapp/editor` does at boot, so a snippet and the same
 * text open in `<editor-code>` colour identically.
 */
/** @import { Run } from "../types.js" */
/** @type {{ lines: ((code: string, language?: string) => Run[][]) | null }} */
export const highlighter: {
    lines: ((code: string, language?: string) => Run[][]) | null;
};
export function configureHighlight(options: Partial<typeof highlighter>): void;
export function highlightLines(code: string, language?: string): Run[][];
import type { Run } from "../types.js";
