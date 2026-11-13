/**
 * @lightstart/light/controller: Store-as-Adapter Facade
 * Wraps anything store-shaped (a bare store, a controller instance via its
 * `$sync`) in the Adapter interface, so a controller can be registered as a
 * named sync target and bound with the same code as localStorage. The store
 * is the source of truth for its own subscribers, so `emit` propagates an
 * inbound value by writing it; the store then notifies everyone bound to that
 * key, including listeners registered through `on`.
 */

                                                                             
                                                     

import { effect, signal } from "../../signals/index.js";
import { Listeners } from "../../signals/listeners.js";

/** The adapter over `target`'s `$sync` (or `target` itself, when it is the surface), registered as `name`. */
export const adapterFor = (name        , target                       )          => {
  const $sync = "$sync" in target ? target.$sync : undefined;
  const read = (key        )          => ($sync === undefined ? target.get(key) : $sync.get(key));
  const write = (key        , value         )          => ($sync === undefined ? target.set(key, value) : $sync.set(key, value));
  const listen = (key        , callback                          )               => ($sync === undefined ? target.subscribe(key, callback) : $sync.subscribe(key, callback));
  const keysOf = () => ("$state" in target ? target.$state?.keys?.() : undefined) ?? ("keys" in target ? target.keys?.() : undefined) ?? [];
  const unsubs                                                   = [];
  const listeners                                     = new Map();
  const signals                               = new Map();

  const adapter          = {
    name,
    get: (key) => read(key),
    set: (key, value) => write(key, value),
    remove: (key) => write(key, undefined),
    has: (key) => keysOf().includes(key),
    keys: keysOf,
    entries: () => keysOf().map((key)                    => [key, read(key)]),
    on(key, callback) {
      const off = listen(key, (value) => callback(value));
      const known = unsubs.find((entry) => entry.callback === callback);
      if (known) known.off = off;
      else unsubs.push({ callback, off });
      if (!listeners.has(key)) listeners.set(key, new Listeners());
      listeners.get(key)?.add(callback);
      return () => this.off(key, callback);
    },
    off(key, callback) {
      const at = unsubs.findIndex((entry) => entry.callback === callback);
      if (at !== -1) {
        unsubs[at].off();
        unsubs.splice(at, 1);
      }
      listeners.get(key)?.delete(callback);
    },
    emit(key, value) {
      write(key, value);
    },
    hasListeners: (key) => (listeners.get(key)?.size ?? 0) > 0,
    signal(key, defaultValue) {
      const existing = signals.get(key);
      if (existing) return existing;

      const sig = signal(read(key) ?? defaultValue);
      effect(() => {
        const value = sig.value;
        if (value !== read(key)) write(key, value);
      });
      listen(key, (value) => {
        if (value !== sig.peek()) sig.value = value ?? defaultValue;
      });
      signals.set(key, sig);
      return sig;
    },
    _listeners: listeners,
    _signals: signals,
  };
  return adapter;
};
