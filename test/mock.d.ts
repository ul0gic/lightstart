export class MockTracker {
    /**
     * @template {AnyFn} [F=LooseFn]
     * @param {F} [original]
     * @param {F} [implementation]
     * @param {{ times?: number }} [options]
     * @returns {MockedFn<F>}
     */
    fn<F extends AnyFn = LooseFn>(original?: F, implementation?: F, options?: {
        times?: number;
    }): MockedFn<F>;
    /**
     * @template {AnyFn} [F=LooseFn]
     * @param {Record<string|symbol, unknown>} object
     * @param {string|symbol} methodName
     * @param {F} [implementation]
     * @param {{ getter?: boolean, setter?: boolean }} [options]
     * @returns {MockedFn<F>}
     */
    method<F extends AnyFn = LooseFn>(object: Record<string | symbol, unknown>, methodName: string | symbol, implementation?: F, options?: {
        getter?: boolean;
        setter?: boolean;
    }): MockedFn<F>;
    /** @template {AnyFn} [F=LooseFn] @param {Record<string|symbol, unknown>} object @param {string|symbol} name @param {F} [implementation] */
    getter<F extends AnyFn = LooseFn>(object: Record<string | symbol, unknown>, name: string | symbol, implementation?: F): MockedFn<F>;
    /** @template {AnyFn} [F=LooseFn] @param {Record<string|symbol, unknown>} object @param {string|symbol} name @param {F} [implementation] */
    setter<F extends AnyFn = LooseFn>(object: Record<string | symbol, unknown>, name: string | symbol, implementation?: F): MockedFn<F>;
    reset(): void;
    restoreAll(): void;
    get timers(): {
        enable: () => never;
    };
    module: () => never;
    #private;
}
export const mock: MockTracker;
export default mock;
import type { AnyFn } from "./types.js";
import type { LooseFn } from "./types.js";
import type { MockedFn } from "./types.js";
