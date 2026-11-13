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

import { resource } from "../controller/resource.js";
import { writableRecord, writerOf } from "../controller/writers.js";
import { effect, signal, untracked } from "../signals/index.js";
import { isModelApi } from "./index.js";
import { onChange } from "./changes.js";
                                                         
                                                                                                                            
                                                                                                

const includeTargets = (api          , include        )           => {
  const target = (api.schema?.[include]                                                   )?.targetModel;
  if (Array.isArray(target)) return target;
  return typeof target === "string" && target !== "*" ? [target] : [];
};

                      
               
                 
                                  
 

const copyQuery = (source        )               => {
  const query               = {};
  for (const [field, value] of Object.entries(source)) query[field] = value;
  return query;
};

const liveQuery =                                    (api          , query              , { name, eager, ready }            )                        => {
  let total = 0;
  let settled = false;
  let stale = false;
  let scheduled = false;
  const refresh = () => {
    if (!settled) {
      stale = true;
      return;
    }
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(() => {
      scheduled = false;
      res.refresh().catch(() => {});
    });
  };
  const res = resource(async ()               => {
    stale = false;
    const page = await api.query(query);
    total = page.total;
    settled = true;
    if (stale) queueMicrotask(refresh);
    return page.rows       ;
  }, { name: `query:${name}`, eager, ready });

  res.own(onChange(api.name, undefined, refresh));
  for (const include of query.includes ?? [])
    for (const target of includeTargets(api, include)) res.own(onChange(target, undefined, refresh));

  return {
    name: res.name,
    value: res.value,
    pending: res.pending,
    error: res.error,
    ensure: () => res.ensure(),
    refresh: () => res.refresh(),
    invalidate: () => res.invalidate(),
    mutate: (updater) => res.mutate(updater),
    peek: () => res.peek(),
    subscribe: (cb) => res.subscribe(cb),
    own: (teardown) => res.own(teardown),
    dispose: () => res.dispose(),
    get total() {
      return total;
    },
  };
};

/** A live query of `api`: a `resource()` over `api.query()` that refetches, coalesced per tick, when its model or an included model changes. */
export const modelQuery =                                    (api          , opts                    = {})                        => {
  const { name = api.name, eager = true, ready, ...query } = opts;
  return liveQuery   (api, copyQuery(query), { name, eager, ready });
};

const loadsInFlight                          = new WeakMap();

const countLoad = (store           , step        ) => {
  const count = Math.max(0, (loadsInFlight.get(store) ?? 0) + step);
  loadsInFlight.set(store, count);
  if (store.keys().includes("dataPending")) store.set("dataPending", count > 0);
};

const singleRow = (api          , query                                 , name        , ready                          ) => {
  const { id } = query;
  const rest               = {};
  for (const [field, value] of Object.entries(query)) if (field !== "id") rest[field] = value;
  const res = resource(
    ()                   => (id != null ? api.get(id          , rest) : rest.where ? api.get(rest) : Promise.resolve(null)),
    { name: `get:${name}`, eager: true, ready },
  );
  res.own(onChange(api.name, undefined, () => res.invalidate()));
  return res;
};

                     
                          
                 
              
                   
                                                  
                                    
                     
 

function followLive   (current                       , at           )                        {
  let writer = writerOf(at.host.$queries);
  if (writer === undefined) {
    writer = writableRecord();
    at.host.$queries = writer.record;
  }
  writer.writeKey(at.key, current);
  at.offs.push(current.value.subscribe((value) => {
    if (value === undefined) return;
    at.store.set(at.key, value);
    at.onValue(value, current);
  }));
  at.offs.push(current.error.subscribe((error) => {
    if (error) at.onError(error);
  }));
  countLoad(at.store, 1);
  current.ensure().catch(() => {}).finally(() => {
    countLoad(at.store, -1);
    at.settle();
  });
  return current;
}

function followOne   (current             , at           )              {
  let writer = writerOf(at.host.$queries);
  if (writer === undefined) {
    writer = writableRecord();
    at.host.$queries = writer.record;
  }
  writer.writeKey(at.key, current);
  at.offs.push(current.value.subscribe((value) => {
    if (value === undefined) return;
    at.store.set(at.key, value);
    at.onValue(value, current);
  }));
  at.offs.push(current.error.subscribe((error) => {
    if (error) at.onError(error);
  }));
  countLoad(at.store, 1);
  current.ensure().catch(() => {}).finally(() => {
    countLoad(at.store, -1);
    at.settle();
  });
  return current;
}

