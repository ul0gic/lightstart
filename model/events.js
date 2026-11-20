/**
 * @lightstart/light/model/events: the occurrences the model reports, each a
 * typed `event` from `@lightstart/light/signals/event`. `on` answers the
 * unsubscribe; delivery is synchronous.
 */

import { event } from "../signals/event.js";

                                                          

/** Every write, once the adapter stored it: `add`, `edit`, `remove` or a whole-collection `sync`. */
export const modelChanged = event              ();
/** A failure the model reports. */
export const modelError = event           ();
/** A warning the model reports. */
export const modelWarn = event           ();
/** A storage adapter registered under a type. */
export const adapterRegistered = event                  ();
/** An adapter instance made for a database. */
export const databaseCreated = event                                                            ();
/** A failure the IndexedDB adapter reports. */
export const idbError = event           ();
/** A line the IndexedDB adapter logs. */
export const idbLog = event           ();
/** A warning the IndexedDB adapter reports. */
export const idbWarn = event           ();
