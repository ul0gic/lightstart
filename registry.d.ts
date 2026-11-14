/**
 * @file The languages the code column and the chat's code blocks color, as the languages plugin
 * registers them: each with the file extensions and the fence names it answers to, and a tokenizer
 * for one line (the state carried to the next; tokenizers.ts names the core's). With none
 * registered nothing is colored. The registry is the process's, so a plugin's languages are
 * removed by its id when it stops.
 */
import { HlState, Token } from "./state.js";
export declare class Language {
    readonly id: string;
    /** Lower-case file extensions ("ts"). */
    readonly extensions: string[];
    /** Lower-case names a Markdown fence gives it ("typescript", "ts"). */
    readonly fences: string[];
    readonly tokenizeText: (text: string, state: HlState) => Token[];
    /** The plugin that registered it ("" for none). */
    owner: string;
    constructor(id: string, extensions: string[], fences: string[], tokenizeText: (text: string, state: HlState) => Token[]);
}
/** Register `l`; a later one with the same id replaces the earlier. */
export declare const addLanguage: (l: Language) => void;
/** Forget the languages plugin `owner` registered. */
export declare const removeLanguages: (owner: string) => void;
export declare const findLanguage: (id: string) => Language | null;
/** The language of a file by its extension, "" when none registered answers to it. */
export declare const languageForPath: (path: string) => string;
/** The language a Markdown code fence names (```ts), "" when none registered answers to it. */
export declare const languageForFence: (info: string) => string;
