import { Line, LineSource } from "./lines.js";
import { View } from "./view.js";
/** What a press on a line says: the line's index and the column within the pane. */
export declare class LinePress {
    readonly index: number;
    readonly column: number;
    constructor(index: number, column: number);
}
/** What a drag selected: its text and the rows it spans. */
export declare class LineCopy {
    readonly text: string;
    readonly rows: number;
    constructor(text: string, rows: number);
}
/** A line as a row of spans, a live run as the spinner's frame at `now`. */
export declare const lineTemplate: (l: Line, now: number) => unknown;
export declare class LineView extends View {
    source: LineSource;
    top: number;
    follow: boolean;
    followable: boolean;
    fit: boolean;
    rows: number;
    cols: number;
    trackFg: string;
    thumbFg: string;
    heldFg: string;
    private holding;
    private moved;
    private pressX;
    private pressY;
    private pressRow;
    private fromRow;
    private fromCell;
    private toRow;
    private toCell;
    private grab;
    private grabStart;
    private grabTop;
    private readonly live;
    constructor();
    connected(): void;
    /** Render again (the source changed). */
    refresh(): void;
    /** Draw the live tail again (its spinner, its clocks); the rest stays as drawn. */
    refreshLive(): void;
    setSource(source: LineSource): void;
    /** Show `source` from its top, following its end while `follow`; reaching the end follows again. */
    show(source: LineSource, follow: boolean): void;
    /** A press on line `index` at `column`: a `press` event with a `LinePress`, which bubbles to the owner's `@press=` (the mouse makes it; a test may). */
    press(index: number, column: number): void;
    /** Drop the selection. */
    clearSelection(): void;
    /** Scroll by `delta` lines; scrolling up leaves follow mode, reaching the end re-enters it. */
    scroll(delta: number): void;
    /** Show the lines from `top`, as a scroll would. */
    scrollTo(top: number): void;
    /** Scroll half the viewport (at least a line), so the continuation of what was read stays in view. */
    page(direction: number): void;
    toTop(): void;
    toEnd(): void;
    /** Scroll the least so line `index` shows; `center` puts it in the upper third. */
    reveal(index: number, center: boolean): void;
    maxTop(): number;
    /** The line a press at row `index` landed on (for owners that read its tag). */
    lineAt(index: number): Line | null;
    private measure;
    private wheel;
    private mouseDown;
    private mouseMove;
    private mouseUp;
    private barPress;
    private barDrag;
    private barRelease;
    private forward;
    private startRow;
    private startCell;
    private endRow;
    private endCell;
    private shown;
    private window;
    private liveLines;
    render(): unknown;
}
