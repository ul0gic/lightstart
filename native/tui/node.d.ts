import { Style } from "./style.js";
import type { ViewCore } from "../../view/core.js";
import type { EventBinding } from "../../html/parts.js";
import type { MeasureCache, ScrollState, TextLayout } from "./layout.js";
export type PropValue = string | number | boolean | null;
export declare class TNode {
    parent: TElement | null;
    prev: TNode | null;
    next: TNode | null;
    x: number;
    y: number;
    w: number;
    h: number;
    version: number;
    textLayout: TextLayout | null;
    constructor();
    isConnected(): boolean;
    invalidate(): void;
    nextSibling(): TNode | null;
    dispose(): void;
}
/**
 * The children of an element as an array, a snapshot for readers; the tree
 * itself walks `firstChild` and `next`.
 */
export declare const childNodes: (el: TElement) => TNode[];
/** A zero-size marker; a child part owns the range between a start and an end anchor. */
export declare class TAnchor extends TNode {
    label: string;
    constructor(label: string);
}
/** An inline text leaf. */
export declare class TRun extends TNode {
    text: string;
    constructor(text: string);
    setText(t: string): void;
}
/** A listener an element holds: the engine's binding under an event name. */
export declare class HandlerEntry {
    name: string;
    binding: EventBinding;
    once: boolean;
    constructor(name: string, binding: EventBinding, once: boolean);
}
export declare const asString: (name: string, v: PropValue) => string;
export declare const asNumber: (name: string, v: PropValue) => number;
export declare const asNumberOrNull: (name: string, v: PropValue) => number | null;
export declare const asBool: (v: PropValue) => boolean;
export declare const asEnum: (name: string, v: PropValue, allowed: string[]) => string;
export declare class TElement extends TNode {
    kind: string;
    tag: string;
    firstChild: TNode | null;
    lastChild: TNode | null;
    style: Style;
    hidden: boolean;
    attrs: Map<string, string>;
    props: Map<string, unknown>;
    handlers: HandlerEntry[];
    owner: ViewCore | null;
    attached: boolean;
    explicitProps: number;
    classProps: number;
    states: number;
    /**
     * @param kind box, text, span, input or fragment
     * @param tag the tag the template wrote
     */
    constructor(kind: string, tag: string);
    insertBefore(node: TNode, ref: TNode | null): void;
    /**
     * Put `node` before `ref` (at the end when null) without a frame request:
     * what cloning a template does for every node it creates.
     */
    link(node: TNode, ref: TNode | null): void;
    append(node: TNode): void;
    remove(node: TNode): void;
    clearChildren(): void;
    /**
     * Set a prop by its template name: one the owning view declared, the
     * element's classes, a style prop, one of the element's own, or an
     * attribute kept inert. A removal (null) never reaches the view: it keeps
     * its value.
     */
    setProp(name: string, v: PropValue): void;
    /**
     * Set a style prop or one of the element's own; answers whether `name` is one.
     */
    setKnownProp(name: string, v: PropValue): boolean;
    /**
     * A known prop the template writes: set it and, while a styler is
     * configured, record that it is the template's (or, on a removal, that
     * the classes may have it again).
     */
    setKnownExplicit(name: string, v: PropValue): boolean;
    /**
     * @returns whether the element has a prop of that name
     */
    setOwnProp(_name: string, _v: PropValue): boolean;
    setStyleProp(name: string, v: PropValue): boolean;
    setStyle(s: Style): void;
    addHandler(name: string, binding: EventBinding, once: boolean): void;
    removeHandler(name: string, binding: EventBinding): void;
    /**
     * Run this element's handlers for the event's type; answers whether one
     * consumed it. The event travels as `unknown` so that a handler typed with
     * the event's own class receives it as such in a native build.
     * @param e a UIEvent
     */
    handle(e: unknown): boolean;
    /**
     * Bubble from this element up to the root; answers whether a handler consumed it.
     * @param e a UIEvent
     */
    dispatch(e: unknown): boolean;
    /** @returns the non-default prop values, for dumps and tests */
    propsSummary(): string[];
    describe(): string;
    dispose(): void;
}
/** A block container with a one-axis flex layout. */
export declare class TBox extends TElement {
    direction: string;
    flex: number;
    width: number | null;
    height: number | null;
    padding: number;
    gap: number;
    border: boolean;
    title: string | null;
    scroll: boolean;
    scrollTop: number;
    stickToBottom: boolean;
    align: string;
    rule: boolean;
    scrollState: ScrollState | null;
    measured: MeasureCache | null;
    constructor(tag: string);
    setOwnProp(name: string, v: PropValue): boolean;
    setDirection(s: string): void;
    setAlign(s: string): void;
    setFlex(n: number): void;
    setPadding(n: number): void;
    setGap(n: number): void;
    setScrollTop(n: number): void;
    setWidth(n: number | null): void;
    setHeight(n: number | null): void;
    setBorder(b: boolean): void;
    setScroll(b: boolean): void;
    setStickToBottom(b: boolean): void;
    setTitle(s: string | null): void;
    propsSummary(): string[];
}
/** The tree root: a box the renderer sizes to the terminal. */
export declare class TRoot extends TBox {
    constructor();
}
/** A holder whose children splice into the parent it is inserted into. */
export declare class TFragment extends TElement {
    constructor();
}
/** A block of inline content (runs and spans), wrapped to its width. */
export declare class TText extends TElement {
    wrap: string;
    constructor(tag: string);
    setOwnProp(name: string, v: PropValue): boolean;
    propsSummary(): string[];
}
/** An inline styled container inside a text. */
export declare class TSpan extends TElement {
    constructor(tag: string);
}
/** A multi-line text editor; the editing itself lives in editor.js. */
export declare class TInput extends TElement {
    lines: string[];
    row: number;
    col: number;
    placeholder: string;
    minLines: number;
    maxLines: number;
    constructor(tag: string);
    isEmpty(): boolean;
    value(): string;
    setOwnProp(name: string, v: PropValue): boolean;
    propsSummary(): string[];
}
/**
 * The first element at or under `node` in document order that passes
 * `test`, or null.
 */
export declare const find: (node: TNode, test: (el: TElement) => boolean) => TElement | null;
