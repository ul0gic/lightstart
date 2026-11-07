/** @import { HostNode } from "../html/host.js" */
/** @import { EventBinding } from "../html/parts.js" */
/** @import { PartSpec } from "../html/types.js" */
/** A prepared markup template: the part specs with the node index each binds to, and the template tree. */
export class MarkupPrepared extends Prepared {
    /**
     * @param {PartSpec[]} parts
     * @param {TplNode[]} tree
     */
    constructor(parts: PartSpec[], tree: TplNode[]);
    /** @type {TplNode[]} */
    tree: TplNode[];
}
export class MarkupHost extends Host {
    /** @type {((error: unknown) => void) | null} */
    onError: ((error: unknown) => void) | null;
    /**
     * @param {ReadonlyArray<string>} strings
     * @param {number} kind
     * @returns {MarkupPrepared}
     */
    prepare(strings: ReadonlyArray<string>, kind: number): MarkupPrepared;
    /** @param {string} text */
    createText(text: string): MText;
    /** @param {string} label */
    createAnchor(label: string): MComment;
    /** @param {string} tag */
    createElement(tag: string): MElement;
    createFragment(): MFragment;
    /** @param {HostNode} node */
    parentOf(node: HostNode): MElement | null;
    /** @param {HostNode} node */
    nextSibling(node: HostNode): MNode | null;
    /** @param {unknown} value */
    asNode(value: unknown): MNode | null;
    /** @param {string} markup */
    parseMarkup(markup: string): MFragment;
    /**
     * @param {PartSpec} _spec
     * @param {HostNode} _el
     * @param {object | undefined} _owner
     */
    createSlotPart(_spec: PartSpec, _el: HostNode, _owner: object | undefined): {
        setFromValues(): void;
        adopt(): void;
        dispose(): void;
    };
}
export function dispatch(el: MElement, name: string, event: unknown): number;
import { Prepared } from "../html/host.js";
import { TplNode } from "../html/tokenizer.js";
import type { PartSpec } from "../html/types.js";
import { Host } from "../html/host.js";
import { MText } from "./node.js";
import { MComment } from "./node.js";
import { MElement } from "./node.js";
import { MFragment } from "./node.js";
import type { HostNode } from "../html/host.js";
import { MNode } from "./node.js";
