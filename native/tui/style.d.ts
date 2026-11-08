/**
 * @lightstart/light/native/tui/style: an immutable text style. Colors are
 * numbers (-1 default, 0..255 indexed, 0x1000000 | rgb truecolor) and the
 * attributes are bits, so a style compares and copies cheaply.
 */
export declare const ATTR_BOLD = 1;
export declare const ATTR_DIM = 2;
export declare const ATTR_ITALIC = 4;
export declare const ATTR_UNDERLINE = 8;
export declare const ATTR_INVERSE = 16;
export declare const ATTR_STRIKE = 32;
export declare const COLOR_DEFAULT = -1;
export declare const TRUECOLOR_FLAG = 16777216;
export declare class Style {
    fg: number;
    bg: number;
    attrs: number;
    constructor(fg: number, bg: number, attrs: number);
    withFg(fg: number): Style;
    withBg(bg: number): Style;
    withAttr(bit: number, on: boolean): Style;
    has(bit: number): boolean;
    equals(o: Style): boolean;
    /**
     * The style a child shows under `parent`: unset colors fall through, attributes join.
     */
    inherit(parent: Style): Style;
    describe(): string;
}
export declare const DEFAULT_STYLE: Style;
/**
 * A readable name for a color number, for dumps and tests.
 */
export declare const colorName: (c: number) => string;
