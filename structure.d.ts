/**
 * @file The shape of a Markdown line's structure: its block, quote and inline
 * spans, and the ranges inside them. Kept apart from the Markdown tokenizer so
 * a caller can name the shape without loading the grammar.
 */
import type { Token } from "./state.js";
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
