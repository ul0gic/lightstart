/**
 * @bootstrapp/light/native/tui/dump: a tree as indented text, for tests and the
 * dump flag.
 */
import { TNode } from "./node.js";
/**
 * An indented rendering of a subtree: `box[border]`, `"run text"`, `|` for an anchor.
 */
export declare const dumpTree: (node: TNode, showAnchors: boolean) => string;
/**
 * The text of every run under `node`, in document order.
 */
export declare const textOf: (node: TNode) => string;
