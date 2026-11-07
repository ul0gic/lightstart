export function projectRoot(dir: string): string | null;
export function openProject(root: string, dir?: string): {
    context: ProjectContext;
    sources: RuleSource[];
};
import type { ProjectContext } from "./types.js";
import type { RuleSource } from "./types.js";
