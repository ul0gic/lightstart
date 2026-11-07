import { Part } from "./part.js";
import type { EffectAdapter, EffectHandle, HostNode } from "./types.js";
/**
 * Inject the reactive-effect adapter used for `${() => ...}` thunk
 * bindings. The view engine passes `effect` from light/signals when it
 * loads. Without an adapter,
 * thunks are evaluated once per parent render, correct but coarse.
 */
export declare const configure: (options?: {
    effect?: EffectAdapter;
    host?: import("./host.js").Host;
}) => void;
/**
 * The thunk-binding state of a part: the thunk it holds, the effect running
 * it, and whether that effect has seen its anchor connected. Parts that take
 * `${() => …}` bindings extend it and answer `_anchor()`.
 */
export declare class ThunkHolder extends Part {
    _thunk: (() => unknown) | undefined;
    _effect: EffectHandle | null;
    _thunkLive: boolean;
    constructor();
    /** @returns the node whose connectivity decides whether the effect stays alive */
    _anchor(): HostNode | null;
    /** @param _value what the thunk answered, committed as the part commits any value */
    _commitResolved(_value: unknown): void;
}
export declare const disposeThunk: (part: ThunkHolder) => void;
/**
 * Bind a thunk to a part. With an adapter, the thunk runs inside a
 * reactive effect that re-commits directly into the part on dependency
 * change, no parent re-render. A parent re-render with a new closure
 * identity swaps the effect; an effect firing after its anchor left the
 * document disposes itself.
 */
export declare const setThunk: (part: ThunkHolder, fn: () => unknown) => void;
export declare const resolveEager: (value: unknown) => unknown;
