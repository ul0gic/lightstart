import { HlState, Token } from "./state.js";
import { LineResult } from "./structure.js";
import type { Peek } from "./structure.js";
export { LineResult, MdBlock, MdLine, MdQuote, MdSpan, Range } from "./structure.js";
export type { Peek } from "./structure.js";
/**
 * One Markdown line's tokens and structure, advancing `state` (front matter in `mode`, an open fence
 * in `fence`, a table in `table`, the previous block in `prev`). `codeLine` tokenizes a fenced line
 * in its registered language; `peek` answers the line `offset` after this one.
 */
export declare const markdownLine: (text: string, state: HlState, codeLine: (language: string, text: string, state: HlState, peek: Peek) => Token[], peek: Peek) => LineResult;
