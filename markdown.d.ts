import { HlState, Token } from "./state.js";
/** The language of the line after this one, or null for none. */
export type Peek = (offset: number) => string | null;
/** A range of columns within a line. */
export declare class Range {
    from: number;
    to: number;
    constructor(from: number, to: number);
}
/** A block of a Markdown line, with the fields its `kind` uses. */
export declare class MdBlock {
    kind: string;
    level: number;
    mark: Range | null;
    edge: string | null;
    lang: string;
    ordered: boolean;
    task: boolean | null;
    checkbox: Range | null;
    indent: number;
    row: string;
    cells: Range[];
    constructor(kind: string);
}
/** An inline span of a Markdown line, with its marks and any target or name. */
export declare class MdSpan {
    type: string;
    from: number;
    to: number;
    open: Range | null;
    close: Range | null;
    url: string;
    name: string;
    display: string;
    constructor(type: string, from: number, to: number, open: Range | null, close: Range | null);
}
/** A line's quote depth and the ranges of its quote marks. */
export declare class MdQuote {
    depth: number;
    marks: Range[];
    constructor(depth: number, marks: Range[]);
}
/** One Markdown line's block, quote and inline spans. */
export declare class MdLine {
    block: MdBlock;
    quote: MdQuote;
    spans: MdSpan[];
    constructor(block: MdBlock, quote: MdQuote, spans: MdSpan[]);
}
/** A Markdown line's tokens and its structure, `md` null for another language. */
export declare class LineResult {
    tokens: Token[];
    md: MdLine | null;
    constructor(tokens: Token[], md: MdLine | null);
}
/**
 * One Markdown line's tokens and structure, advancing `state` (front matter in `mode`, an open fence
 * in `fence`, a table in `table`, the previous block in `prev`). `codeLine` tokenizes a fenced line
 * in its registered language; `peek` answers the line `offset` after this one.
 */
export declare const markdownLine: (text: string, state: HlState, codeLine: (language: string, text: string, state: HlState, peek: Peek) => Token[], peek: Peek) => LineResult;
