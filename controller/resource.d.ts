/**
 * @bootstrapp/light/controller/resource: resource()
 * The async primitive for a value something fetches: an HTTP answer, baked
 * JSON, a join across sources. It holds the value, whether it is loading and
 * the last error as signals, dedupes concurrent loads, and never shows an
 * empty middle state: a refresh keeps the last good value until the new
 * answer lands (stale-while-revalidate). The ready gate, the event bus behind
 * `invalidateOn` and work tracking come from `configureControllers`.
 */
import type { KeyedResource, KeyedResourceOptions, Resource, ResourceOptions } from "./types.js";
/**
 * A resource over `fetcher`. `mutate(updater)` must return a NEW reference:
 * the signal's === dedupe makes in-place mutation invisible. `subscribe(cb)`
 * fires immediately with the current value, then on every change.
 */
export declare function resource<T>(fetcher: () => Promise<T> | T, options?: ResourceOptions): Resource<T>;
/**
 * Keyed resources: one lazily-created resource per key (per-URL caches,
 * per-slug fetches). `invalidate(key)` has DROP semantics: the entry is
 * disposed and deleted, so the next get(key) starts fresh, unlike a
 * singular Resource.invalidate, which refreshes in place.
 */
export declare function keyedResource<T>(fetcherForKey: (key: string) => Promise<T> | T, options?: KeyedResourceOptions): KeyedResource<T>;
