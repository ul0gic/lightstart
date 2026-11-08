/**
 * @lightstart/light/controller: Keyed Listeners Mixin
 * Shared on/off/emit/hasListeners/signal pattern used by all adapters.
 */
import type { AdapterCore, Adapter } from "../types.js";
/** Attach on/off/emit/signal methods to `target` and return it. */
export declare const withKeyedListeners: <T extends AdapterCore>(target: T) => T & Adapter;
/**
 * Lazy proxy that resolves the real adapter on each call (used for
 * `localStorage`/`sessionStorage` where `window` may not exist yet).
 */
export declare const createLazyAdapter: (name: string, getAdapter: () => Adapter) => Adapter;
