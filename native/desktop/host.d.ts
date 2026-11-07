/** @import { DesktopOptions, Handler } from "./types.js" */
/** One method the page may call. */
export class Route {
    /**
     * @param {string} name
     * @param {Handler} invoke
     */
    constructor(name: string, invoke: Handler);
    name: string;
    invoke: Handler;
}
/** One listener of an event the page emits; `active` goes false when its unlisten function ran. */
export class Listener {
    /**
     * @param {string} name
     * @param {(value: unknown) => void} receive
     */
    constructor(name: string, receive: (value: unknown) => void);
    name: string;
    receive: (value: unknown) => void;
    active: boolean;
}
export function str(args: unknown[], i: number): string;
export function num(args: unknown[], i: number): number;
export function bool(args: unknown[], i: number): boolean;
export function arr(args: unknown[], i: number): unknown[];
export class DesktopApp {
    /** @param {DesktopOptions} options */
    constructor(options: DesktopOptions);
    webDir: string;
    window: DesktopWindow;
    /** @type {Map<string, Route>} */
    routes: Map<string, Route>;
    /** @type {Listener[]} */
    listeners: Listener[];
    /** @type {(() => void) | null} */
    onConnect: (() => void) | null;
    /** @type {(() => void) | null} */
    onClose: (() => void) | null;
    /** @type {((level: string, text: string) => void) | null} */
    onLog: ((level: string, text: string) => void) | null;
    running: boolean;
    ready: boolean;
    /** @type {AssetServer | null} */
    server: AssetServer | null;
    /**
     * Register a method the page may call as `call.<name>(…)`.
     * @param {string} name
     * @param {Handler} invoke
     */
    handle(name: string, invoke: Handler): void;
    /**
     * Listen for an event the page emits with `emit(name, value)`; the value arrives parsed from
     * JSON as `unknown`. Answers the function that removes the listener.
     * @param {string} name
     * @param {(value: unknown) => void} receive
     */
    on(name: string, receive: (value: unknown) => void): () => void;
    /**
     * Push an event to the page's `on(name, …)` listeners. Before the page said it is ready,
     * nothing is pushed.
     * @param {string} name
     * @param {unknown} value
     */
    emit(name: string, value: unknown): void;
    /**
     * Like `emit`, with the value already JSON text, which the page evaluates as written: for a
     * value built from JSON another program printed, this skips encoding it as a string here and
     * parsing it there (a 5 MB line arrives in about a third of the time). `json` must be valid
     * JSON; otherwise the page drops the event with a syntax error.
     * @param {string} name
     * @param {string} json
     */
    emitJson(name: string, json: string): void;
    start(): void;
    quit(): void;
    close(): void;
    /**
     * One call from the page: `req` is the JSON array `[method, args]`.
     * @param {string} id
     * @param {string} req
     */
    dispatchCall(id: string, req: string): void;
    /**
     * @param {string} id
     * @param {boolean} ok
     * @param {unknown} value the result, or the error text
     */
    reply(id: string, ok: boolean, value: unknown): void;
}
import type { Handler } from "./types.js";
import { DesktopWindow } from "./window.js";
import { AssetServer } from "./server.js";
import type { DesktopOptions } from "./types.js";
