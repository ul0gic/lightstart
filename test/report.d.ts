export function toWireFormat({ results, counts, durationMs }: {
    results: TestResult[];
    counts: RunCounts;
    durationMs: number;
}, meta?: {
    file?: string;
    shimLoaded?: boolean;
    loadError?: unknown;
}): WireRun;
export function loadFailure(file: string, error: unknown, { shimLoaded }?: {
    shimLoaded?: boolean;
}): WireRun;
import type { TestResult } from "./types.js";
import type { RunCounts } from "./types.js";
import type { WireRun } from "./types.js";
