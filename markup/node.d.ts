/**
 * @bootstrapp/light/markup/node: an in-memory tree with the shape the
 * renderer's host seam needs and nothing a browser adds. Elements hold
 * attributes, properties and listeners as maps; a fragment's children move
 * into the parent it is inserted into; a root is the one container whose
 * descendants count as connected.
 */
/** @import { EventBinding } from "../html/parts.js" */
export class MNode {
    /** @type {MElement | null} */
    parent: MElement | null;
}
export class MText extends MNode {
    /** @param {string} data */
    constructor(data: string);
    /** @type {string} */
    data: string;
}
export class MComment extends MNode {
    /** @param {string} data */
    constructor(data: string);
    /** @type {string} */
    data: string;
}
/** A listener an element holds: the engine's binding and the options it was added with. */
export class MListener {
    /**
     * @param {EventBinding} binding
     * @param {{ capture: boolean, once: boolean, passive: boolean } | null} options
     */
    constructor(binding: EventBinding, options: {
        capture: boolean;
        once: boolean;
        passive: boolean;
    } | null);
    /** @type {EventBinding} */
    binding: EventBinding;
    /** @type {{ capture: boolean, once: boolean, passive: boolean } | null} */
    options: {
        capture: boolean;
        once: boolean;
        passive: boolean;
    } | null;
}
export class MElement extends MNode {
    /** @param {string} tag */
    constructor(tag: string);
    /** @type {string} */
    tag: string;
    /** @type {Map<string, string>} */
    attrs: Map<string, string>;
    /** @type {Map<string, unknown>} */
    props: Map<string, unknown>;
    /** @type {Map<string, MListener[]>} */
    listeners: Map<string, MListener[]>;
    /** @type {MNode[]} */
    children: MNode[];
}
/** A holder whose children splice into the parent it is inserted into, leaving it empty. */
export class MFragment extends MElement {
    constructor();
}
/** The container a rendered tree hangs from; its descendants are connected. */
export class MRoot extends MElement {
    constructor();
}
export function removeNode(node: MNode): void;
export function insertBefore(parent: MElement, node: MNode, ref: MNode | null): void;
export function nextSiblingOf(node: MNode): MNode | null;
export function isConnected(node: MNode): boolean;
export function descendants(node: MElement): MElement[];
import type { EventBinding } from "../html/parts.js";
