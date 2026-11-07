/**
 * @param {{ projectDir: string, fileMap?: Record<string, string> | null, pkg?: PackageJson | null, host?: HostOptions }} opts
 * @returns {ProjectContext}
 */
export function createContext({ projectDir, fileMap, pkg: givenPkg, host }: {
    projectDir: string;
    fileMap?: Record<string, string> | null;
    pkg?: PackageJson | null;
    host?: HostOptions;
}): ProjectContext;
/** @import { ClassAttr, Controller, HostOptions, PackageJson, ParsedComponent, ParsedTemplate, ProjectContext, View } from "./types.js" */
export const DEFAULT_IGNORED_DIRS: string[];
export const TEXT_EXTENSIONS: string[];
import type { PackageJson } from "./types.js";
import type { HostOptions } from "./types.js";
import type { ProjectContext } from "./types.js";
