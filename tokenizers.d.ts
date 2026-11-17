import type { LineResult, Peek } from "./markdown.js";
import { HlState, Token } from "./state.js";
/** The names tokenizerFor knows. */
export declare const TOKENIZERS: string[];
/** A fenced line in its registered language, or as code when none answers to it. */
export declare const fencedLine: (language: string, text: string, state: HlState, peek: Peek) => Token[];
/** A Markdown line's tokens and structure. */
export declare const markdownStructure: (text: string, state: HlState, peek: Peek) => LineResult;
/** The tokenizer named `name`; null for none. */
export declare const tokenizerFor: (name: string) => ((text: string, state: HlState, peek: Peek) => Token[]) | null;
