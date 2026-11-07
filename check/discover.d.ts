export function listRuleFiles(dir: string): string[];
export function ruleSources(owner: string, dir: string): RuleSource[];
export function ownRuleSources(): RuleSource[];
export function projectRuleSources(projectDir: string, pkg: PackageJson | null): RuleSource[];
export function loadRuleFile(owner: string, file: string): Promise<Loaded>;
export function loadRuleFileSync(owner: string, file: string): Loaded;
export function loadRules<M extends ProjectModel = ProjectModel>(sources: RuleSource[]): Promise<{
    rules: RuleEntry<M>[];
    warnings: string[];
}>;
export function loadRulesSync<M extends ProjectModel = ProjectModel>(sources: RuleSource[]): {
    rules: RuleEntry<M>[];
    warnings: string[];
};
export type Loaded = {
    entry: RuleEntry;
} | {
    warning: string;
};
import type { RuleSource } from "./types.js";
import type { PackageJson } from "./types.js";
import type { ProjectModel } from "./types.js";
import type { RuleEntry } from "./types.js";
