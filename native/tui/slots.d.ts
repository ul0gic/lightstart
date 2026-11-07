import { Part } from "../../html/part.js";
import { TAnchor, TBox, TNode } from "./node.js";
import type { View } from "./view.js";
/** The root start anchor of a rendered box, or null before its first render. */
export declare const rootStart: (box: TBox) => TAnchor | null;
/** The part for a `<slot>` element of a view's template. */
export declare class TSlotPart extends Part {
    el: TBox;
    owner: View | null;
    units: TNode[][];
    parked: TNode[] | null;
    constructor(el: TBox, owner: View | null);
    name(): string;
    /** Take the fallback, the slot's own children, out and keep it for when the slot empties. */
    park(): void;
    restore(): void;
    /** Put the units back before the root range of the owner's box, and the fallback back in. */
    release(): void;
    dispose(): void;
}
/** Project a view's light units into the slots of its rendered template, in at most three passes. */
export declare const projectSlots: (box: TBox, parts: TSlotPart[]) => void;
