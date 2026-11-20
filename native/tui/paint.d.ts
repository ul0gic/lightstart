/**
 * @lightstart/light/native/tui/paint: a laid-out tree into a Screen, clipping
 * with a rectangle passed down the tree.
 */
import { TBox, TElement, TInput, TNode } from "./node.js";
import { Screen } from "./screen.js";
import { Style } from "./style.js";
export declare class Clip {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    constructor(x0: number, y0: number, x1: number, y1: number);
    intersect(x: number, y: number, w: number, h: number): Clip;
    contains(x: number, y: number): boolean;
    get empty(): boolean;
}
/** Where the caret shows after painting; (-1, -1) when it does not. */
export declare class Caret {
    x: number;
    y: number;
    constructor();
    get visible(): boolean;
}
type TabSpan = {
    index: number;
    start: number;
    end: number;
};
/**
 * The tab under screen column `x` on the box's top row, with its label's start and end columns (end exclusive), or null.
 */
export declare const tabSpanAt: (box: TBox, x: number) => TabSpan | null;
/**
 * The tab index under screen column `x` on the box's top row, or -1.
 */
export declare const tabAt: (box: TBox, x: number) => number;
/**
 * @param focus the focused element: an input shows its caret, anything else shows inverse
 */
export declare const paint: (node: TNode, screen: Screen, clip: Clip, inherited: Style, caret: Caret, focus: TElement | null) => void;
/**
 * The visual rows of an input at width `w`: each logical line split by character width.
 */
export declare const inputVisualRows: (input: TInput, w: number) => string[][];
/**
 * The visual row and column of the logical caret.
 */
export declare const inputCaretCell: (input: TInput, w: number) => [number, number];
/**
 * Paint the overlay layers under `root` over what the tree painted, in tree order, each over the
 * whole screen in the style its ancestors hand down, then its shadow: the column right of it and
 * the row below it take the shadow's bg and keep their glyphs.
 */
export declare const paintLayers: (root: TNode, screen: Screen, caret: Caret, focus: TElement | null) => void;
export {};
