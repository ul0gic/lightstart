export function asPackageJson(value: unknown): PackageJson | null;
export function readPackageJson(dir: string): PackageJson | null;
export function toRel(root: string, abs: string): string;
export function walkFiles(dir: string, { extensions, recursive, skipTests, prune, keep }?: WalkOptions): string[];
import type { PackageJson } from "./types.js";
import type { WalkOptions } from "./types.js";
