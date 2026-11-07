/**
 * @bootstrapp/light/html/states: what a child part currently renders, one
 * class per kind. A part tells them apart with `instanceof`, which a native
 * build checks as a class where a string tag would be compared as a string,
 * and a part that renders nothing, or a served range awaiting adoption,
 * shares one instance instead of making a record each time it clears.
 */
import type { ChildPart, EventBinding } from "./parts.js";
import type { TemplateInstance } from "./template.js";
import type { HostElement, HostNode } from "./types.js";
export declare class EmptyState {
    readonly empty = true;
}
export declare class PendingState {
    readonly pending = true;
}
/** The state of every part that renders nothing. */
export declare const EMPTY: EmptyState;
/** The state of every part whose served range awaits adoption. */
export declare const PENDING: PendingState;
export declare class TextState {
    node: HostNode;
    text: string;
    constructor(node: HostNode, text: string);
}
export declare class TemplateState {
    instance: TemplateInstance;
    constructor(instance: TemplateInstance);
}
/** A list's item parts and, for a list of `key()` items, each item's key; `keys` is empty for a list without keys. */
export declare class ItemsState {
    parts: ChildPart[];
    keys: unknown[];
    keyed: boolean;
    constructor(parts: ChildPart[], keys: unknown[], keyed: boolean);
}
export declare class KeyedState {
    k: unknown;
    inner: ChildPart;
    constructor(k: unknown, inner: ChildPart);
}
export declare class NodeState {
    node: HostNode;
    constructor(node: HostNode);
}
export declare class UnsafeState {
    s: string;
    constructor(s: string);
}
/** The state of a child part rendering an `element()`: the element, what each binding committed, its listeners and its own child part. */
export declare class ElementState {
    tag: string;
    el: HostNode;
    committed: Map<string, unknown>;
    events: Map<string, EventBinding>;
    ref: ((el: HostElement | null) => void) | null;
    childPart: ChildPart | null;
    constructor(tag: string, el: HostNode);
}
/** What a child part currently renders. */
export type ChildState = EmptyState | PendingState | TextState | TemplateState | ItemsState | KeyedState | NodeState | UnsafeState | ElementState;
