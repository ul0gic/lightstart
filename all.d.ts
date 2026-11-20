/**
 * @file Every built-in grammar at once, for a caller that tokenizes
 * synchronously and cannot await `loadLanguage` (a terminal view, a test).
 * Importing it registers JavaScript, TypeScript, CSS, HTML and Markdown.
 */
import "./lang/javascript.js";
import "./lang/typescript.js";
import "./lang/css.js";
import "./lang/html.js";
import "./lang/markdown.js";
/** Kept for callers that register at start; the imports above already did. */
export declare const registerLanguages: () => void;
