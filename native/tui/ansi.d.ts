import { Style } from "./style.js";
export declare const ESC = "\u001B";
export declare const CSI = "\u001B[";
export declare const ALT_SCREEN_ON: string;
export declare const ALT_SCREEN_OFF: string;
export declare const CURSOR_HIDE: string;
export declare const CURSOR_SHOW: string;
export declare const PASTE_ON: string;
export declare const PASTE_OFF: string;
export declare const MOUSE_ON: string;
export declare const MOUSE_OFF: string;
export declare const SYNC_START: string;
export declare const SYNC_END: string;
export declare const CLEAR: string;
export declare const RESET: string;
export declare const HOME: string;
export declare const TITLE_PUSH: string;
export declare const TITLE_POP: string;
/** The sequence that names the terminal's window and tab `text`, its control characters as spaces. */
export declare const windowTitle: (text: string) => string;
/**
 * Move the cursor to column `x`, row `y`, both zero-based.
 */
export declare const cup: (x: number, y: number) => string;
/**
 * The SGR sequence that turns `prev` into `next`, empty when nothing
 * changes; `prev` null means the terminal's state is unknown.
 */
export declare const sgrTransition: (prev: Style | null, next: Style) => string;
