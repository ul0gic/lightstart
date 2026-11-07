/** A prepared DOM template: the part specs with the node index each binds to, and the `<template>` holding the markup. */
export class DomPrepared extends Prepared {
    /**
     * @param {PartSpec[]} parts
     * @param {HTMLTemplateElement} el
     */
    constructor(parts: PartSpec[], el: HTMLTemplateElement);
    el: HTMLTemplateElement;
}
export class DomHost extends Host {
    /** @type {(() => void) | null} */
    _flush: (() => void) | null;
    _frameId: number;
    _watchingVisibility: boolean;
    /**
     * @param {ReadonlyArray<string>} strings
     * @param {number} kind
     * @returns {DomPrepared}
     */
    prepare(strings: ReadonlyArray<string>, kind: number): DomPrepared;
    /** @param {string} text */
    createText(text: string): Text;
    /** @param {string} label */
    createAnchor(label: string): Comment;
    /** @param {string} tag */
    createElement(tag: string): HTMLElement;
    createFragment(): DocumentFragment;
    /** @param {HostNode} node */
    parentOf(node: HostNode): ParentNode | null;
    /** @param {HostNode} node */
    nextSibling(node: HostNode): ChildNode | null;
    /** @param {string} markup */
    parseMarkup(markup: string): DocumentFragment;
    /**
     * @param {PartSpec} spec
     * @param {HostNode} el
     * @param {object | undefined} owner
     */
    createSlotPart(spec: PartSpec, el: HostNode, owner: object | undefined): SlotPart;
    _onVisibilityChange(): void;
}
import { Prepared } from "../html/host.js";
import type { PartSpec } from "../html/types.js";
import { Host } from "../html/host.js";
import type { HostNode } from "../html/host.js";
import { SlotPart } from "./slots.js";
