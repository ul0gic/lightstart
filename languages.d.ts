/**
 * @file The built-in languages, registered synchronously: this module imports
 * every grammar, so it is the package's all entry. A browser that loads a
 * language on demand uses `loadLanguage` instead.
 */
export { registerLanguages } from "./all.js";
export { GRAMMARS as LANGUAGES } from "./grammar.js";
