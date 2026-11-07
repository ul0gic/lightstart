/**
 * @bootstrapp/light/signals/store: Store
 * The canonical declared reactive store: per-key subscribe, optional
 * flattened accessors (off for views, controllers and extensions, whose
 * instance is the accessor surface, so a declared key may share a store
 * method's name), pack/unpack serialization, and a `$sync` bridge so any store
 * is a valid View `sync:` target.
 */
import type { StoreCore } from "./types.js";
export declare const createStore: (defs?: Record<string, unknown>, { name, accessors }?: {
    name?: string;
    accessors?: boolean;
}) => StoreCore;
