export function isColorValue(value: unknown): boolean;
export function themeColorVariables(theme?: Record<string, Record<string, unknown>>): Record<string, string>;
export function themeFontSizes(text: Record<string, unknown> | undefined): Record<string, string>;
/** @type {ColorScale} */
export const FRAMEWORK_COLORS: ColorScale;
/** @type {Theme} */
export const DEFAULT_THEME: Theme;
export function buildTheme(projectTheme?: Record<string, Record<string, unknown>>, options?: {
    palette?: ColorScale | null;
}): {
    screens: {
        [x: string]: string | undefined;
    };
    colors: {
        [x: string]: string | import("./types.js").Shades | undefined;
    };
    spacing: {
        [x: string]: string | undefined;
    };
    borderRadius: {
        [x: string]: string | undefined;
    };
    boxShadow: {
        [x: string]: string | undefined;
    };
    lineHeight: {
        [x: string]: string | undefined;
    };
    fontSize: {
        [x: string]: string | string[] | undefined;
    };
    fontFamily: {
        [x: string]: string | undefined;
    };
    textColor: ColorScale;
    backgroundColor: ColorScale;
    borderColor: ColorScale;
    fontWeight: import("./types.js").Scale;
    dropShadow: import("./types.js").Scale;
    letterSpacing: import("./types.js").Scale;
    blur: import("./types.js").Scale;
    zIndex: import("./types.js").Scale;
    maxWidth: import("./types.js").Scale;
    transitionTimingFunction: import("./types.js").Scale;
};
import type { ColorScale } from "./types.js";
import type { Theme } from "./types.js";
