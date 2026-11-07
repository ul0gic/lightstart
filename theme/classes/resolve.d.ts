/**
 * @param {string} rest the token remainder after the rule prefix
 * @param {Scale} [themeSpacing] named spacing entries
 * @param {{keywords?: Record<string, string>, fractions?: boolean, arbitraryTypes?: string[]}} [options]
 */
export function resolveSpacing(rest: string, themeSpacing?: Scale, options?: {
    keywords?: Record<string, string>;
    fractions?: boolean;
    arbitraryTypes?: string[];
}): string | null;
/**
 * @param {string} rest
 * @param {{ keywords?: Record<string, string> }} [options]
 */
export function resolveInteger(rest: string, options?: {
    keywords?: Record<string, string>;
}): string | null;
export function looksLikeColor(value: string): boolean;
export function looksLikeColorShape(value: string): boolean;
export function looksLikeLength(value: string): boolean;
export function resolveLookup(rest: string, scale: ValueScale | undefined, arbitrary: ((value: string, type: string | null) => string | null) | null): string | string[] | null;
export function withAlpha(value: string, modifier: string | null | undefined): string;
export function resolveColor(stem: string, modifier: string | null, colors: ColorScale, extras?: ColorScale): string | null;
export function resolvePercentNumber(rest: string, options?: {
    max?: number;
}): string | null;
import type { Scale } from "./types.js";
import type { ValueScale } from "./types.js";
import type { ColorScale } from "./types.js";
