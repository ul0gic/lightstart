import { Style } from "./style.js";
export declare class Screen {
    w: number;
    h: number;
    glyph: Uint32Array;
    fg: Int32Array;
    bg: Int32Array;
    attrs: Uint8Array;
    constructor(w: number, h: number);
    clear(): void;
    /**
     * Write one grapheme of `width` cells at (x, y); writes outside the grid are dropped.
     */
    put(x: number, y: number, g: string, width: number, style: Style): void;
    /**
     * Fill a rectangle with spaces in `style`, clipped to the grid.
     */
    fill(x: number, y: number, w: number, h: number, style: Style): void;
    /**
     * Set an attribute bit on every cell of a rectangle, clipped to the grid.
     */
    addAttr(x: number, y: number, w: number, h: number, bit: number): void;
    styleAt(i: number): Style;
    rowText(y: number, from?: number, to?: number): string;
    text(): string;
    copyFrom(o: Screen): void;
}
/**
 * The escape stream that updates a terminal showing `front` to show
 * `back`, wrapped in synchronized-output markers; empty when nothing
 * changed. `front` is updated to match.
 */
export declare const diffScreens: (front: Screen, back: Screen) => string;
