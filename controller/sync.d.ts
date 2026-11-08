/**
 * @lightstart/light/controller: sync
 * The adapter registry, the sync-type system, the binder registry and the
 * binding itself. Sync is store-level: a binding is a pair of subscriptions
 * between a store key and an adapter key; nothing patches instances. A target
 * some binder claims (a host's data source) is bound by that binder instead.
 * A binding whose `scope` names a sibling property rebinds whenever that
 * property names a different key, so a controller handed a new scope while it
 * lives (the thread a cache belongs to, the workspace a setting is scoped by)
 * follows it instead of keeping the key it was built with.
 */
import type { Adapter, SyncInfo, SyncCheck, SyncHandler, StoreCore, SyncBinder, SyncHost, SyncProp, Binding } from "./types.js";
/** The adapter registered as `name`, or null. */
export declare const getAdapter: (name: string) => Adapter | null;
/**
 * Register a named sync target. Anything not adapter-shaped (a controller
 * instance, a bare store) is wrapped, so its store becomes the backing.
 * Bindings queued against the name run the moment it registers.
 */
export declare const registerAdapter: (name: string, target: unknown) => void;
/**
 * Forget a named sync target. Bindings already made keep the adapter they
 * bound; a later binding by the name waits for a new registration.
 */
export declare const unregisterAdapter: (name: string) => void;
/** Names bindings are still waiting on; after boot, these are typos. */
export declare const pendingAdapterNames: () => string[];
/**
 * Register a deferred provider for a named sync target: the first binding
 * that asks for `name` invokes `create` (whose registerAdapter flushes the
 * queued binds). Lets auto-registered controllers stay uninstantiated until
 * something actually binds to them.
 */
export declare const registerLazyAdapter: (name: string, create: () => void) => void;
/**
 * Teach the binding a kind of target by its shape: `check(target)` answers
 * whether a target is one, `handler(target)` the name and the `$sync` object
 * to follow.
 */
export declare const registerSyncType: (check: SyncCheck, handler: SyncHandler) => void;
/**
 * The name and `$sync` object a target binds through, or null when nothing
 * knows the target.
 */
export declare const getSyncInfo: (adapter: unknown) => SyncInfo | null;
/**
 * The adapter key of a sync binding: `prop.key`, or the property name;
 * prefixed with the value of the `scope` property when one is named
 * (`"a.b"` reads one level into an object property). A scope whose value
 * is empty answers null, and the binding is skipped.
 */
export declare const getScopedKey: (base: string, prop: SyncProp, inst: SyncHost) => string | null;
/**
 * Bind one store key to its declared sync target. Two subscriptions and an
 * initial read. The named side owns: its value wins at bind, the store's
 * seeded default only fills a hole. Loops die on the store's `===` dedupe.
 * Returns an unbind. A named adapter that is not registered yet queues the
 * bind; the property behaves as a plain store prop until the name arrives.
 * `host` is read for scope resolution only.
 */
export declare const bindStoreSync: ({ store, key, prop, host }: {
    store: StoreCore;
    key: string;
    prop: SyncProp;
    host?: SyncHost | null;
}) => (() => void);
/**
 * A target as declared, opened: a thunk is called, so a module evaluated
 * before its target exists declares `() => target` and the target is read when
 * the property binds.
 */
export declare const resolveSync: (sync: unknown) => unknown;
/**
 * Teach the binding a data source it cannot follow as an adapter, a store or a
 * signal (a host's model, a query service): `test(target)` claims a target,
 * `bind(...)` keeps the property current and answers its unbind and, when the
 * first value arrives later, a `loaded` promise. `options` lists the long-form
 * options it reads beyond `to`, `key` and `scope` (`query`, `dependsOn`); a
 * property declaring one of those needs a target a binder that reads it claims,
 * or a thunk. A binder that reads `query` keeps the host's `dataPending` true
 * while a load is in flight, when the host declares one. Registering the same
 * binder again changes nothing.
 */
export declare const registerSyncBinder: (binder: SyncBinder) => void;
/** The binder that claims an opened target, or null. */
export declare const binderFor: (target: unknown) => SyncBinder | null;
/**
 * Whether a declared target may carry `option`: a thunk is opened only at
 * bind time, so it may; anything else needs a binder that claims it and reads
 * that option.
 */
export declare const acceptsOption: (sync: unknown, option: string) => boolean;
/**
 * Bind one property to its declared target: the first binder that claims the
 * opened target binds it, anything else goes through `bindStoreSync`. `prop`
 * is the property's descriptor, its sync options folded in.
 */
export declare const bindProperty: ({ store, key, prop, host }: {
    store: StoreCore;
    key: string;
    prop: Record<string, unknown>;
    host: SyncHost;
}) => Binding;
