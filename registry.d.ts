/**
 * @file The languages the code column and the chat's code blocks color, as the languages plugin
 * registers them: each with the file extensions and the fence names it answers to, and a tokenizer
 * for one line (the state carried to the next). With none
 * registered nothing is colored. The registry is the process's, so a plugin's languages are
 * removed by its id when it stops.
 */
import { HlState, Token } from "./state.js";
import type { LineResult, Peek } from "./structure.js";
export declare class Language {
    readonly id: string;
    /** Lower-case file extensions ("ts"). */
    readonly extensions: string[];
    /** Lower-case names a Markdown fence gives it ("typescript", "ts"). */
    readonly fences: string[];
    readonly tokenizeText: (text: string, state: HlState, peek: (offset: number) => string | null) => Token[];
    /** The plugin that registered it ("" for none). */
    owner: string;
    /** How many lines after one its tokens depend on (a Markdown table's header waits for its delimiter row). */
    lookAhead: number;
    /** The extra indentation a new line takes after `textBeforeCursor` (1 after an opening bracket). */
    indentAfter: (textBeforeCursor: string) => number;
    constructor(id: string, extensions: string[], fences: string[], tokenizeText: (text: string, state: HlState, peek: (offset: number) => string | null) => Token[]);
}
type StructureFn = (text: string, state: HlState, peek: Peek) => LineResult;
/** Register the structure reader a loaded Markdown grammar answers, so a synchronous caller can use it once the grammar is loaded. */
export declare const setMarkdownStructure: (fn: StructureFn) => void;
/** The loaded Markdown grammar's structure reader, or null before it loads. */
export declare const markdownStructureHook: () => StructureFn | null;
/** Register `l`; a later one with the same id replaces the earlier. */
export declare const addLanguage: (l: Language) => void;
/** Forget the languages plugin `owner` registered. */
export declare const removeLanguages: (owner: string) => void;
export declare const findLanguage: (id: string) => Language | null;
/** The language of a file by its extension, "" when none registered answers to it. */
export declare const languageForPath: (path: string) => string;
/** The language a Markdown code fence names (```ts), "" when none registered answers to it. */
export declare const languageForFence: (info: string) => string;
export {};
