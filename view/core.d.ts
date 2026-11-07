import { Reactive } from "../signals/index.js";
declare class Config {
    track: (label: string) => ((() => void) | void);
    tracked: boolean;
    wrap: (work: Promise<unknown>, label: string) => void;
    settle: (() => Promise<unknown>) | undefined;
    translate: (key: string, params?: Record<string, unknown>) => string | undefined;
    dev: boolean;
    constructor();
}
/** The engine's configuration, as `configureView` left it. */
export declare const config: Config;
/**
 * Hand the engine what its host knows: `track(label)` is called when an
 * element's update is scheduled and answers the function to call once it
 * ran; `wrap(promise, label)` receives every async lifecycle hook, plugin
 * init and the work components pass to `trackWork`; `settle()` resolves when
 * a served region the client cannot adopt may be rendered over; `translate`
 * answers the host's text for a key; `dev` turns on diagnostics.
 */
export declare const configureView: (options: Partial<Omit<Config, "tracked">>) => void;
/**
 * Hand async work an element waits on to the host, so a host that waits for
 * a quiet page counts it. Answers the same promise.
 */
export declare const trackWork: <T>(work: Promise<T>, label: string) => Promise<T>;
/**
 * The host's text for `key`, or undefined when it has none, so a component
 * falls back to its own.
 */
export declare const translate: (key: string, params?: Record<string, unknown>) => string | undefined;
declare class RenderNode extends Reactive {
    owner: ViewCore;
    constructor(owner: ViewCore);
    _run(): void;
}
/**
 * The methods of the cycle itself, the ones a host takes from ViewCore as
 * they are; everything else on it is the host's to answer.
 */
export declare const CORE_METHODS: string[];
/**
 * One component's update cycle. A host answers `$node`, `$connected`,
 * `$label`, `$tracked`, `$hasChanged`, `$setProp`, `$hook`, `$render` and
 * `$commit`; the cycle itself (`$requestUpdate` through `$flushUpdate`, the
 * hooks' order, teardowns) is the same on every host, and
 * `await view.$requestUpdate()` resolves once the update ran.
 */
export declare class ViewCore {
    $hasUpdated: boolean;
    $forceNextUpdate: boolean;
    $changedProps: Map<string, unknown>;
    $updatePending: boolean;
    $updatePromise: Promise<void> | null;
    $resolveUpdate: (() => void) | null;
    $settleDone: (() => void) | null;
    $teardowns: Array<() => void> | null;
    $renderNode: RenderNode | null;
    /** @returns the host node whose depth orders this view among the ones flushed with it */
    get $node(): unknown;
    /** @returns whether the view is in a tree, so an update renders */
    get $connected(): boolean;
    /** @returns what names this view's work to the host's tracker */
    get $label(): string;
    /** @returns whether render runs under a reactive, so a signal it reads re-renders the view */
    get $tracked(): boolean;
    /**
     * @returns whether the property's value differs from the one recorded when it changed
     */
    $hasChanged(_key: string, _oldValue: unknown): boolean;
    /**
     * @returns whether the view took a prop handed to it by name: a host routes an attribute or property binding on the element a view owns to the view
     */
    $setProp(_name: string, _value: unknown): boolean;
    /**
     * @param _name one of connected, disconnected, willUpdate, firstUpdated, updated
     * @param _changedProps the update's changed properties, for the update hooks
     */
    $hook(_name: string, _changedProps: Map<string, unknown> | null): void;
    /** @returns what the component's render answers */
    $render(): unknown;
    /** @param _value what render answered, to commit into the component's container */
    $commit(_value: unknown): void;
    /**
     * Record a changed property (or, with no key, force the next render) and
     * schedule the view's update. Answers the promise of the pending update;
     * inside a running update, that update's own promise.
     */
    $requestUpdate(key?: string, oldValue?: unknown): Promise<void>;
    /**
     * `$requestUpdate` without the promise: what the engine's own writes call,
     * so an update nobody waits for makes none.
     */
    $enqueueUpdate(key?: string, oldValue?: unknown): void;
    /** Answers the promise of the pending update, made on the first ask; resolved already when none is pending. */
    $whenUpdated(): Promise<void>;
    $schedule(): void;
    $flushUpdate(): void;
    /**
     * Run one update now. Properties set in `willUpdate` belong to this update;
     * anything set from the render on (a child's teardown, `updated`) is
     * recorded for the next one.
     */
    $performUpdate(forceUpdate: boolean): void;
    /**
     * Drop the recorded keys whose value did not change; answers whether any
     * remain. A first or forced update keeps every key.
     */
    $shouldUpdate(changedProps: Map<string, unknown>, forceUpdate: boolean): boolean;
    $update(): void;
    /**
     * Hold a teardown until disconnect: any unsubscribe function, run when the
     * view leaves its tree, so subscriptions made on connect need no
     * bookkeeping.
     */
    $own(teardown: () => void): void;
    $attach(): void;
    $detach(): void;
}
export {};
