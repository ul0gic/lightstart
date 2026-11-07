export function perfConfig(ctx: ProjectModel): PerfConfig | null;
export namespace PERF_GATE {
    function when(ctx: ProjectModel): boolean;
}
export function allowlist(ctx: ProjectModel, ruleId: string): Record<string, string>;
export function inPrefixes(file: string, prefixes: string[]): boolean;
export function isTestFile(file: string): boolean;
export function isSource(file: string): boolean;
export function parse(ctx: ProjectModel, file: string): SourceFile;
export function siteAt(file: string, sf: SourceFile, node: Node, message: string): Site;
export function isAllowed(allowed: Record<string, string>, site: Site): boolean;
export function reportSites(ctx: CheckContext, ruleId: string, sites: Site[]): void;
export function filesIn(ctx: ProjectModel, prefixes: string[]): string[];
export type PerfConfig = {
    /**
     * folders and files the slow-code rules read
     */
    scope: string[];
    /**
     * the parts of `scope` that also compile natively
     */
    native: string[];
    /**
     * functions, as `file#Symbol`, whose allocations are reported
     */
    hot: string[];
};
export type Site = {
    file: string;
    offset: number;
    /**
     * the named code around the site
     */
    symbol: string;
    message: string;
};
import type { ProjectModel } from "./types.js";
import type { SourceFile } from "typescript";
import type { Node } from "typescript";
import type { CheckContext } from "./types.js";