/** Keep `store`'s `key` mirroring `api`'s live query (an array property) or one row (any other), rebuilt when a `dependsOn` key changes. */
export const bindModelQuery = ({ store, key, prop, host, api, onValue, onError }   
                   
              
                 
                 
                
                                                   
                                     
 )          => {
  const name = `${api.name}:${key}`;
  let stop                      = null;
  const at            = { offs: [], host, key, store, onValue: onValue ?? (() => {}), onError: onError ?? (() => {}), settle: () => {} };
  const loaded = new Promise      ((resolve) => {
    at.settle = () => resolve();
  });

  const build = () => {
    for (const off of at.offs.splice(0)) off();
    stop?.();
    const given = prop.query;
    const query = (typeof given === "function" ? (given                               )(host) : (given ?? {}))                                   ;
    const ready = prop.ready                            ;
    if (prop.$type === "array") {
      const current = followLive(liveQuery(api, copyQuery(query), { name, eager: true, ready }), at);
      stop = () => current.dispose();
    } else {
      const current = followOne(singleRow(api, query, name, ready), at);
      stop = () => current.dispose();
    }
  };

  build();
  const depOffs                    = [];
  for (const dep of prop.dependsOn ?? []) depOffs.push(store.subscribe(dep, build));

  return {
    loaded,
    unbind: () => {
      for (const off of depOffs) off();
      for (const off of at.offs.splice(0)) off();
      stop?.();
      stop = null;
      const writer = writerOf(host.$queries);
      if (writer && writer.dropKey !== null) writer.dropKey(key);
    },
  };
};

/**
 * The model as a sync target: light's binding hands a property bound to a
 * model api (or a thunk answering one) to `bindModelQuery`, with its `query`
 * and `dependsOn`.
 */
export const modelBinder             = {
  test: isModelApi,
  options: ["query", "dependsOn"],
  bind({ store, key, prop, host, target })          {
    return bindModelQuery({ store, key, prop, host, api: target             });
  },
};

/**
 * The rows of a live query as a `Controller` subclass reads them. A query's
 * resource keeps its rows in a signal typed over `unknown`, which no
 * `Signal<T>` is natively, so the rows are read through this wrapper: its one
 * field is the unknown-typed signal the resource feeds, and `value` reads it
 * as `T[]`, the one cast, the way a view's `Prop<T>` reads its signal. `use`
 * points it at a resource (the next query when the options change), disposing
 * the one before.
 */
export class LiveRows    {
          res                                                     = null;
          following                      = null;
                   sig = signal         ([]);

  /** The rows now; a render or an effect reading them follows the query. */
  get value()      {
    return this.sig.value       ;
  }

  /** The rows now, without tracking. */
  peek()      {
    return this.sig.peek()       ;
  }

  /** Whether a load is in flight. */
  get pending()          {
    const res = this.res;
    return res !== null && res.pending.value;
  }

  /** The size of the whole match, past `limit`. */
  get total()         {
    const res = this.res;
    return res !== null ? res.total : 0;
  }

  /** Follow `res` from now on, its rows replacing these as they land; the resource before is disposed. */
  use(res                                             )       {
    this.drop();
    this.res = res;
    this.following = res.value.subscribe((rows) => {
      if (rows !== undefined) this.sig.value = rows;
    });
  }

  /** The first load of the resource followed, settled either way; at once when there is none. */
  loaded()                {
    const res = this.res;
    return res === null ? Promise.resolve() : res.ensure().then(() => undefined, () => undefined);
  }

  /** Run the query again. */
  refresh()                {
    const res = this.res;
    return res === null ? Promise.resolve() : res.refresh().then(() => undefined);
  }

  /** Stop following; the rows stay as they were. */
  dispose()       {
    this.drop();
  }

          drop()       {
    const following = this.following;
    if (following !== null) following();
    this.following = null;
    const res = this.res;
    if (res !== null) res.dispose();
    this.res = null;
  }
}

/**
 * The rows of a live query of `model` for `controller`: its options built by
 * `build` and built again whenever a signal `build` read changes, followed
 * until the controller is disposed. Made before `start()`, its first load
 * counts in `$ready`. The signals `build` reads are declared above the field
 * that holds the rows.
 */
export const liveRows =    (controller            , model          , build                         )              => {
  const rows = new LiveRows   ();
  const run = effect(() => {
    const options = build();
    untracked(() => rows.use(modelQuery                         (model, options)));
  });
  controller.$own(() => {
    run.dispose();
    rows.dispose();
  });
  controller.$wait(rows.loaded());
  return rows;
};
