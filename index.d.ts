import { HlState, Token } from "./state.js";
export { HlState, Token } from "./state.js";
export { addLanguage, Language, languageForFence, languageForPath } from "./registry.js";
/** Tokens of one line in `language`, advancing `state` to the next line's; [] for a language not registered. */
export declare const tokenizeLine: (language: string, text: string, state: HlState) => Token[];
/** Every line's tokens, the state carried from line to line. */
export declare const tokenizeAll: (language: string, lines: string[]) => Token[][];
/** The color of a token type (One Dark, as the editor's defaults); "" keeps the text color. */
export declare const TOKEN_COLORS: Map<string, string>;
/** How a token type is drawn besides its color: "bold", "italic", "underline" or "". */
export declare const tokenStyle: (type: string) => string;
