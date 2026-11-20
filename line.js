/**
 * @file The two line writers a grammar uses: text run through a token-at-a-time
 * tokenizer, and a fenced Markdown line in its registered language (or as code
 * when none answers to it). Neither imports a grammar, so a grammar module can
 * use them without pulling in the others.
 */
import { findLanguage } from "./registry.js";
import { pushToken } from "./state.js";
import { Stream } from "./stream.js";
/** A line through a token-at-a-time tokenizer (`step` answers the token type at the stream). */
export const streamLine = (text, state, step) => {
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
