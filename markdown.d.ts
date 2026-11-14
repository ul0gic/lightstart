/**
 * @file Markdown, a line at a time: a block's marker first (a heading's whole line, a quote, a list item's
 * bullet and task box, a rule, a table's pipes), then the inline marks of what follows (code spans,
 * strong and emphasis, links with their targets, bare URLs, HTML tags, escapes). Fenced code is
 * colored in the fence's language with a state of its own; front matter at the top reads as keys
 * and values. Underscores inside a word (snake_case) are not emphasis.
 */
import { HlState, Token } from "./state.js";
/**
 * One Markdown line's tokens, advancing `state` (front matter in `mode`, an open fence in `quote`
 * with its language in `rawLang` and that language's state in `inner`). `codeLine` tokenizes a
 * fenced line in its language.
 */
export declare const markdownLine: (text: string, state: HlState, codeLine: (language: string, text: string, state: HlState) => Token[]) => Token[];
