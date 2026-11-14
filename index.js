/**
 * @file Syntax highlighting for the code column and the chat's code blocks: a line's tokens in the
 * language registered under its id (registry.ts; the languages plugin registers JavaScript,
 * TypeScript and JSON, CSS, HTML and Markdown), each token type's color and style. A line is
 * tokenized with the state the previous line left.
 */
import { findLanguage } from "./registry.js";
import { HlState, Token } from "./state.js";
export { HlState, Token } from "./state.js";
export { addLanguage, Language, languageForFence, languageForPath } from "./registry.js";
/** Tokens of one line in `language`, advancing `state` to the next line's; [] for a language not registered. */
export const tokenizeLine = (language, text, state) => {
    const l = findLanguage(language);
    return l !== null ? l.tokenizeText(text, state) : [];
};
/** Every line's tokens, the state carried from line to line. */
export const tokenizeAll = (language, lines) => {
    const state = new HlState();
    const out = [];
    for (const l of lines)
        out.push(tokenizeLine(language, l, state));
    return out;
};
/** The color of a token type (One Dark, as the editor's defaults); "" keeps the text color. */
export const TOKEN_COLORS = new Map([
    ["keyword", "#c678dd"],
    ["atom", "#56b6c2"],
    ["number", "#d19a66"],
    ["string", "#98c379"],
    ["comment", "#7f848e"],
    ["property", "#61afef"],
    ["definition", "#e5c07b"],
    ["tag", "#e06c75"],
    ["attribute", "#d19a66"],
    ["regexp", "#56b6c2"],
    ["escape", "#56b6c2"],
    ["meta", "#7f848e"],
    ["heading", "#e06c75"],
    ["strong", "#d19a66"],
    ["emphasis", "#c678dd"],
    ["link", "#61afef"],
    ["url", "#56b6c2"],
    ["list", "#e5c07b"],
    ["quote", "#7f848e"],
]);
/** How a token type is drawn besides its color: "bold", "italic", "underline" or "". */
export const tokenStyle = (type) => (type === "heading" || type === "strong" ? "bold" : type === "emphasis" || type === "quote" || type === "comment" ? "italic" : type === "url" ? "underline" : "");
