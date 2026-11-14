export { TYPESCRIPT_HINT };
export function checkTarget({ dir, root, rule, json, sources, extraSources, sourceWraps, wraps }: {
    dir: string;
    root?: string | null;
    rule?: string;
    json?: boolean;
    sources?: RuleSource[];
    extraSources?: RuleSource[];
    sourceWraps?: Array<(sources: RuleSource[]) => RuleSource[]>;
    wraps?: Array<(context: ProjectContext, info: CheckInfo) => ProjectContext>;
}): Promise<boolean>;
export function check(argv: string[], sources?: RuleSource[]): Promise<boolean>;
/**
 * The information a context wrapper receives about the pass it is wrapping.
 */
export type CheckInfo = {
    dir: string;
    root: string;
    rule?: string;
    json: boolean;
};
import { TYPESCRIPT_HINT } from "./parse/typescript-hint.js";
import type { RuleSource } from "./types.js";
import type { ProjectContext } from "./types.js";
