import { TBox, TElement, TNode } from "./node.js";
/**
 * The deepest visible element under the cell (x, y), or null when nothing
 * laid out covers it. A box clips its children to its inner rectangle.
 */
export declare const hitTest: (node: TNode, x: number, y: number) => TElement | null;
export declare const isFocusable: (el: TElement) => boolean;
/**
 * The focusable elements under `node` in document order, hidden subtrees skipped.
 */
export declare const focusables: (node: TNode, out: TElement[]) => TElement[];
/**
 * The focusable element `delta` steps (1 or -1) after `current` in document
 * order, wrapping around; the first or last when nothing is focused.
 */
export declare const nextFocusable: (root: TElement, current: TElement | null, delta: number) => TElement | null;
/**
 * The focus moved from `prev` to `next` under `root`: the path that held the
 * `focus-within` state loses it with the `focus` state at its end (walked
 * down from the root, and up from `prev` when it has left the tree), `next`
 * takes `focus` and, with its ancestors, `focus-within`; every element
 * touched applies its classes again.
 */
export declare const focusStates: (root: TElement, prev: TElement | null, next: TElement | null) => void;
/**
 * The nearest scrolling box at or above `el`, or null.
 */
export declare const scrollBoxOf: (el: TElement | null) => TBox | null;
