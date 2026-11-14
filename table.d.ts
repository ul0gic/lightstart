/**
 * @file A Markdown table as data: the cells in columns, each column's alignment and its rows. The
 * terminal renderer (`@light/markdown/table.ts`) lays one out; the parser fills one from a GFM
 * header, delimiter and body. A cell is its text: a renderer parses it with `parseInline`. `\|` is
 * a bar in a cell, and a bar inside `code` does not split it.
 */
import { Block } from "./nodes.js";
/** A column's alignment, as its delimiter cell says. */
export type Align = "left" | "center" | "right";
/** A table block: its header, the alignments under it and its rows, all cells as text. */
export declare class Table extends Block {
    header: string[];
    aligns: Align[];
    rows: string[][];
    constructor(header: string[], aligns: Align[], rows: string[][]);
}
/** The cells of a row: split on bars outside code spans, `\|` a bar in a cell, the outer bars dropped. */
export declare const cells: (line: string) => string[];
/** The table whose header stands at `lines[at]` over a delimiter row, and the index after its last row; null when none does. */
export declare const parseTable: (lines: string[], at: number) => {
    table: Table;
    end: number;
} | null;
