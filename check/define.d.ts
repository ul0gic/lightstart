export function defineRule<M extends ProjectModel = ProjectModel>(rule: CheckRule<M>): CheckRule<M>;
export function validateRuleShape(rule: unknown): string | null;
import type { ProjectModel } from "./types.js";
import type { CheckRule } from "./types.js";
