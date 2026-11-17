/**
 * @file CSS tokenizer. Each statement inside a block is a
 * nested rule when its line reaches a `{` before a `;`, a declaration otherwise; that one rule
 * covers nesting without more machinery.
 */
import { HlState } from "./state.js";
import { Stream } from "./stream.js";
export declare const cssToken: (stream: Stream, state: HlState) => string;
