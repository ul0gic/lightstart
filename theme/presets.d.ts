export default presets;
export function presetByName(name: string): ThemePreset | null;
export function loadPreset(name: string): Promise<Record<string, unknown> | null>;
/**
 * The theme presets light ships, in the order a picker should offer them. A
 * preset covers the whole token contract, so applying one is never a partial
 * restyle.
 */
/** @import { ThemePreset } from "./types.js" */
/** @type {ThemePreset[]} */
declare const presets: ThemePreset[];
import type { ThemePreset } from "./types.js";
