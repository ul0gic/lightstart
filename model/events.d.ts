/**
 * @lightstart/light/model/events: the occurrences the model reports, each a
 * typed `event` from `@lightstart/light/signals/event`. `on` answers the
 * unsubscribe; delivery is synchronous.
 */
import type { ModelChanged, ModelNote } from "./types.js";
/** Every write, once the adapter stored it: `add`, `edit`, `remove` or a whole-collection `sync`. */
export declare const modelChanged: import("../signals/event.js").Emitter<ModelChanged<import("./types.js").Row>>;
/** A failure the model reports. */
export declare const modelError: import("../signals/event.js").Emitter<ModelNote>;
/** A warning the model reports. */
export declare const modelWarn: import("../signals/event.js").Emitter<ModelNote>;
/** A storage adapter registered under a type. */
export declare const adapterRegistered: import("../signals/event.js").Emitter<{
    type: string;
}>;
/** An adapter instance made for a database. */
export declare const databaseCreated: import("../signals/event.js").Emitter<{
    type: string;
    name?: string;
    version?: number | string;
}>;
/** A failure the IndexedDB adapter reports. */
export declare const idbError: import("../signals/event.js").Emitter<ModelNote>;
/** A line the IndexedDB adapter logs. */
export declare const idbLog: import("../signals/event.js").Emitter<ModelNote>;
/** A warning the IndexedDB adapter reports. */
export declare const idbWarn: import("../signals/event.js").Emitter<ModelNote>;
