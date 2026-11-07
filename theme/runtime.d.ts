export function createRuntime(engine: import("./classes/types.js").Engine, options?: RuntimeOptions): {
    start: () => void;
    stop: () => void;
    addClasses: (list: Iterable<string>) => void;
    flush: () => void;
    seen: Set<string>;
    unknown: () => string[];
};
import type { RuntimeOptions } from "./runtime-types.js";
