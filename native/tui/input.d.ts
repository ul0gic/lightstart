/**
 * @bootstrapp/light/native/tui/input: bytes from the terminal into key events.
 * CSI and SS3 sequences with modifiers, the kitty keyboard protocol's `u`
 * form, bracketed paste, SGR mouse reports, Alt as an ESC prefix, control
 * characters, and UTF-8 text split into graphemes.
 */
import { KeyEvent, MouseEvent, WheelEvent } from "./events.js";
/** An incremental UTF-8 decoder: a multi-byte sequence split across chunks completes with the next one. */
export declare class Utf8Decoder {
    pending: number[];
    constructor();
    /**
     * @returns the text the bytes so far complete
     */
    write(chunk: Uint8Array): string;
}
export declare class InputDecoder {
    deliver: (e: KeyEvent) => void;
    onMouse: ((e: MouseEvent) => void) | null;
    onWheel: ((e: WheelEvent) => void) | null;
    dec: Utf8Decoder;
    buf: string;
    pasting: boolean;
    pasteBuf: string;
    escArmed: boolean;
    escGeneration: number;
    escTimeoutMs: number;
    constructor(deliver: (e: KeyEvent) => void);
    push(chunk: Uint8Array): void;
    /**
     * Feed decoded text, for tests.
     */
    pushText(text: string): void;
    flushEscape(): void;
    armTimer(): void;
    cancelTimer(): void;
    drain(): void;
    emitControl(c: number, alt: boolean): void;
    /** @returns the characters one escape sequence at the start of the buffer took, 0 when incomplete */
    decodeEscape(): number;
    emitCsi(params: string, final: string): void;
    /**
     * An SGR mouse report: `CSI < b ; x ; y M` for a press, `m` for a release.
     * The low bits of `b` are the button, 4 shift, 8 alt, 16 ctrl, 32 motion,
     * 64 the wheel (64 up, 65 down).
     */
    emitMouse(params: string, pressed: boolean): void;
}
