export namespace FIXTURE_PKG {
    let name: string;
    namespace bootstrapp {
        let prefix: string;
        namespace components {
            let fx: string;
        }
    }
}
export function withManifest(fileMap: Record<string, string>, pkgJson?: PackageJson): {
    [x: string]: string;
} | {
    "package.json": string;
};
export function contextFromFiles(fileMap: Record<string, string>, { pkgJson, projectDir, host }?: FixtureOptions): ProjectContext;
export function skipReason<M extends ProjectModel>(rule: CheckRule<M>, ctx: ProjectContext<M>): string | null;
export function runRule<M extends ProjectModel>(rule: CheckRule<M>, ctx: ProjectContext<M>): Promise<FixtureFinding[]>;
export function appliesOn(rule: CheckRule, fileMap: Record<string, string>, opts?: FixtureOptions): string | null;
export function runRuleOn(rule: CheckRule, fileMap: Record<string, string>, opts?: FixtureOptions): Promise<FixtureFinding[]>;
export type FixtureOptions = {
    pkgJson?: PackageJson;
    projectDir?: string;
    host?: HostOptions;
};
export type FixtureFinding = {
    severity: "error" | "warn";
    file: string;
    line: number;
    col: number;
    message: string;
};
import type { PackageJson } from "./types.js";
import type { ProjectContext } from "./types.js";
import type { ProjectModel } from "./types.js";
import type { CheckRule } from "./types.js";
import type { HostOptions } from "./types.js";
