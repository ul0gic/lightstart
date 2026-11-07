export function createEngine(options?: EngineOptions): Engine;
export { PREFLIGHT } from "./preflight.js";
export { parseClass } from "./parse.js";
export { escapeSelector } from "./variants.js";
export { stringify } from "./stringify.js";
import type { EngineOptions } from "./types.js";
import type { Engine } from "./types.js";
export { buildTheme, themeColorVariables, isColorValue, DEFAULT_THEME, FRAMEWORK_COLORS } from "./scales.js";
