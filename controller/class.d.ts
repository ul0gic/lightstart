export declare class Controller {
    readonly $name: string;
    /** Settles once `start()` ran `connected()` and the work `$wait` named before it is done; a throw rejects it. */
    $ready: Promise<void>;
    private readonly owned;
    private readonly waiting;
    constructor(name: string);
    /** Keep `teardown` (an unsubscribe, a dispose, a clearInterval closure) for `dispose()`; answers it, so it wraps a call inline. */
    $own<T extends () => void>(teardown: T): T;
    /** Work `$ready` waits for (a query's first load), named before `start()`. */
    $wait(work: Promise<void>): void;
    /**
     * Runs once, from `start()`: answers the promise of the work it starts (an
     * async method's), which `$ready` waits for, or null. A plain method, not
     * an async one, since natively an async method cannot be overridden and an
     * override's signature matches the base's exactly.
     */
    connected(): Promise<void> | null;
    /** Runs from `dispose()`, before the teardowns: the promise of the work it starts, or null. */
    disconnected(): Promise<void> | null;
    /** Run `connected()` and settle `$ready` with it and the work named so far; answers `$ready`. */
    start(): Promise<void>;
    /** `disconnected()`, then every teardown owned, the queries' included. */
    dispose(): Promise<void>;
}
