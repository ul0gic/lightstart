/**
 * @bootstrapp/light/controller/storage: Storage Adapters
 * localStorage, sessionStorage, and memory storage with signal integration.
 */
import type { Adapter, StorageArea } from "../types.js";
/**
 * Every browser-Storage touch is guarded: private mode, quota, and disabled
 * storage throw where the hand-rolled try/catch wrappers this adapter
 * replaces returned a default. `get` takes that default as its second arg.
 */
export declare const createStorageAdapter: (storage: StorageArea, name: string) => Adapter;
/** A sync adapter over one in-memory map, shared by every binding that names it. */
export declare const memoryStorage: {
    name: string;
    get(key: string): unknown;
    set(key: string, value: unknown): {
        key: string;
    };
    remove(key: string): {
        key: string;
    };
    has(key: string): boolean;
    keys(): string[];
    entries(): Array<[string, unknown]>;
    clear(): void;
} & Adapter;
/** The browser's `localStorage` as a sync adapter, resolved on use; memory where there is no window. */
export declare const localStorage: Adapter;
/** The browser's `sessionStorage` as a sync adapter, resolved on use; memory where there is no window. */
export declare const sessionStorage: Adapter;
