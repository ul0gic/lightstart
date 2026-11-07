export function ruleApplies<M extends ProjectModel>(rule: CheckRule<M>, ctx: M): {
    reason: string;
    warning?: string;
} | null;
import type { ProjectModel } from "./types.js";
import type { CheckRule } from "./types.js";
