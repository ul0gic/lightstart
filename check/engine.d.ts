/**
 * @template {ProjectModel} M
 * @param {RunOptions<M>} opts
 * @returns {Promise<CheckResult>}
 */
export function runRules<M extends ProjectModel>(opts: RunOptions<M>): Promise<CheckResult>;
/**
 * @template {ProjectModel} M
 * @param {RunOptions<M>} opts
 * @returns {CheckResult}
 */
export function runRulesSync<M extends ProjectModel>(opts: RunOptions<M>): CheckResult;
import type { ProjectModel } from "./types.js";
import type { RunOptions } from "./types.js";
import type { CheckResult } from "./types.js";
