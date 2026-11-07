/**
 * @bootstrapp/light/controller/url: the URL hash adapter
 * Hash parameters as a sync adapter: `get(key)` reads `#key=value`, `set`
 * writes it, and every key a binding follows hears back navigation. It starts
 * listening to `popstate` when the first binding subscribes, so importing it
 * has no side effect. Query parameters are the router's.
 */
import type { Adapter } from "../types.js";
/** The URL hash as a sync adapter: one `#key=value` parameter per key. */
export declare const hash: Adapter;
