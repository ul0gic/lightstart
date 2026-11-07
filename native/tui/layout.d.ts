/**
 * @bootstrapp/light/native/tui/layout: two passes, measure bottom-up and arrange
 * top-down. One flex axis per box, fixed sizes, padding, a one-cell border,
 * scroll boxes that stick to the bottom. Wrapped text, measured sizes and
 * scroll positions are cached on the node across frames by version, so a
 * box measured again in the same frame, or in the next one with nothing
 * changed beneath it, answers at once; a cached Size is never changed. An
 * input, whose lines may be set without a version bump, is measured afresh.
 */
import { TBox, TElement, TInput, TNode } from "./node.js";
import { Style } from "./style.js";
import { InlineRun, WrappedLine } from "./wrap.js";
export declare class Size {
    w: number;
    h: number;
    constructor(w: number, h: number);
}
/** A box's last measure, kept across frames while the width it was offered, its version and the style it inherits hold. */
export declare class MeasureCache {
    width: number;
    version: number;
    under: Style;
    size: Size;
    constructor(width: number, version: number, under: Style, size: Size);
}
/** The wrapped lines of a text-like node, and its size at that width, kept across frames while its width, its version and the style it inherits hold. */
export declare class TextLayout {
    lines: WrappedLine[];
    wrappedFor: number;
    version: number;
    under: Style | null;
    naturalWidth: number;
    size: Size;
    constructor();
}
export declare const textLayoutOf: (node: TNode) => TextLayout;
/** Scroll state kept per box across frames. */
export declare class ScrollState {
    contentH: number;
    atBottom: boolean;
    constructor();
}
export declare const scrollStateOf: (box: TBox) => ScrollState;
/**
 * Collect a text's inline runs with their inherited styles.
 */
export declare const inlineRuns: (el: TElement, base: Style, out: InlineRun[]) => void;
/**
 * Visual rows an input needs at `width`; each logical line wraps by characters.
 */
export declare const inputRows: (input: TInput, width: number) => number;
/**
 * Measure a node for the available width; answers its natural size, which
 * the caller reads and never changes.
 */
export declare const measure: (node: TNode, availW: number, inherited: Style) => Size;
/**
 * Place `node` at (x, y) with size (w, h) and lay out its children.
 */
export declare const arrange: (node: TNode, x: number, y: number, w: number, h: number, inherited: Style) => void;
/**
 * Lay out the whole tree for a terminal of cols by rows.
 */
export declare const layout: (root: TBox, cols: number, rows: number, inherited: Style) => void;
/**
 * Scroll a box by `delta` rows, positive down; the next frame clamps it.
 */
export declare const scrollBy: (box: TBox, delta: number) => void;
/**
 * Forget the cached layout of a detached subtree.
 */
export declare const forgetLayout: (node: TNode) => void;
