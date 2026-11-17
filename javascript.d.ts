/**
 * @file JavaScript (and JSON, and TypeScript with its own keywords) tokenizer: template literals
 * nest through a frame stack in the state; regex versus division follows what the previous
 * significant token allows. A token
 * function answers the token type, or "" for text that gets no color.
 */
import { HlState } from "./state.js";
import { Stream } from "./stream.js";
export declare const jsToken: (stream: Stream, state: HlState, typescript: boolean) => string;
