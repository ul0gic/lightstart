import { KeyEvent, MouseEvent, WheelEvent } from "./events.js";
import { InputDecoder } from "./input.js";
import { TElement, TRoot } from "./node.js";
import { Screen } from "./screen.js";
import { Terminal } from "./terminal.js";
export declare class Renderer {
    term: Terminal;
    root: TRoot;
    front: Screen;
    back: Screen;
    focus: TElement | null;
    autofocusPending: boolean;
    autofocusVersion: number;
    pressed: TElement | null;
    decoder: InputDecoder;
    cursorShown: boolean;
    stopped: boolean;
    frameCount: number;
    lastFrameMs: number;
    lastOutBytes: number;
    onKey: ((e: KeyEvent) => boolean) | null;
    constructor(term: Terminal, root: TRoot);
    start(): void;
    stop(): void;
    resize(): void;
    autofocus(): void;
    renderFrame(): string;
    frame(): void;
    screenText(): string;
    /**
     * Give `el` the focus: the one that had it gets a blur event, the new one
     * a focus event, and the states their classes depend on follow. Null
     * clears it, as a frame does for a focused element that left the tree.
     */
    setFocus(el: TElement | null): void;
    /**
     * Move the focus one step along the focusable elements, wrapping around.
     * @param delta 1 forward, -1 back
     */
    moveFocus(delta: number): void;
    dispatchKey(e: KeyEvent): void;
    dispatchMouse(e: MouseEvent): void;
    /** Whether `el` is still in the tree this renderer draws. */
    private attached;
    dispatchWheel(e: WheelEvent): void;
    /**
     * Dispatch an event from an element, bubbling up, and request a frame.
     * @param e a UIEvent
     */
    dispatchFrom(el: TElement, e: unknown): void;
}
