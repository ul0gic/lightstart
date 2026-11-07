import { Signal } from "../../signals/index.js";
import { ViewCore } from "../../view/core.js";
import { CustomEvent } from "./events.js";
import { TBox, TElement } from "./node.js";
import { TSlotPart } from "./slots.js";
/**
 * A declared prop as its view reads and writes it, typed over the
 * `Signal<unknown>` the host sets by name. A `Signal<unknown>` cannot
 * become a `Signal<T>` natively (the two differ in layout), so the typed
 * side is this wrapper; reading `value` in `render()` tracks it like a
 * signal's.
 */
export declare class Prop<T> {
    sig: Signal<unknown>;
    constructor(sig: Signal<unknown>);
    get value(): T;
    set value(next: T);
    peek(): T;
}
export declare class View extends ViewCore {
    box: TBox;
    $props: Map<string, Signal<unknown>> | null;
    $defined: boolean;
    $slots: TSlotPart[];
    $projectQueued: boolean;
    constructor();
    get $node(): unknown;
    get $label(): string;
    $hook(name: string, changedProps: Map<string, unknown> | null): void;
    connected(): void;
    disconnected(): void;
    willUpdate(_changed: Map<string, unknown>): void;
    firstUpdated(_changed: Map<string, unknown>): void;
    updated(_changed: Map<string, unknown>): void;
    /**
     * Declare a prop, in a field initializer: `rows = this.prop("rows", []
     * as Task[])`. The host sets it by name from the element's attributes
     * and `.prop=` bindings, and `render()` reads `this.rows.value`. A name
     * is lowercase, as attributes are.
     */
    prop<T>(name: string, initial: T): Prop<T>;
    /**
     * Take a prop by name, as the host hands an attribute or a binding: a
     * string takes the type of the prop's current value when that is a
     * number or a boolean, a bare attribute on a string prop is "", anything
     * else lands as given. Answers false for an undeclared name.
     */
    $setProp(name: string, value: unknown): boolean;
    /**
     * Dispatch a CustomEvent from the view's box: a parent's `@type=` handler
     * receives it, and it bubbles on unless one consumes it. Answers the
     * event; `consumed` says a handler took it.
     */
    $emit(type: string, detail: unknown): CustomEvent;
    $render(): unknown;
    /** @returns the template to render into the box */
    render(): unknown;
    $commit(value: unknown): void;
    /** Project the box's light units into the slots of what rendered. */
    $project(): void;
    /** Project on the next microtask: for a slot that appears outside a commit, as one a thunk renders later. */
    $queueProject(): void;
    dispose(): void;
}
/**
 * Register a tag: a template writing `<tag>` gets a new instance of the
 * class, its box the element, disposed by the host when the element leaves
 * the tree. The tag is lowercase with a hyphen, and defined once. A view
 * the app constructs and places with `${view}` is the app's to dispose,
 * whether or not its class is defined.
 */
export declare const define: (tag: string, cls: new () => View) => void;
/**
 * Put a view's box at the end of `parent`; a connected parent attaches it.
 */
export declare const mount: (view: View, parent: TElement) => void;
/**
 * Take a view's box out of its parent, detaching the view; the content of
 * any defined element inside is dropped with it.
 */
export declare const unmount: (view: View) => void;
