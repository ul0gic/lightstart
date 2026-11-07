/**
 * @param {{
 *   projectDir: string,
 *   maps: () => ComponentMap[],
 *   views: () => View[],
 *   listFiles: (absDir: string) => string[],
 *   readFile: (abs: string) => string | null,
 *   exists: (abs: string) => boolean,
 * }} deps
 * @returns {ComponentIndex & { clear(): void }}
 */
export function createComponentIndex({ projectDir, maps, views, listFiles, readFile, exists }: {
    projectDir: string;
    maps: () => ComponentMap[];
    views: () => View[];
    listFiles: (absDir: string) => string[];
    readFile: (abs: string) => string | null;
    exists: (abs: string) => boolean;
}): ComponentIndex & {
    clear(): void;
};
export type Entry = {
    owner: string | null;
    abs?: string;
    view?: View;
};
import type { ComponentMap } from "./types.js";
import type { View } from "./types.js";
import type { ComponentIndex } from "./types.js";
