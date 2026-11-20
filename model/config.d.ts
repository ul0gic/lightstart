/**
 * What the model reads from its host: the request every model api sends
 * through, and where a new row's id comes from. The request is a store in the
 * same runtime (`storeRequest(store)`) or a port to one elsewhere; until one
 * is configured a call rejects. With no id source it draws from
 * `Math.random`, which every runtime light compiles to has.
 */
import type { ModelRequest } from "./types.js";
/**
 * Hand the model its host's request and id source; without an id source it
 * keeps its own. `makeId` answers a new row's id when the caller sent none.
 */
export declare const configureModel: (options?: {
    request?: ModelRequest | null;
    makeId?: (() => string) | null;
}) => void;
/** The request a model api sends through, read when the call is made. */
export declare const modelRequest: () => ModelRequest;
/** A new row's id, from the configured source. */
export declare const newId: () => string;
