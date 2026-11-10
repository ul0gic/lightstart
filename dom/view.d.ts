export default View;
export function defineComponent<D extends Record<string, unknown>, M extends readonly Record<string, unknown>[] | [] = [], P extends Record<string, import("../types/types.js").PropertyDeclaration> = {}, E extends Record<string, import("../types/types.js").TypeDefinition<unknown>> = {}>(def: import("../view/types.js").Definition<D, M, P, E>): Omit<D, "events"> & {
    props?: P;
    events?: E;
    mixins?: M;
};
export function defineMixin<D extends Record<string, unknown>, P extends Record<string, import("../types/types.js").PropertyDeclaration> = {}, E extends Record<string, import("../types/types.js").TypeDefinition<unknown>> = {}>(def: D & {
    props?: P;
    events?: E;
} & ThisType<import("../view/types.js").PropsToThis<P> & Omit<D, keyof P | import("../view/types.js").DefinitionKey> & Omit<View, "$emit"> & {
    $emit: import("../view/types.js").TypedEmit<E>;
} & Record<string, unknown>>): D & {
    props?: P;
    events?: E;
};
/**
 * A render written as a function of the element. Method-style, so a render
 * typed for its own element's members is accepted for any element.
 */
export type RenderFn = {
    render(el: View): unknown;
}["render"];
declare class View extends HTMLElement {
    /** @type {PropertiesSchema} */
    static properties: PropertiesSchema;
    /**
     * Whether `render` runs tracked, so a signal it reads re-renders the
     * element. On for a class written by hand; off for a class `View.define`
     * builds, whose properties drive its updates.
     * @type {boolean}
     */
    static $trackRender: boolean;
    /**
     * Whether the lifecycle hooks are methods of the class (`connected()`,
     * `updated(changed)`, ...), as a class written by hand declares them;
     * off for a class `View.define` builds, whose hooks come from its definition.
     * @type {boolean}
     */
    static $methodHooks: boolean;
    /** @type {Map<string, ComponentEntry>} */
    static components: Map<string, ComponentEntry>;
    /** @type {Record<string, string>} */
    static _attrs: Record<string, string>;
    /** @type {ViewPlugin[]} */
    static plugins: ViewPlugin[];
    /**
     * Register a plugin for every class built from now on. A plugin with the
     * same name replaces the earlier one.
     * @param {ViewPlugin} plugin
     */
    static use(plugin: ViewPlugin): void;
    /**
     * Run the `init` of every plugin a class just built carries.
     * @param {ViewConstructor} component
     * @param {ComponentDefinition} definition
     * @param {string} tag
     */
    static initPlugins(component: ViewConstructor, definition: ComponentDefinition, tag: string): Promise<(void | undefined)[]>;
    /**
     * Install a class written by hand as the custom element `tag`: signal
     * fields, a `render()` the engine tracks, `connected`, `disconnected`,
     * `willUpdate`, `firstUpdated`, `updated` as plain methods, and the props
     * its `static props` declares, the shape `View.define` takes. A class
     * without `static props` may declare them as `static properties`; one that
     * declares both takes `props`. The plugins apply as they do to a class
     * `View.define` builds, with the class's statics as its definition: a
     * plugin's `props`, `test` and `init` read them, a key it declares is a
     * static, and a hook it adds is a method.
     * @template {ViewConstructor} C
     * @param {string} tag
     * @param {C} component
     * @returns {C}
     */
    static register<C extends ViewConstructor>(tag: string, component: C): C;
    /**
     * Build a concrete `HTMLElement` subclass from a component
     * `definition` (object literal). Installs property descriptors,
     * binds methods, merges plugins, and keeps the lifecycle hooks on the
     * class for `$runHook`.
     *
     * @param {string} tag
     * @param {ComponentDefinition} definition
     * @param {ViewConstructor} [BaseClass]
     * @returns {ViewConstructor}
     */
    static createClass(tag: string, definition: ComponentDefinition, BaseClass?: ViewConstructor): ViewConstructor;
    static define: import("../view/types.js").Define;
    /**
     * @param {string} tag
     * @param {ComponentDefinition} raw
     * @returns {ViewConstructor | Promise<ViewConstructor>}
     */
    static _define(tag: string, raw: ComponentDefinition): ViewConstructor | Promise<ViewConstructor>;
    /** @type {import("../signals/types.js").Store} */
    $state: import("../signals/types.js").Store;
    /**
     * The values of the props declared `reactive: false`, made on first use.
     * @type {Record<string, unknown> | null}
     */
    _plainFields: Record<string, unknown> | null;
    $hasUpdated: boolean;
    $forceNextUpdate: boolean;
    /** @type {Map<string, unknown>} */
    $changedProps: Map<string, unknown>;
    $updatePending: boolean;
    /** @type {Promise<void> | null} */
    $updatePromise: Promise<void> | null;
    /** @type {(() => void) | null} */
    $resolveUpdate: (() => void) | null;
    /** @type {(() => void) | null} */
    $settleDone: (() => void) | null;
    /** @type {Array<() => void> | null} */
    $teardowns: Array<() => void> | null;
    /** @type {ViewCore["$renderNode"]} */
    $renderNode: ViewCore["$renderNode"];
    /** @type {(() => void) | null} */
    $unobserve: (() => void) | null;
    $attrOriginated: boolean;
    $ignoreAttributeChange: boolean;
    /** @type {ReturnType<typeof render> | null} */
    $root: ReturnType<typeof render> | null;
    /** @type {Set<SlotPart>} */
    $slotParts: Set<SlotPart>;
    $projectQueued: boolean;
    $projecting: boolean;
    $projectAgain: boolean;
    /** @type {ProjectHooks | null} */
    $slotHooks: ProjectHooks | null;
    /** @type {Set<string> | null} */
    $slotWarned: Set<string> | null;
    /** @type {Element | null} */
    $unslotted: Element | null;
    /**
     * Typed view of `this.constructor`: includes framework-added
     * statics (`tag`, `_classTags`, …).
     *
     * @returns {ViewConstructor}
     */
    get $ctor(): ViewConstructor;
    /**
     * Subscribe to DOM events (delegated via `selector#eventType` syntax)
     * or CustomEvents (auto-unwraps `detail`).
     *
     * @param {string} eventName
     * @param {import("../view/types.js").ViewEventListener} listener
     * @returns {EventListener}
     */
    $on(eventName: string, listener: import("../view/types.js").ViewEventListener): EventListener;
    /**
     * @param {string} eventName
     * @param {EventListener} listener
     */
    $off(eventName: string, listener: EventListener): void;
    /**
     * Dispatch a CustomEvent on this element. Emitted events don't bubble, so
     * only element-attached listeners (`@name=` in a parent template) receive
     * one. They are cancelable: a listener's `preventDefault()` shows on the
     * returned event as `defaultPrevented`, which is how a component lets its
     * parent take over the action it would otherwise perform.
     *
     * @param {string} eventName
     * @param {unknown} [data]
     */
    $emit(eventName: string, data?: unknown): CustomEvent<unknown>;
    /**
     * Run every lifecycle hook registered under `name`: plugin hooks in plugin
     * order, then every definition's own up the `extends:` chain, oldest
     * ancestor first, which is the order `composeDefinition` gives mixins. Hooks
     * are called directly, never dispatched as DOM events, so the lifecycle names
     * stay free for the component's own events. An async hook goes to the
     * configured `wrap`.
     *
     * @param {string} name
     * @param {LifecycleEventDetail} detail
     */
    $runHook(name: string, detail: LifecycleEventDetail): void;
    /**
     * Call the hook a class written by hand declares as a method (a class
     * `View.define` built has its hooks on the class, run above). The update
     * hooks receive the changed properties; a hook a plugin adds receives the
     * detail, as a definition's does.
     * @param {string} name
     * @param {LifecycleEventDetail} detail
     */
    $runMethodHook(name: string, detail: LifecycleEventDetail): void;
    /** @param {string} element */
    $: (element: string) => Element | null;
    /** @param {string} element */
    $$: (element: string) => NodeListOf<Element>;
    connectedCallback(): void;
    connectedMoveCallback(): void;
    $connect(): void;
    /**
     * Hold a teardown until disconnect. Pass any unsubscribe function (an
     * event bus `on` return, a store's `subscribe` handle, a DOM listener
     * remover) or an array of them (falsy entries skipped), and it runs when
     * the element leaves the DOM, so subscriptions made in `connected()` need
     * no `disconnected()` bookkeeping. Returns the argument so the call wraps
     * the subscription inline: `this.$own(bus.on(NAME, cb))`.
     *
     * @template {(() => void) | Array<(() => void) | null | undefined | false>} T
     * @param {T} teardown
     * @returns {T}
     */
    $own<T extends (() => void) | Array<(() => void) | null | undefined | false>>(teardown: T): T;
    disconnectedCallback(): void;
    $initProps(): void;
    get $node(): this;
    get $connected(): boolean;
    get $label(): string;
    get $tracked(): boolean;
    /**
     * @param {string} key
     * @param {unknown} oldValue
     */
    $hasChanged(key: string, oldValue: unknown): boolean;
    /**
     * The core's hook call, as the element's `$runHook` with the detail its
     * hooks receive.
     * @param {string} name
     * @param {Map<string, unknown> | null} changedProps
     */
    $hook(name: string, changedProps: Map<string, unknown> | null): void;
    $render(): unknown;
    /** @param {unknown} value */
    $commit(value: unknown): void;
    /**
     * Record a changed property (or, with no key, force the next render) and
     * schedule the element's update. Answers the promise of the pending
     * update; inside a running update, that update's own promise.
     *
     * @param {string} [key]
     * @param {unknown} [oldValue]
     * @returns {Promise<void>}
     */
    $requestUpdate(key?: string, oldValue?: unknown): Promise<void>;
    /**
     * @param {string} [key]
     * @param {unknown} [oldValue]
     */
    $enqueueUpdate(key?: string, oldValue?: unknown): void;
    /** @returns {Promise<void>} */
    $whenUpdated(): Promise<void>;
    $schedule(): void;
    $flushUpdate(): void;
    /** @param {boolean} forceUpdate */
    $performUpdate(forceUpdate: boolean): void;
    /**
     * @param {Map<string, unknown>} changedProps
     * @param {boolean} forceUpdate
     */
    $shouldUpdate(changedProps: Map<string, unknown>, forceUpdate: boolean): boolean;
    $update(): void;
    $attach(): void;
    $detach(): void;
    /**
     * @param {string} name
     * @param {unknown} value
     * @returns {boolean}
     */
    $setProp(name: string, value: unknown): boolean;
    /**
     * @param {this} [_el] the element itself, for a render written as an arrow
     * @returns {unknown}
     */
    render(_el?: this): unknown;
    $queueProject(): void;
    $project(): void;
    /**
     * @param {string} attrName
     * @param {string | null} oldValue
     * @param {string | null} value
     */
    attributeChangedCallback(attrName: string, oldValue: string | null, value: string | null): void;
    /**
     * Reflect a property value to its attribute. The canonical written form
     * is kebab-case (`use-system-preference`); a legacy all-lowercase form
     * left by markup is removed on first reflection so the element never
     * carries two spellings of the same attribute.
     *
     * @param {{ key: string, value: unknown, type?: string, skipPropUpdate?: boolean }} args
     */
    $updateAttribute({ key, value, type, skipPropUpdate }: {
        key: string;
        value: unknown;
        type?: string;
        skipPropUpdate?: boolean;
    }): void;
}
import { ViewCore } from "../view/core.js";
import { render } from "../html/index.js";
import type { SlotPart } from "./slots.js";
import type { ProjectHooks } from "./types.js";
import type { ViewConstructor } from "../view/types.js";
import type { LifecycleEventDetail } from "../view/types.js";
import type { PropertiesSchema } from "../view/types.js";
import type { ComponentEntry } from "../view/types.js";
import type { ViewPlugin } from "../view/types.js";
import type { ComponentDefinition } from "../view/types.js";
