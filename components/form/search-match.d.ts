export function matchDocs(docs: SearchDoc[], query: string, limit: number): SearchDoc[];
export function groupDocs(matches: SearchDoc[], groups: string[]): {
    group: string;
    docs: SearchDoc[];
}[];
import type { SearchDoc } from "../types.js";
