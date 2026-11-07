export class DesktopWindow {
    /** @param {DesktopWindowOptions} options */
    constructor(options: DesktopWindowOptions);
    title: string;
    width: number;
    height: number;
    debug: boolean;
    pumpMs: number;
    frameless: boolean;
    selectable: boolean;
    state: number;
    /** @type {((id: string, req: string) => void) | null} */
    onRequest: ((id: string, req: string) => void) | null;
    /** @type {(() => void) | null} */
    onClose: (() => void) | null;
    /** @type {Map<number, (status: number, paths: string) => void>} */
    dialogs: Map<number, (status: number, paths: string) => void>;
    w: bigint;
    running: boolean;
    pumping: boolean;
    open(): void;
    minimize(): void;
    /** @param {boolean} on */
    maximize(on: boolean): void;
    isMaximized(): boolean;
    inspector(): void;
    /**
     * A non-modal message box.
     * @param {string} title
     * @param {string} text
     */
    message(title: string, text: string): void;
    /**
     * Open a file chooser: `kind` 0 picks files, 1 a folder, 2 a file to save. Answers the chosen
     * paths (newline-joined; "" when cancelled) once the user is done; the dialog is not modal, the
     * pump keeps running. `path` is the folder to start in, or the suggested file for a save.
     * @param {number} kind
     * @param {string} title
     * @param {string} path
     * @param {boolean} multi
     * @returns {Promise<string>}
     */
    dialog(kind: number, title: string, path: string, multi: boolean): Promise<string>;
    pendingDialogs(): number[];
    /** Withdraw an open dialog; it answers as cancelled. @param {number} id */
    cancelDialog(id: number): void;
    /**
     * @param {number} id
     * @param {number} status
     * @param {string} paths
     */
    dialogResult(id: number, status: number, paths: string): void;
    /**
     * Install a script that runs at document start on every page load, after the bridge binding.
     * @param {string} js
     */
    init(js: string): void;
    /** @param {string} url */
    navigate(url: string): void;
    /** Evaluate in the page; nothing happens before the first navigation. @param {string} js */
    eval(js: string): void;
    /**
     * Call the page's `window.__desktopEmit(name, value)`, the event side of light's bridge.
     * @param {string} name
     * @param {unknown} value
     */
    emit(name: string, value: unknown): void;
    /**
     * Like `emit`, with the value already JSON text, evaluated as written: a value that is mostly
     * JSON from elsewhere (lines another program printed) skips a second encoding here and the
     * page's parse. `json` must be valid JSON; otherwise the page drops the event with a syntax
     * error.
     * @param {string} name
     * @param {string} json
     */
    emitJson(name: string, json: string): void;
    /**
     * Answer one call from the page: `json` is what the page's Promise resolves to.
     * @param {string} id
     * @param {string} json
     */
    answer(id: string, json: string): void;
    /**
     * A call from the page, delivered inside a pump: `req` is the JSON array of its arguments.
     * @param {string} id
     * @param {string} req
     */
    receive(id: string, req: string): void;
    /**
     * A call from the page's window host: `["$window", [op]]`. The state is answered, the other
     * operations are acknowledged first and carried out after.
     * @param {string} id
     * @param {string} req
     */
    windowCall(id: string, req: string): void;
    toggleMaximize(): void;
    /**
     * @param {number} x where the press happened on the screen, or -1 for where the pointer is now
     * @param {number} y
     */
    beginMove(x: number, y: number): void;
    requestClose(): void;
    windowState(): number;
    pushState(): void;
    tick(): void;
    quit(): void;
    close(): void;
}
import type { DesktopWindowOptions } from "./types.js";
