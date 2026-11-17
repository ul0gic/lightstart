/**
 * @file The tokenizers the core has, by the name a languages plugin registers a language with:
 * "javascript", "typescript" (JavaScript's with types), "css", "html" (with the JavaScript and CSS
 * inside it) and "markdown" (its fenced code in the fence's language when one is registered). Each
 * colors one line and carries its state to the next; Markdown also answers the line's structure.
 */
import { cssToken } from "./css.js";
import { htmlToken } from "./html.js";
import { jsToken } from "./javascript.js";
import { markdownLine } from "./markdown.js";
import { findLanguage } from "./registry.js";
import { HlState, pushToken, Token } from "./state.js";
import { Stream } from "./stream.js";
/** The names tokenizerFor knows. */
export const TOKENIZERS = ["javascript", "typescript", "css", "html", "markdown"];
/** A line through a token-at-a-time tokenizer (`step` answers the token type at the stream). */
const streamLine = (text, state, step) => {
    const tokens = [];
    const stream = new Stream(text, 0, text.length);
    while (!stream.eol()) {
        stream.start = stream.pos;
        const type = step(stream, state);
        if (stream.pos === stream.start)
            stream.pos++;
        if (type.length > 0)
            pushToken(tokens, stream.start, stream.pos, type);
    }
    return tokens;
};
/** A fenced line in its registered language, or as code when none answers to it. */
export const fencedLine = (language, text, state, peek) => {
    const l = findLanguage(language);
    if (l !== null)
        return l.tokenizeText(text, state, peek);
    const tokens = [];
    pushToken(tokens, 0, text.length, "code");
    return tokens;
};
/** A Markdown line's tokens and structure. */
export const markdownStructure = (text, state, peek) => markdownLine(text, state, fencedLine, peek);
/** The tokenizer named `name`; null for none. */
export const tokenizerFor = (name) => {
    switch (name) {
        case "javascript":
            return (text, state, _peek) => streamLine(text, state, (s, st) => jsToken(s, st, false));
        case "typescript":
            return (text, state, _peek) => streamLine(text, state, (s, st) => jsToken(s, st, true));
        case "css":
            return (text, state, _peek) => streamLine(text, state, cssToken);
        case "html":
            return (text, state, _peek) => streamLine(text, state, htmlToken);
        case "markdown":
            return (text, state, peek) => markdownStructure(text, state, peek).tokens;
    }
    return null;
};
