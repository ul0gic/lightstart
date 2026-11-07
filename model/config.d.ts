/**
 * What the model reads from its host: the request every model api sends
 * through, the bus its warnings, its logs and `model:changed` travel on, and
 * where a new row's id comes from. The request is a store in the same
 * runtime (`storeRequest(store)`) or a port to one elsewhere; until one is
 * configured a call rejects. With no bus configured the model keeps its own,
 * so on a page with no host `onChange` hears what a store in the same page
 * writes; with no id source it draws from `Math.random`, which every runtime
 * light compiles to has.
 */
import type { ModelBus, ModelRequest } from "./types.js";
/**
 * Hand the model its host's request, bus and id source; without a bus or an
 * id source it keeps its own. `makeId` answers a new row's id when the caller
 * sent none.
 */
export declare const configureModel: (options?: {
    request?: ModelRequest | null;
    events?: ModelBus | null;
    makeId?: (() => string) | null;
}) => void;
/** The request a model api sends through, read when the call is made. */
export declare const modelRequest: () => ModelRequest;
/** A new row's id, from the configured source. */
export declare const newId: () => string;
/** The bus the model emits on and listens to. */
export declare const modelBus: () => ModelBus;
