/**
 * @lightstart/light/signals: the reactive primitives.
 * Preact Signals-compatible: signal, computed, effect, batch, untracked,
 * plus selector (keyed O(2) selection) and the dependency protocol
 * (getCurrentEffect / Dep / Reactive) external sources build on. A write
 * notifies in waves: computed invalidations first, then the effects they
 * reach, each once, so a diamond never shows an effect a half-updated state.
 */
/**
 * The subscriber side of the protocol: what a signal, a store key or a
 * selector bucket exposes to the reactive reading it. `_track()` on a read
 * registers the running reactive; `_notify()` on a write schedules every
 * subscriber.
 */
export declare class Dep {
    _subscribers: Set<Reactive>;
    constructor();
    _track(): void;
    _notify(): void;
}
/**
 * The reader side: something that runs with itself as the current reactive,
 * collects the deps it read, and re-runs when one notifies. Effects, computed
 * invalidators and a view's render node extend it.
 */
export declare class Reactive {
    _dependencies: Set<Dep>;
    _disposed: boolean;
    _queued: boolean;
    constructor();
    _run(): void;
    _schedule(): void;
    _execute(): void;
    _cleanup(): void;
    dispose(): void;
}
declare class Effect extends Reactive {
    _fn: () => void;
    constructor(fn: () => void);
    _run(): void;
}
export declare class Signal<T> extends Dep {
    _value: T;
    constructor(value: T);
    get value(): T;
    set value(newValue: T);
    peek(): T;
    /**
     * Store a value without notifying: the one write path a subclass uses, so
     * the field stays declared here.
     */
    _assign(value: T): void;
    subscribe(callback: (value: T) => void): () => void;
    /**
     * Sync-source shim: makes any Signal a valid view/controller `sync:`
     * target via the `$sync` duck-type the binding layer already consumes.
     * The contract is keyed (get/set/subscribe take a key) but a signal has
     * one value, so the key is ignored.
     */
    get $sync(): {
        adapter: string;
        get: (key: string) => T;
        set: (key: string, value: T) => void;
        subscribe: (key: string, cb: (value: T) => void) => () => void;
    };
    toJSON(): T;
    toString(): string;
    valueOf(): T;
}
declare class ComputedNode extends Reactive {
    _onInvalidate: () => void;
    constructor(onInvalidate: () => void);
    _run(): void;
}
/**
 * A derived value: computed lazily on read, cached until a dependency
 * changes, read-only. A sibling of Signal rather than a subclass (a native
 * build cannot specialise a generic subclass of a generic class), with the
 * same reading surface.
 */
export declare class Computed<T> extends Dep {
    _fn: () => T;
    _value: T | undefined;
    _stale: boolean;
    _computing: boolean;
    _node: ComputedNode;
    constructor(fn: () => T);
    get value(): T;
    set value(_newValue: T);
    /** @returns the current value, recomputed if stale, without subscribing */
    peek(): T;
    dispose(): void;
    subscribe(callback: (value: T) => void): () => void;
    /**
     * The read-only sync shim: a write through it throws like the setter.
     */
    get $sync(): {
        adapter: string;
        get: (key: string) => T;
        set: (key: string, value: T) => void;
        subscribe: (key: string, cb: (value: T) => void) => () => void;
    };
    toJSON(): T;
    toString(): string;
    valueOf(): T;
}
export declare function signal<T>(initialValue: T): Signal<T>;
export declare function computed<T>(fn: () => T): Computed<T>;
export declare function effect(fn: () => void): Effect;
/**
 * Batch multiple signal updates; subscribed effects run once at the
 * end instead of per-update.
 */
export declare function batch(fn: () => void): void;
/**
 * Run `fn` without subscribing the current reactive to any signals it reads.
 */
export declare function untracked<T>(fn: () => T): T;
/**
 * Make `reactive` the current reactive and answer the one it replaced, for
 * the caller to put back with another `swapCurrent` in a `finally`: what
 * `withCurrent` does, without a closure for the work.
 */
export declare function swapCurrent(reactive: Reactive | null): Reactive | null;
/**
 * Run `fn` with `reactive` as the current reactive: what a view's render
 * node does to subscribe the view to the signals its render reads.
 */
export declare function withCurrent<T>(reactive: Reactive | null, fn: () => T): T;
/**
 * The reactive currently executing, or null. Lets external
 * reactive sources (the store's per-key reads, renderer thunk parts)
 * register with the running effect using the same dependency protocol
 * signals use.
 */
export declare const getCurrentEffect: () => Reactive | null;
/**
 * Keyed selection over a signal: the O(2) answer to selection fan-out.
 * `selector(sig)` returns `isSelected(key)`: called inside an effect it
 * registers that effect under the KEY it asked about (a plain Map keyed
 * by the value, so primitives are the natural case), not under the
 * signal. When the signal changes, only the effects registered under
 * the previous and the new value re-run. A thousand list items cost
 * two notifications per selection change instead of a thousand.
 */
export declare function selector<T>(source: Signal<T>): (key: T) => boolean;
export {};
