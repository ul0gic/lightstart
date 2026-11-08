/**
 * @lightstart/light/native/tui/wrap: line wrapping over styled inline runs. The
 * output is a list of visual lines made of cells, each a grapheme with its
 * width and style, ready to paint.
 */
import { Style } from "./style.js";
export declare class Cell {
    g: string;
    w: number;
    style: Style;
    constructor(g: string, w: number, style: Style);
}
export declare class InlineRun {
    text: string;
    style: Style;
    constructor(text: string, style: Style);
}
export declare class WrappedLine {
    cells: Cell[];
    width: number;
    constructor(cells: Cell[], width: number);
}
/**
 * Wrap runs to `width` cells. "word" breaks after spaces (dropping the
 * space) and falls back to character breaks for words longer than the
 * width; "char" breaks anywhere; "none" breaks only at newlines. Newlines
 * always break. A zero width wraps at one cell.
 */
export declare const wrapRuns: (runs: InlineRun[], width: number, mode: string) => WrappedLine[];
/**
 * The plain text of a wrapped line, for tests and dumps.
 */
export declare const lineText: (line: WrappedLine) => string;
