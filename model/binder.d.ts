/**
 * @lightstart/light/model/binder: the model as a sync target
 * A property bound to a model's api (`Model.x`), on a controller or a view, is
 * one live query mirrored into the host's store key: an array property runs
 * `modelQuery()`, any other keeps one row (`query.id`, or a `where`) current.
 * `query` is an object or `(host) => object`; `dependsOn` names the host
 * properties whose change rebuilds it. The resource lands on
 * `host.$queries[key]`. `modelQuery()` is one `query()` through `resource()`
 * that re-runs itself, coalesced per tick, when a change lands on its model or
 * on an included relation's model; every option a query takes is live-safe,
 * `limit` and `offset` included, and `total` follows the whole match.
 * `modelBinder` hands all of this to light's sync binding:
 * `registerSyncBinder(modelBinder)` in the page that binds models. For a
 * controller written as a class, `liveRows(this, model, build)` is the same
 * query as a `sync:` entry, its rows read through `LiveRows`.
 */
import type { Controller } from "../controller/class.js";
import type { Binding, StoreCore, SyncBinder, SyncHost, SyncProp } from "../controller/types.js";
import type { ModelApi, ModelQueryOptions, ModelQueryResource } from "./types.js";
/** A live query of `api`: a `resource()` over `api.query()` that refetches, coalesced per tick, when its model or an included model changes. */
export declare const modelQuery: <T extends Record<string, unknown>>(api: ModelApi, opts?: ModelQueryOptions) => ModelQueryResource<T>;
/** Keep `store`'s `key` mirroring `api`'s live query (an array property) or one row (any other), rebuilt when a `dependsOn` key changes. */
export declare const bindModelQuery: ({ store, key, prop, host, api, onValue, onError }: {
    store: StoreCore;
    key: string;
    prop: SyncProp;
    host: SyncHost;
    api: ModelApi;
    onValue?: (value: unknown, res: unknown) => void;
    onError?: (error: unknown) => void;
}) => Binding;
/**
 * The model as a sync target: light's binding hands a property bound to a
 * model api (or a thunk answering one) to `bindModelQuery`, with its `query`
 * and `dependsOn`.
 */
export declare const modelBinder: SyncBinder;
/** A resource of rows, with a `total` when its source is a model query. */
type RowsResource = ModelQueryResource<Record<string, unknown>>;
/**
 * The rows of a live query as a `Controller` subclass reads them. A query's
 * resource keeps its rows in a signal typed over `unknown`, which no
 * `Signal<T>` is natively, so the rows are read through this wrapper: its one
 * field is the unknown-typed signal the resource feeds, and `value` reads it
 * as `T[]`, the one cast, the way a view's `Prop<T>` reads its signal. `use`
 * points it at a resource (the next query when the options change), disposing
 * the one before.
 *
 * Given a `convert`, each row the resource answers is checked to be a non-null
 * object and handed to `convert` once, and the converted array is cached
 * against the source array it came from, so reading `value` twice converts
 * once. A row that is not an object or that `convert` answers `null` for is
 * skipped, counted in `skipped`, and reported once per row id through
 * `modelWarn` as `row_skipped`.
 */
export declare class LiveRows<T> {
    private res;
    private following;
    private readonly sig;
    private readonly convert;
    private readonly model;
    private source;
    private converted;
    private skippedCount;
    private readonly warned;
    constructor(convert?: ((row: Record<string, unknown>) => T | null) | null, model?: string);
    /** The rows now; a render or an effect reading them follows the query. */
    get value(): T[];
    /** The rows now, without tracking. */
    peek(): T[];
    /** How many rows the last conversion skipped. */
    get skipped(): number;
    /** Whether a load is in flight. */
    get pending(): boolean;
    /** The size of the whole match, past `limit`. */
    get total(): number;
    /** Follow `res` from now on, its rows replacing these as they land; the resource before is disposed. */
    use(res: RowsResource): void;
    private ingest;
    private warn;
    /** The first load of the resource followed, settled either way; at once when there is none. */
    loaded(): Promise<void>;
    /** Run the query again. */
    refresh(): Promise<void>;
    /** Stop following; the rows stay as they were. */
    dispose(): void;
    private drop;
}
/**
 * The rows of a live query of `model` for `controller`: its options built by
 * `build` and built again whenever a signal `build` read changes, followed
 * from every `start()` until the controller is disposed. Registered through
 * `controller.$onStart`, the query starts with `start()`, against the stores
 * the run opened; its first load counts in `$ready`, and a second `start()`
 * follows it again. The signals `build` reads are declared above the field
 * that holds the rows.
 *
 * `convert` turns each row the query answers into `T` (a generated row class's
 * `static of`, say), with a `null` answer skipping the row; `rows.value` is
 * then `T[]` and `rows.skipped` counts the rows the last conversion skipped.
 */
export declare const liveRows: <T>(controller: Controller, model: ModelApi, build: () => ModelQueryOptions, convert?: (row: Record<string, unknown>) => T | null) => LiveRows<T>;
export {};
