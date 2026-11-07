export function configureTheme(options: Partial<typeof config>): void;
export function themeCSS(themeData: ThemeData | null, overrides?: ThemeData): string;
declare namespace config {
    let requestFont: (googleName: string) => void;
}
import type { ThemeData } from "./types.js";
import { HSL } from "./tokens.js";
import { parseColor } from "./tokens.js";
import { generateShades } from "./tokens.js";
import { generateThemeVariables } from "./tokens.js";
/**
 * A variant exists because the theme names it. `lc.button["quiet-background"]`
 * declares a `quiet` button, and this is the rule that binds it:
 * `lc-button[variant="quiet"]` pointing `--lc-button-background` at
 * `--lc-button-quiet-background`.
 *
 * Only the properties the theme actually declared are bound, so a variant the
 * component already styles keeps whatever it does not mention.
 *
 * @param {Record<string, string>} variables flattened theme variables
 * @param {string[]} [components]
 * @returns {string} CSS, one rule per declared variant
 */
export function generateVariantRules(variables: Record<string, string>, components?: string[]): string;
import { generateDarkTheme } from "./tokens.js";
/**
 * Write variables as one rule into a style element of their own.
 * @param {Record<string, string>} variables
 * @param {string} [styleId]
 * @param {string} [selector]
 */
export function injectThemeCSS(variables: Record<string, string>, styleId?: string, selector?: string): void;
/**
 * Apply a theme to the document: variables on `:root`, variant rules, the
 * dark side and fonts.
 * @param {ThemeData | null | undefined} themeData
 */
export function applyTheme(themeData: ThemeData | null | undefined): void;
/**
 * The dark side on `:root.dark`: derived from the light theme, with the
 * theme's own dark block laid over it.
 * @param {ThemeData} lightTheme
 * @param {ThemeData} [explicitDark]
 */
export function applyDarkTheme(lightTheme: ThemeData, explicitDark?: ThemeData): undefined;
/**
 * A theme's variables on a region instead of the document.
 * @param {string} scope any CSS selector
 * @param {ThemeData} themeData
 * @param {string} [styleId]
 */
export function applyScopedTheme(scope: string, themeData: ThemeData, styleId?: string): void;
/**
 * The dark palette on a region instead of the whole document, for a screen that
 * is dark whatever the reader chose: a media player, a viewer, a camera.
 *
 * Takes the same object as `applyTheme` and derives the dark side the same way,
 * so a region gets every token, not just the ones the theme spelled out. The
 * variables land on the scope element and descendants inherit from there, which
 * is nearer than `:root` and therefore wins without any specificity contest.
 *
 * @param {string} scope any CSS selector, e.g. `"my-player, my-viewer"`
 * @param {ThemeData | null | undefined} themeData the whole theme, `dark` block included
 * @param {string} [styleId]
 */
export function applyScopedDarkTheme(scope: string, themeData: ThemeData | null | undefined, styleId?: string): void;
/**
 * Drop a scoped palette, leaving the elements under `scope` on the document's
 * own theme again. Takes whatever identified the scope when it was applied: the
 * same selector, or the same explicit `styleId`.
 *
 * @param {string} scope
 * @param {string} [styleId]
 */
export function clearScopedTheme(scope: string, styleId?: string): void;
/**
 * Link a stylesheet into the head once.
 * @param {string} href
 * @param {boolean} [prepend] put it first, under every other stylesheet
 */
export function loadCSS(href: string, prepend?: boolean): void;
/**
 * Set a font variable (`--font-family-base` also sets the body face) and
 * request the family once.
 * @param {FontValue | undefined} fontValue
 * @param {string} [varName]
 */
export function loadFont(fontValue: FontValue | undefined, varName?: string): void;
/**
 * The Google Fonts stylesheet for one or more families, or null for none.
 * The weight range covers every `font.*` step a theme can name.
 *
 * @param {FontValue | FontValue[]} families
 * @returns {string | null}
 */
export function googleFontsUrl(families: FontValue | FontValue[]): string | null;
/**
 * The CSS `font-family` value a theme font becomes.
 * @param {FontValue} fontValue
 * @returns {string}
 */
export function cssFamilyFor(fontValue: FontValue): string;
import { rgbToHSL } from "./tokens.js";
import { hslToCSS } from "./tokens.js";
import { adjustLightness } from "./tokens.js";
import { mixWithColor } from "./tokens.js";
import type { FontValue } from "./types.js";
export { HSL, parseColor, generateShades, generateThemeVariables, generateDarkTheme, rgbToHSL, hslToCSS, adjustLightness, mixWithColor };
