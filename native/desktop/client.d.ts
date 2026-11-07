export function connect<C extends Contract, E extends Events, P extends Events = object>(): Desktop<C, E, P>;
export type Bridge = {
    __desktop: (method: string, args: unknown[]) => Promise<unknown>;
    __desktopListen: (name: string, fn: (value: never) => void) => void;
    __desktopUnlisten: (name: string, fn: (value: never) => void) => void;
};
import type { Contract } from "./types.js";
import type { Events } from "./types.js";
import type { Desktop } from "./types.js";
