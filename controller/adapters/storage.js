/**
 * @lightstart/light/controller/storage: Storage Adapters
 * localStorage, sessionStorage, and memory storage with signal integration.
 */

import { withKeyedListeners, createLazyAdapter } from "./keyed-listeners.js";

                                                        

                                                                                             

const serialize = (value         ) => {
  if ((typeof value === "object" && value !== null) || Array.isArray(value))
    return JSON.stringify(value);

  return value          ;
};

const JSON_START = /^\s*(?:[[{"\-\d]|true|false|null)/;

const deserialize = (value               )          => {
  if (value === null) return null;
  if (!JSON_START.test(value)) return value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

/**
 * Every browser-Storage touch is guarded: private mode, quota, and disabled
 * storage throw where the hand-rolled try/catch wrappers this adapter
 * replaces returned a default. `get` takes that default as its second arg.
 */
export const createStorageAdapter = (storage             , name        )          => {
  const adapter = withKeyedListeners({
    name,

    get(key        , defaultValue          = null) {
      try {
        const value = storage.getItem(key);
        return value !== null ? deserialize(value) : defaultValue;
      } catch {
        return defaultValue;
      }
    },

    set(key        , value         ) {
      try {
        storage.setItem(key, serialize(value));
        adapter.emit(key, value);
      } catch { }
      return { key };
    },

    remove(key        ) {
      try {
        storage.removeItem(key);
      } catch { }
      adapter.emit(key, undefined);
      return { key };
    },

    has(key        ) {
      try {
        return storage.getItem(key) !== null;
      } catch {
        return false;
      }
    },

    keys() {
      try {
        return Object.keys(storage);
      } catch {
        return [];
      }
    },

    entries()                           {
      return adapter.keys().map((key) => [key, adapter.get(key)]);
    },
  });

  return adapter;
};

const memoryStore                       = new Map();

/** A sync adapter over one in-memory map, shared by every binding that names it. */
export const memoryStorage = withKeyedListeners({
  name: "memory",

  get(key        ) {
    return memoryStore.get(key);
  },

  set(key        , value         ) {
    memoryStore.set(key, value);
    memoryStorage.emit(key, value);
    return { key };
  },

  remove(key        ) {
    memoryStore.delete(key);
    memoryStorage.emit(key, undefined);
    return { key };
  },

  has(key        ) {
    return memoryStore.has(key);
  },

  keys() {
    return [...memoryStore.keys()];
  },

  entries()                           {
    return [...memoryStore.entries()];
  },

  clear() {
    memoryStore.clear();
    memoryStorage._listeners.clear();
    memoryStorage._signals.clear();
  },
});

let localStorageAdapter                 = null;
let sessionStorageAdapter                 = null;

const getLocalStorage = () => {
  if (!localStorageAdapter && typeof window !== "undefined")
    localStorageAdapter = createStorageAdapter(window.localStorage, "local");

  return localStorageAdapter || memoryStorage;
};

const getSessionStorage = () => {
  if (!sessionStorageAdapter && typeof window !== "undefined")
    sessionStorageAdapter = createStorageAdapter(window.sessionStorage, "session");

  return sessionStorageAdapter || memoryStorage;
};

/** The browser's `localStorage` as a sync adapter, resolved on use; memory where there is no window. */
export const localStorage = createLazyAdapter("local", getLocalStorage);
/** The browser's `sessionStorage` as a sync adapter, resolved on use; memory where there is no window. */
export const sessionStorage = createLazyAdapter("session", getSessionStorage);
