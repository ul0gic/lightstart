export function _watchUncaught(target: EventTarget): () => void;
export function reset(): void;
export function _state(): {
    root: SuiteNode;
    cursor: SuiteNode;
};
export function registerSuite(nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown): void;
export function registerTest(nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown): Promise<void>;
export function registerHook(kind: "before" | "after" | "beforeEach" | "afterEach", fn: Hook["fn"], options?: Hook["options"]): void;
export function attachAssert(assert: object): void;
export function run({ namePattern }?: {
    namePattern?: RegExp;
}): Promise<RunOutcome>;
import type { SuiteNode } from "./types.js";
import type { Hook } from "./types.js";
import type { RunOutcome } from "./types.js";
