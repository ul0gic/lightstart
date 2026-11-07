export function checkRules<M extends ProjectModel>(open: CheckHost<M>, rootOf?: (dir: string) => string | null): Record<"check-errors" | "check-warnings", Rule.RuleModule>;
import type { ProjectModel } from "../check/types.js";
import type { CheckHost } from "./types.js";
import type { Rule } from "eslint";
