export function parsePath(path: string): Array<string | number>;
export function pathKey(path: string): string;
export function getPath(source: unknown, path: string): unknown;
export function setPath<T extends Record<string, unknown>>(target: T, path: string, value: unknown): T;
export function deletePath<T extends Record<string, unknown>>(target: T, path: string): T;
