/**
 * @lightstart/light/controller: Store-as-Adapter Facade
 * Wraps anything store-shaped (a bare store, a controller instance via its
 * `$sync`) in the Adapter interface, so a controller can be registered as a
 * named sync target and bound with the same code as localStorage. The store
 * is the source of truth for its own subscribers, so `emit` propagates an
 * inbound value by writing it; the store then notifies everyone bound to that
 * key, including listeners registered through `on`.
 */
import type { Adapter, StoreShaped } from "../types.js";
/** The adapter over `target`'s `$sync` (or `target` itself, when it is the surface), registered as `name`. */
export declare const adapterFor: (name: string, target: StoreShaped) => Adapter;
