export declare class Controller {
    readonly $name: string;
    /** Settles once `start()` ran the setups and `connected()` and the work `$wait` named for that run is done; a throw rejects it. */
    $ready: Promise<void>;
    private readonly owned;
    private readonly setups;
    private waiting;
    private running;
    constructor(name: string);
    /** Keep `teardown` (an unsubscribe, a dispose, a clearInterval closure) for `dispose()`; answers it, so it wraps a call inline. */
    $own<T extends () => void>(teardown: T): T;
    /**
     * Keep `setup` for every `start()`, run in registration order before
     * `connected()`: the work it `$wait`s and the teardowns it `$own`s belong to
     * that run. A field initialiser or the constructor registers one, so a query
     * it starts runs against the stores the run opened and runs again after a
     * dispose and a second start.
     */
    $onStart(setup: () => void): void;
    /** Work `$ready` waits for (a query's first load); a setup's work belongs to that run, any other to the next start. */
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
    /** Run every setup, then `connected()`, and settle `$ready` with that run's work; answers `$ready`. */
    start(): Promise<void>;
    /** `disconnected()`, then every teardown owned, the queries' included. */
    dispose(): Promise<void>;
}
