import { HlState, Token } from "./state.js";
import { LineResult } from "./markdown.js";
export { HlState, Token } from "./state.js";
export { addLanguage, Language, languageForFence, languageForPath } from "./registry.js";
export { LineResult, MdBlock, MdLine, MdQuote, MdSpan, Range } from "./markdown.js";
/** A line's tokens in `language`, advancing `state` to the next line's; [] for a language not registered. */
export declare const tokenizeLine: (language: string, text: string, state: HlState) => Token[];
/** Every line's tokens, the state carried from line to line, `peek` answering the lines below. */
export declare const tokenizeAll: (language: string, lines: string[]) => Token[][];
/**
 * A line's tokens and, for `markdown`, its structure; `md` is null for another language. Like
 * `tokenizeLine`, it advances `state` in place; `peek` answers the line `offset` after this one,
 * null for none.
 */
export declare const tokenizeLineWithStructure: (language: string, text: string, state: HlState, peek: (offset: number) => string | null) => LineResult;
/** The color of a token type (One Dark, as the editor's defaults); "" keeps the text color. */
export declare const TOKEN_COLORS: Map<string, string>;
/** How a token type is drawn besides its color: "bold", "italic", "underline" or "". */
export declare const tokenStyle: (type: string) => string;
