/**
 * @lightstart/light/theme/tokens: the host-neutral half of the theme. The
 * color math that derives shades, readable "on" colors and a dark side, the
 * CSS variables a theme becomes, and a CSS color resolved to hex, with
 * nothing of a document in it, so a terminal reads the same tokens a page
 * does. `theme/index.js` applies them to a document; `theme/terminal.ts`
 * reads them for the terminal host.
 */
/** A theme: nested token groups (`color`, `spacing`, `font`, ...) whose leaves become `--group-key` variables, and an optional `dark` block of the same shape. */
export type ThemeData = {
    content?: Record<string, unknown>;
    font?: ThemeFont;
    link?: Record<string, unknown>;
    text?: Record<string, unknown>;
    canvas?: Record<string, unknown>;
    color?: Record<string, unknown>;
    spacing?: Record<string, unknown>;
    leading?: Record<string, unknown>;
    radius?: Record<string, unknown>;
    shadow?: Record<string, unknown>;
    border?: Record<string, unknown>;
    motion?: Record<string, unknown>;
    control?: Record<string, unknown>;
    lc?: Record<string, unknown>;
    dark?: ThemeData;
};
/** A font a theme names: a family string, or an object with the CSS family and the Google Fonts name to request (`google: false` requests none). */
export type FontValue = string | {
    family?: string;
    google?: string | false;
};
export interface ThemeFont {
    family?: FontValue;
    heading?: FontValue;
    [key: string]: unknown;
}
/** How one shade derives from a base color: a lightness step, or a mix with white or black. */
export interface ShadeOption {
    lightness?: number;
    mix?: string;
    amount?: number;
}
/** A color as hue (0 to 360), saturation and lightness (0 to 100). */
export declare class HSL {
    h: number;
    s: number;
    l: number;
    constructor(h: number, s: number, l: number);
}
/**
 * @param r 0-1
 * @param g 0-1
 * @param b 0-1
 */
export declare const rgbToHSL: (r: number, g: number, b: number) => HSL;
export declare const hslToCSS: (hsl: HSL) => string;
export declare const adjustLightness: (hsl: HSL, delta: number) => HSL;
/**
 * @param mixWith `"white"` or `"black"`
 * @param amount 0-1
 */
export declare const mixWithColor: (hsl: HSL, mixWith: string, amount: number) => HSL;
/** A hex, `rgb()` or `hsl()` color as HSL, or null for anything else. */
export declare const parseColor: (str: unknown) => HSL | null;
export declare const generateShades: (baseHSL: HSL, config?: Record<string, ShadeOption>) => Record<string, string>;
/**
 * The dark side of a theme: neutrals invert, colors keep their hue and land in
 * a readable lightness band, shadows are recolored.
 */
export declare const generateDarkTheme: (themeObj: ThemeData) => ThemeData;
/** Whether a theme is dark already, by its canvas or surface. */
export declare const isDarkBase: (themeObj: ThemeData) => boolean;
export declare const deepMerge: (base: Record<string, unknown>, override: unknown) => Record<string, unknown>;
/**
 * Black or white, whichever can be read on the given colour. A `var()`
 * reference or a translucent fill cannot be judged from here and gets neither.
 */
export declare const readableOn: (value: string) => string | null;
export declare const SHADE_SUFFIXES: string[];
/**
 * The CSS variables a theme becomes: `{ color: { primary } }` gives
 * `--color-primary`, plus derived shades and readable `on-` colors for every
 * opaque palette color the theme does not spell out.
 */
export declare const generateThemeVariables: (themeObj: Record<string, unknown>, prefix?: string) => Record<string, string>;
/** 0-1 channels for an HSL color. */
export declare const hslToRGB: (hsl: HSL) => number[];
/** `#rrggbb` for 0-1 channels. */
export declare const rgbToHex: (r: number, g: number, b: number) => string;
/**
 * A CSS color as `#rrggbb`, its alpha dropped: hex of 3, 4, 6 or 8 digits,
 * `rgb()`/`rgba()`, `hsl()`/`hsla()`. Null for anything else (a keyword, a
 * `var()`, a gradient).
 */
export declare const cssColorToHex: (value: string) => string | null;
/** The theme without its `dark` block. */
export declare const lightSideOf: (theme: ThemeData) => ThemeData;
/**
 * The dark side a light theme and its explicit `dark` block give: the light
 * side itself for a theme that is dark already and spells no dark block out,
 * else the derived dark theme with the explicit block laid over it.
 */
export declare const darkFrom: (light: ThemeData, explicitDark: ThemeData | undefined) => ThemeData;
/** The dark side of a whole theme, `dark` block included. */
export declare const darkSideOf: (theme: ThemeData) => ThemeData;
/** The variables of one side of a theme: `"dark"` for the dark side, anything else for the light one. */
export declare const variablesFor: (theme: ThemeData, scheme: string) => Record<string, string>;
