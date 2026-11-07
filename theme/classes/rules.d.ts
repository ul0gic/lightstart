/** One dynamic rule of the table: its class prefix, the function that compiles a match, and its place in the table once built. */
export class DynamicRule {
    /**
     * @param {string} prefix
     * @param {DynamicRuleFn} fn
     */
    constructor(prefix: string, fn: DynamicRuleFn);
    /** @type {string} */
    prefix: string;
    /** @type {DynamicRuleFn} */
    fn: DynamicRuleFn;
    /** @type {number} */
    order: number;
}
export function createRules(theme: import("./types.js").Theme): {
    match: (parsed: import("./types.js").ParsedClass) => MatchedRule | null;
};
import type { DynamicRuleFn } from "./types.js";
import type { MatchedRule } from "./types.js";
