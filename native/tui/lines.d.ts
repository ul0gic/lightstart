/**
 * @lightstart/light/native/tui/lines: styled lines, the unit a windowed list
 * draws. A `Run` is a piece of a line in one style ("" colors inherit;
 * `inverse` draws it with its colors swapped, a selection; `live` names what
 * moves on its own, "spinner" drawn as the spinner's frame of the moment). A
 * `Line` is its runs and the row's background, what a press on it acts on
 * (`tag`), how many leading runs only decorate (`decor`: a prompt's "› ", an
 * indent, left out of a copy), and whether it continues the row above
 * (`wrapped`, joined back by `joint` in a copy). A `LineSource` answers a
 * count and builds a line on demand for a width, so a long transcript or
 * file is never one node per line: a `LineView` asks for the visible window
 * only. No view code here, so what renders lines, and its tests, stay free
 * of the terminal tree.
 */
export declare class Run {
    text: string;
    fg: string;
    bg: string;
    bold: boolean;
    dim: boolean;
    italic: boolean;
    underline: boolean;
    inverse: boolean;
    live: string;
    constructor(text: string, fg: string);
    /** A run with `text` in this run's style, its inverse and live marks included. */
    restyle(text: string): Run;
}
export declare class Line {
    runs: Run[];
    bg: string;
    tag: unknown;
    decor: number;
    wrapped: boolean;
    joint: string;
    /** Add a run of `text` in `fg`; answers it, for its other styles. */
    add(text: string, fg: string): Run;
}
/**
 * What a `LineView` shows: `count` lines, each built for a width when it
 * scrolls into view. `prepare` runs before each render with the width the
 * lines get. `liveFrom` is the first line that changes on its own while it
 * is shown (a spinner, a clock) and every line after it, or `count()` when
 * none does: the view draws that tail apart and redraws it alone on each
 * tick. `copyText` is the text a copy of rows `from` (from cell `fromCell`)
 * to `to` (before cell `toCell`, -1 for the row's end) gives when the source
 * knows better than its rows (a file's own lines), or null for the rows'
 * text.
 */
export declare abstract class LineSource {
    prepare(_width: number): void;
    abstract count(): number;
    abstract line(index: number, width: number): Line;
    liveFrom(): number;
    copyText(_from: number, _fromCell: number, _to: number, _toCell: number, _width: number): string | null;
}
