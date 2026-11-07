/**
 * @bootstrapp/light/html/host: the renderer behind the parts engine. The
 * engine never touches a document; it asks the installed host to prepare and
 * clone templates, create and move nodes, write attributes, properties and
 * text, and bind listeners. The browser host is `dom/host.js`; a terminal or
 * string host implements the same class. `configure({ host })` installs one;
 * until then every method throws, so a page that renders without a host
 * fails at its first render rather than later.
 */
import type { Part } from "./part.js";
import type { PartSpec } from "./types.js";
import type { EventBinding } from "./parts.js";
/** An opaque node of the active host; only the host reads it. */
export type HostNode = unknown;
/** A template the host prepared: the part specs in document order, plus whatever the host keeps beside them. */
export declare class Prepared {
    parts: PartSpec[];
    constructor(parts: PartSpec[]);
}
/** A fresh copy of a prepared template: its root (a fragment or a list holder) and the node each part binds to, in `parts` order. */
export declare class Clone {
    root: unknown;
    targets: unknown[];
    constructor(root: HostNode, targets: HostNode[]);
}
/** Listener options as the engine compares them; a host reads them off a handler object it understands. */
export declare class ListenerOptions {
    capture: boolean;
    once: boolean;
    passive: boolean;
    constructor(capture: boolean, once: boolean, passive: boolean);
    equals(other: ListenerOptions | null): boolean;
}
/** The renderer interface. Every method throws here; a host overrides what it supports. */
export declare class Host {
    /**
     * Whether a handler function is called with the owner as `this`, as in a
     * browser; a host that cannot bind one calls it with the event alone.
     */
    bindsHandlerThis: boolean;
    prepare(strings: ReadonlyArray<string>, kind: number): Prepared;
    clone(prepared: Prepared): Clone;
    createText(text: string): HostNode;
    setText(node: HostNode, text: string): void;
    createAnchor(label: string): HostNode;
    createElement(tag: string): HostNode;
    /** @returns a parent whose children move out of it when it is inserted */
    createFragment(): HostNode;
    insertBefore(parent: HostNode, node: HostNode, ref: HostNode | null): void;
    /** @param node detach through the host's own primitive, never a method the node may override */
    remove(node: HostNode): void;
    parentOf(node: HostNode): HostNode | null;
    nextSibling(node: HostNode): HostNode | null;
    isConnected(node: HostNode): boolean;
    /**
     * The node a child-position value stands for, or null when the value is not a node of this host.
     */
    asNode(value: unknown): HostNode | null;
    /**
     * A non-array iterable as a list, or null when the value is not one.
     */
    toList(value: unknown): unknown[] | null;
    /**
     * The text for a child value the engine cannot classify (an object).
     */
    stringify(value: unknown): string;
    setAttribute(el: HostNode, name: string, value: string): void;
    removeAttribute(el: HostNode, name: string): void;
    toggleAttribute(el: HostNode, name: string, on: boolean): void;
    setProperty(el: HostNode, name: string, value: unknown): void;
    /**
     * The whole text content of a raw-text element (`<textarea>`, `<title>`, …).
     */
    setContent(el: HostNode, text: string): void;
    /**
     * The options a handler value carries, or null for a plain handler.
     */
    listenerOptions(handler: unknown): ListenerOptions | null;
    /**
     * @param binding the engine's binding; calling its `handleEvent(event)` runs the handler
     */
    addListener(el: HostNode, name: string, binding: EventBinding, options: ListenerOptions | null): void;
    removeListener(el: HostNode, name: string, binding: EventBinding, options: ListenerOptions | null): void;
    /**
     * Invoke a handler that is not a function (a `handleEvent` object, say).
     */
    invokeListener(handler: unknown, event: unknown): unknown;
    /**
     * Parse markup into a fragment, for `unsafeHTML`.
     */
    parseMarkup(markup: string): HostNode;
    /**
     * The part for a `<slot>` element, when the host projects light children.
     */
    createSlotPart(spec: PartSpec, el: HostNode, owner: object | undefined): Part;
    /**
     * Whether a template may use this tag.
     */
    knownTag(tag: string): boolean;
    /**
     * Whether an element of `tag` takes a prop or attribute named `name`.
     */
    knownProp(tag: string, name: string): boolean;
    /**
     * Run the view queue's flush once, on the host's next frame.
     */
    scheduleFlush(flush: () => void): void;
    /**
     * Report an error an update threw, without unwinding the flush.
     */
    reportError(error: unknown): void;
}
/** The installed host. */
export declare const currentHost: () => Host;
export declare const setHost: (next: Host) => void;
