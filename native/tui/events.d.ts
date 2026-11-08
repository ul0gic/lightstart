/**
 * @lightstart/light/native/tui/events: what the terminal dispatches through a
 * tree. An event bubbles from the element it targets to the root; a
 * handler that calls `consume()` stops it.
 */
export declare class UIEvent {
    type: string;
    consumed: boolean;
    constructor(type: string);
    consume(): void;
}
/**
 * One key press. `key` names it: "char" for printable text (in `text`),
 * "paste" (text in `text`), or "enter", "tab", "backspace", "delete",
 * "escape", "up", "down", "left", "right", "home", "end", "pageup",
 * "pagedown", "insert", "f1" to "f12".
 */
export declare class KeyEvent extends UIEvent {
    key: string;
    text: string;
    ctrl: boolean;
    alt: boolean;
    shift: boolean;
    constructor(key: string, text: string, ctrl: boolean, alt: boolean, shift: boolean);
    /** Whether this is the printable `text` typed on its own, without Ctrl or Alt. */
    typed(text: string): boolean;
    /** The text this key types on its own: a printable character or a paste, without Ctrl or Alt; "" otherwise. */
    typedText(): string;
    describe(): string;
}
/** The editor submitted its content (Enter). */
export declare class SubmitEvent extends UIEvent {
    value: string;
    constructor(value: string);
}
/** The editor's content changed. */
export declare class ChangeEvent extends UIEvent {
    value: string;
    constructor(value: string);
}
/**
 * A pointer event: "mousedown", "mouseup", "mousemove" (while a button is
 * held) or "click" (a release on the element that was pressed, or Enter
 * or Space on the focused element). `x` and `y` are cells from the top
 * left; `button` is 0 for the left, 1 for the middle, 2 for the right.
 */
export declare class MouseEvent extends UIEvent {
    x: number;
    y: number;
    button: number;
    ctrl: boolean;
    alt: boolean;
    shift: boolean;
    constructor(type: string, x: number, y: number, button: number, ctrl: boolean, alt: boolean, shift: boolean);
}
/** The wheel turned at a cell: `delta` is 1 for down, -1 for up. */
export declare class WheelEvent extends UIEvent {
    x: number;
    y: number;
    delta: number;
    ctrl: boolean;
    alt: boolean;
    shift: boolean;
    constructor(x: number, y: number, delta: number, ctrl: boolean, alt: boolean, shift: boolean);
}
/** An element took the focus ("focus") or lost it ("blur"). */
export declare class FocusEvent extends UIEvent {
    constructor(type: string);
}
/** What a view emits with `$emit(type, detail)`: a parent's `@type=` handler receives it, and it bubbles like every terminal event. */
export declare class CustomEvent extends UIEvent {
    detail: unknown;
    constructor(type: string, detail: unknown);
}
