export declare class Terminal {
    cols: number;
    rows: number;
    entered: boolean;
    inputListeners: ((chunk: Uint8Array) => void)[];
    resizeListeners: (() => void)[];
    constructor();
    get isTTY(): boolean;
    readSize(): void;
    /**
     * Hear every chunk the terminal sends; a Buffer is a Uint8Array, and the
     * narrower type keeps a listener callable from a program compiled natively.
     */
    onInput(fn: (chunk: Uint8Array) => void): void;
    onResize(fn: () => void): void;
    write(s: string): void;
    /**
     * Name the terminal's window and tab `text` while the program runs; the
     * title the terminal had comes back when the program leaves.
     */
    title(text: string): void;
    enter(): void;
    leave(): void;
}
