/**
 * @lightstart/light/signals/event: an occurrence beside a signal. State is a
 * signal (what something reads now); an event is an occurrence (a request
 * opened, a message about to be sent), and every value is delivered to every
 * listener. Delivery snapshots the listeners, so one added during a pass
 * misses the current value, and one removed before its turn is skipped. An
 * emit from inside a listener is queued and delivered after the pass ends by
 * the outer emit, so a pass never nests.
 */
declare class Entry<T> {
    listener: (value: T) => void;
    owner: string | undefined;
    active: boolean;
    constructor(listener: (value: T) => void, owner: string | undefined);
}
export declare class Emitter<T> {
    _entries: Array<Entry<T>>;
    _queue: Array<T>;
    _delivering: boolean;
    _queued: number;
    _loopError: Error | null;
    /** Listen; the answer stops listening. `owner` tags the listener for `off(owner)`. */
    on(listener: (value: T) => void, owner?: string): () => void;
    /** Hear the next value only. */
    once(listener: (value: T) => void, owner?: string): () => void;
    /** Deliver `value` to every listener, in the order they were added. */
    emit(value: T): void;
    /** Stop every listener `owner` added. */
    off(owner: string): void;
    /** How many listeners are on. */
    get size(): number;
    _remove(entry: Entry<T>): void;
}
export declare function event<T = void>(): Emitter<T>;
export {};
