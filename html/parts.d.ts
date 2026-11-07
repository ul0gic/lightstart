import { Part } from "./part.js";
import type { ListenerOptions } from "./host.js";
import { ThunkHolder } from "./reactive.js";
import { ElementSpec, Keyed, TemplateResult, Unsafe } from "./values.js";
import { ElementState } from "./states.js";
import type { ChildState } from "./states.js";
import type { HostNode, NothingValue, PartSpec, RenderOptions } from "./types.js";
/** The uncommitted sentinel a part compares its first value against. */
export declare const NOT_SET: unique symbol;
/**
 * Adoption of prerendered content, installed by the host that supports it
 * (the DOM host's `dom/adopt.js`). Without it a pending part renders fresh.
 */
export type Adoption = {
    resolvePending: (part: ChildPart, value: unknown, bind: boolean) => void;
    rootPart: (container: unknown, options: RenderOptions) => ChildPart | null;
    adoptPart: (part: Part, values: unknown[], bind: boolean) => void;
};
export declare const installAdoption: (a: Adoption) => void;
export { Part };
export declare class EventBinding {
    el: unknown;
    name: string;
    owner: object | undefined;
    handler: unknown;
    options: ListenerOptions | null;
    attached: boolean;
    constructor(el: HostNode, name: string, owner: object | undefined);
    commit(value: unknown): void;
    handleEvent(event: unknown): unknown;
    dispose(): void;
}
export declare class EventPart extends Part {
    valueIndex: number;
    binding: EventBinding;
    constructor(spec: PartSpec, el: HostNode, owner: object | undefined);
    setFromValues(values: unknown[]): void;
    dispose(): void;
}
export declare class PropertyPart extends Part {
    el: unknown;
    name: string;
    valueIndex: number;
    committed: unknown;
    constructor(spec: PartSpec, el: HostNode);
    setFromValues(values: unknown[]): void;
    dispose(): void;
}
export declare class BooleanAttributePart extends ThunkHolder {
    el: unknown;
    name: string;
    valueIndex: number;
    committed: unknown;
    constructor(spec: PartSpec, el: HostNode);
    _anchor(): unknown;
    setFromValues(values: unknown[]): void;
    commit(value: unknown): void;
    _commitResolved(value: unknown): void;
    dispose(): void;
}
export declare class AttributePart extends ThunkHolder {
    el: unknown;
    name: string;
    statics: string[];
    valueIndex: number;
    valueCount: number;
    single: boolean;
    committed: unknown;
    constructor(spec: PartSpec, el: HostNode);
    _anchor(): unknown;
    setFromValues(values: unknown[]): void;
    commit(value: unknown): void;
    _commitResolved(value: unknown): void;
    _commitString(value: string | NothingValue): void;
    dispose(): void;
}
export declare class RawTextPart extends ThunkHolder {
    el: unknown;
    valueIndex: number;
    committed: unknown;
    constructor(spec: PartSpec, el: HostNode);
    _anchor(): unknown;
    setFromValues(values: unknown[]): void;
    commit(value: unknown): void;
    _commitResolved(value: unknown): void;
    dispose(): void;
}
export declare class ChildPart extends ThunkHolder {
    start: unknown;
    end: unknown;
    owner: object | undefined;
    valueIndex: number;
    state: ChildState;
    _bindNext: boolean;
    _settle: (() => Promise<unknown>) | null;
    _settled: boolean;
    _settleWaiting: boolean;
    _deferred: unknown;
    constructor(start: HostNode, end: HostNode, owner?: object | undefined);
    _anchor(): unknown;
    /**
     * A part for a range inside this one, sharing the host and the settle hook.
     */
    _child(start: HostNode, end: HostNode): ChildPart;
    setFromValues(values: unknown[]): void;
    commit(value: unknown): void;
    _commitResolved(value: unknown): void;
    _commitText(text: string): void;
    _commitTemplate(result: TemplateResult): void;
    _commitNode(node: HostNode): void;
    _commitUnsafe(wrap: Unsafe): void;
    _commitKeyed(wrap: Keyed): void;
    _commitElement(spec: ElementSpec): void;
    _updateElement(st: ElementState, spec: ElementSpec): void;
    _ensureElementChildPart(st: ElementState): ChildPart;
    _applyElementBinding(st: ElementState, rawKey: string, value: unknown): void;
    _commitItems(raw: unknown[]): void;
    /**
     * Keyed list reconciliation: the head/tail two-pointer algorithm with
     * key-map fallback (same strategy as lit's repeat). Items move as whole
     * marker-delimited DOM ranges; a reordered item is never recreated, so
     * focus, selection, and input state survive shuffles. It nulls out the
     * entries of `oldParts` it moves, so the caller passes a copy: if an item's
     * commit throws, the part's own list still holds every part to clear.
     */
    _reconcileKeyed(oldParts: (ChildPart | null)[], oldKeys: unknown[], newValues: unknown[], newKeys: unknown[]): ChildPart[];
    _createItemPart(refNode: HostNode): ChildPart;
    _removeItemPart(part: ChildPart): void;
    _moveItemPart(part: ChildPart, refPart: ChildPart | null): void;
    _insert(node: HostNode): void;
    _removeRange(): void;
    _disposeState(): void;
    _clear(): void;
    _clearPending(): void;
    dispose(): void;
}
export declare const createPart: (spec: PartSpec, node: unknown, owner: object | undefined) => Part;
/**
 * Render a value into a container. The root part is cached per container,
 * so repeated renders diff in place. Accepts any child-position value:
 * templates, primitives, arrays, key()/element()/unsafeHTML() wrappers,
 * DOM nodes, thunks, and null/undefined/nothing (clears).
 */
export declare const render: (value: unknown, container: unknown, options?: RenderOptions) => ChildPart;
export declare const hasRootPart: (container: unknown) => boolean;
/**
 * Dispose the part tree rendered into a container; tears down thunk
 * effects, event listeners, and ref callbacks. Rendered DOM is left in
 * place.
 */
export declare const disposeTree: (container: unknown) => void;
