/**
 * @lightstart/light/native/tui/scheduler: one frame per setImmediate tick. Views
 * flush first, then the renderer lays out and paints; both register
 * through `onFlush` in that order. The terminal's requestAnimationFrame.
 */
declare class FlushStep {
    order: number;
    fn: () => void;
    constructor(order: number, fn: () => void);
}
export declare const FLUSH_VIEWS = 0;
export declare const FLUSH_RENDER = 10;
export declare const FLUSH_AFTER = 20;
export declare class FrameScheduler {
    requested: boolean;
    flushing: boolean;
    flushers: FlushStep[];
    waiters: (() => void)[];
    frames: number;
    constructor();
    /**
     * Register a flush step at `order` (lower runs first); answers its remover.
     */
    onFlush(fn: () => void, order: number): () => void;
    request(): void;
    flush(): void;
    /** @returns resolves after the next frame has flushed */
    nextFrame(): Promise<void>;
}
export declare const frames: FrameScheduler;
export {};
