export function listRuleFiles(dir: string): string[];
export function ruleSources(owner: string, dir: string, own?: boolean): RuleSource[];
export function ownRuleSources(): RuleSource[];
export function projectRuleSources(projectDir: string, pkg: PackageJson | null): RuleSource[];
export function loadRuleFile(owner: string, file: string, own?: boolean): Promise<Loaded>;
export function loadRuleFileSync(owner: string, file: string, own?: boolean): Loaded;
export function loadRules<M extends ProjectModel = ProjectModel>(sources: RuleSource[]): Promise<{
    rules: RuleEntry<M>[];
    warnings: string[];
    failures: string[];
}>;
export function loadRulesSync<M extends ProjectModel = ProjectModel>(sources: RuleSource[]): {
    rules: RuleEntry<M>[];
    warnings: string[];
    failures: string[];
};
export type Loaded = {
    entry: RuleEntry;
} | {
    warning: string;
    own?: boolean;
};
import type { RuleSource } from "./types.js";
import type { PackageJson } from "./types.js";
import type { ProjectModel } from "./types.js";
import type { RuleEntry } from "./types.js";
