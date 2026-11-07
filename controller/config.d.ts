/**
 * @bootstrapp/light/controller: what controllers read from their host
 * `track(label)` is called when async work starts (a controller connecting, a
 * resource fetching) and answers what ends it, so a host that waits for a
 * quiet page counts it; `ready()` answers what a resource waits for before its
 * first fetch; `events` is the bus a resource's `invalidateOn` listens on. A
 * page with no host keeps the defaults: nothing tracked, no gate, no bus.
 */
import type { ControllerConfig } from "./types.js";
/** The host's hooks, as `configureControllers` left them. */
export declare const config: ControllerConfig;
/**
 * Hand the controllers what their host knows. An option left out keeps its
 * current value.
 */
export declare const configureControllers: (options: Partial<ControllerConfig>) => void;
/** Count `work` with the host until it settles, under `label`; answers `work`. */
export declare const tracked: <T>(work: Promise<T>, label: string) => Promise<T>;
