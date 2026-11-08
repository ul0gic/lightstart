/**
 * @lightstart/light/native/tui/host: the renderer on the terminal node tree.
 * Templates are read from the parser's marker markup with the tokenizer
 * and cloned into terminal nodes under the terminal's whitespace rules
 * (blank text between block children is dropped, inline text collapses
 * its spaces); attributes become the element's props; listeners are
 * handler entries on the element; a view that owns an element attaches
 * when the element joins the root's tree and detaches when it leaves;
 * frames are the scheduler's ticks. Installed by native/tui/index.ts.
 */
import { Clone, Host, ListenerOptions, Prepared } from "../../html/host.js";
import { TplNode } from "../../html/tokenizer.js";
import { TSlotPart } from "./slots.js";
import type { EventBinding } from "../../html/parts.js";
import type { HostNode } from "../../html/host.js";
import type { PartSpec } from "../../html/types.js";
/** A prepared terminal template: the part specs with the node index each binds to, and the template tree. */
export declare class TermPrepared extends Prepared {
    tree: TplNode[];
    constructor(parts: PartSpec[], tree: TplNode[]);
}
export declare class TermHost extends Host {
    registered: boolean;
    onError: ((error: unknown) => void) | null;
    constructor();
    prepare(strings: ReadonlyArray<string>, kind: number): TermPrepared;
    clone(prepared: Prepared): Clone;
    createText(text: string): HostNode;
    setText(node: HostNode, text: string): void;
    createAnchor(label: string): HostNode;
    createElement(tag: string): HostNode;
    createSlotPart(_spec: PartSpec, el: HostNode, owner: object | undefined): TSlotPart;
    createFragment(): HostNode;
    insertBefore(parent: HostNode, node: HostNode, ref: HostNode | null): void;
    remove(node: HostNode): void;
    parentOf(node: HostNode): HostNode;
    nextSibling(node: HostNode): HostNode;
    isConnected(node: HostNode): boolean;
    asNode(value: unknown): HostNode;
    stringify(value: unknown): string;
    setAttribute(el: HostNode, name: string, value: string): void;
    removeAttribute(el: HostNode, name: string): void;
    toggleAttribute(el: HostNode, name: string, on: boolean): void;
    setProperty(el: HostNode, name: string, value: unknown): void;
    setContent(el: HostNode, text: string): void;
    listenerOptions(handler: unknown): ListenerOptions | null;
    addListener(el: HostNode, name: string, binding: EventBinding, options: ListenerOptions | null): void;
    removeListener(el: HostNode, name: string, binding: EventBinding, _options: ListenerOptions | null): void;
    invokeListener(handler: unknown, event: unknown): unknown;
    parseMarkup(markup: string): HostNode;
    scheduleFlush(flush: () => void): void;
    reportError(error: unknown): void;
}
