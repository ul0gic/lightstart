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
    get nodeType(): number;
    get textContent(): string;
}
export class MComment extends MNode {
    /** @param {string} data */
    constructor(data: string);
    /** @type {string} */
    data: string;
    get nodeType(): number;
    get textContent(): string;
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
    /** @type {unknown} */
    raw: unknown;
}
export class MElement extends MNode {
    /** @param {string} tag */
    constructor(tag?: string);
    /** @type {string} */
    tag: string;
    /** @type {Map<string, string>} */
    attrs: Map<string, string>;
    /** @type {Map<string, unknown>} */
    props: Map<string, unknown>;
    /** @type {Map<string, MListener[]>} */
    listeners: Map<string, MListener[]>;
    /** @type {MNode[]} */
    _childNodes: MNode[];
    /** @type {boolean} */
    _viewConnected: boolean;
    /** @type {object | undefined} */
    _style: object | undefined;
    get nodeType(): number;
    /** @param {string} name */
    getAttribute(name: string): string | null;
    /**
     * @param {string} name
     * @param {unknown} value
     */
    setAttribute(name: string, value: unknown): void;
    /** @param {string} name */
    hasAttribute(name: string): boolean;
    /** @param {string} name */
    removeAttribute(name: string): void;
    /**
     * @param {string} name
     * @param {boolean} [force]
     */
    toggleAttribute(name: string, force?: boolean): boolean;
    getAttributeNames(): string[];
    get attributes(): {
        name: string;
        value: string;
    }[];
    /** @returns {object} the minimal `ElementInternals` a form-associated component reads off the browser */
    attachInternals(): object;
    /** @param {MNode[]} nodes */
    set childNodes(nodes: MNode[]);
    /** @returns {MNode[]} */
    get childNodes(): MNode[];
    /** @returns {MNode[]} */
    get children(): MNode[];
    get firstChild(): MNode | null;
    get lastChild(): MNode | null;
    get parentNode(): MElement | null;
    /** @returns {MElement | null} */
    get parentElement(): MElement | null;
    get isConnected(): boolean;
    get localName(): string;
    get tagName(): string;
    get classList(): {
        /** @param {...string} names */
        add(...names: string[]): void;
        /** @param {...string} names */
        remove(...names: string[]): void;
        /** @param {string} name */
        contains(name: string): boolean;
        /**
         * @param {string} name
         * @param {boolean} [force]
         */
        toggle(name: string, force?: boolean): boolean;
        readonly length: number;
    };
    get style(): object;
    /**
     * @param {string} name
     * @param {EventListenerOrEventListenerObject} listener
     * @param {AddEventListenerOptions | boolean} [options]
     */
    addEventListener(name: string, listener: EventListenerOrEventListenerObject, options?: AddEventListenerOptions | boolean): void;
    /**
     * @param {string} name
     * @param {EventListenerOrEventListenerObject} listener
     */
    removeEventListener(name: string, listener: EventListenerOrEventListenerObject): void;
    /** @param {{ type?: string }} event */
    dispatchEvent(event: {
        type?: string;
    }): boolean;
    /** @param {...(MNode | string)} nodes */
    append(...nodes: (MNode | string)[]): void;
    /** @param {MNode | string} node */
    appendChild(node: MNode | string): MNode;
    /**
     * @param {MNode | string} node
     * @param {MNode | null} ref
     */
    insertBefore(node: MNode | string, ref: MNode | null): MNode;
    /** @param {MNode} node */
    removeChild(node: MNode): MNode;
    /** @param {...(MNode | string)} nodes */
    replaceWith(...nodes: (MNode | string)[]): void;
    remove(): void;
    /** @param {MNode} node */
    contains(node: MNode): boolean;
    getRootNode(): MNode;
    /** @param {string} selector */
    querySelector(selector: string): MElement | null;
    /** @param {string} selector */
    querySelectorAll(selector: string): MElement[];
    set textContent(value: string);
    get textContent(): string;
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
export function disconnectTree(node: MNode): void;
export function dispatch(el: MElement, name: string, event: unknown): number;
export type ParsedSelector = {
    compound: string;
    combinator: string;
}[];
import type { EventBinding } from "../html/parts.js";
