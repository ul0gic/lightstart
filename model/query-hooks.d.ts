/**
 * Query hooks: how a package shapes every `getAll` before it leaves the
 * tab. A hook receives `{ model, schema, opts }` and answers the options
 * to use (or nothing to keep them); the hooks registered when a query
 * starts run once each, in registration order. `@bootstrapp/i18n` scopes
 * `$i18n` models to the active locale this way.
 */
import type { QueryHook, QueryHookContext, QueryOptions } from "./types.js";
/** Register a hook; the answer unregisters it. */
export declare const registerQueryHook: (fn: QueryHook) => (() => void);
export declare const applyQueryHooks: (ctx: QueryHookContext) => QueryOptions;
export declare const clearQueryHooks: () => void;
