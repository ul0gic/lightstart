import { HlState, Token } from "./state.js";
import { Stream } from "./stream.js";
import type { Peek } from "./structure.js";
/** A line through a token-at-a-time tokenizer (`step` answers the token type at the stream). */
export declare const streamLine: (text: string, state: HlState, step: (stream: Stream, state: HlState) => string) => Token[];
/** A fenced line in its registered language, or as code when none answers to it. */
export declare const fencedLine: (language: string, text: string, state: HlState, peek: Peek) => Token[];
