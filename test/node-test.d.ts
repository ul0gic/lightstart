export const test: ((nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => Promise<void>) & {
    skip: (nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => Promise<void>;
    todo: (nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => Promise<void>;
    only: (nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => Promise<void>;
};
export const it: ((nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => Promise<void>) & {
    skip: (nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => Promise<void>;
    todo: (nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => Promise<void>;
    only: (nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => Promise<void>;
};
export const describe: ((nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => void) & {
    skip: (nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => void;
    todo: (nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => void;
    only: (nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => void;
};
export const suite: ((nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => void) & {
    skip: (nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => void;
    todo: (nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => void;
    only: (nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown) => void;
};
/** @param {unknown} nameOrFn @param {unknown} [optionsOrFn] @param {unknown} [maybeFn] */
export function skip(nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown): Promise<void>;
/** @param {unknown} nameOrFn @param {unknown} [optionsOrFn] @param {unknown} [maybeFn] */
export function only(nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown): Promise<void>;
/** @param {unknown} nameOrFn @param {unknown} [optionsOrFn] @param {unknown} [maybeFn] */
export function todo(nameOrFn: unknown, optionsOrFn?: unknown, maybeFn?: unknown): Promise<void>;
export function before(fn: Hook["fn"], options?: Hook["options"]): void;
export function after(fn: Hook["fn"], options?: Hook["options"]): void;
export function beforeEach(fn: Hook["fn"], options?: Hook["options"]): void;
export function afterEach(fn: Hook["fn"], options?: Hook["options"]): void;
export { mock };
export const assert: ((value: unknown, message?: string) => void) & {
    ok: (value: unknown, message?: string) => void;
    equal(actual: unknown, expected: unknown, message?: string): void;
    notEqual(actual: unknown, expected: unknown, message?: string): void;
    deepEqual(actual: unknown, expected: unknown, message?: string): void;
    notDeepEqual(actual: unknown, expected: unknown, message?: string): void;
    strictEqual(actual: unknown, expected: unknown, message?: string): void;
    notStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    deepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    notDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    partialDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    match(string: string, regexp: RegExp, message?: string): void;
    doesNotMatch(string: string, regexp: RegExp, message?: string): void;
    throws(fn: () => unknown, expected?: import("./types.js").ErrorMatcher, message?: string): void;
    doesNotThrow(fn: () => unknown, message?: string): void;
    rejects(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), expected?: import("./types.js").ErrorMatcher, message?: string): Promise<void>;
    doesNotReject(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), message?: string): Promise<void>;
    ifError(value: unknown): void;
    fail(message?: string | Error): never;
    AssertionError: typeof import("./assertion-error.js").AssertionError;
} & {
    Assert: typeof import("./node-assert.js").Assert;
    strict: ((value: unknown, message?: string) => void) & {
        ok: (value: unknown, message?: string) => void;
        equal(actual: unknown, expected: unknown, message?: string): void;
        notEqual(actual: unknown, expected: unknown, message?: string): void;
        deepEqual(actual: unknown, expected: unknown, message?: string): void;
        notDeepEqual(actual: unknown, expected: unknown, message?: string): void;
        strictEqual(actual: unknown, expected: unknown, message?: string): void;
        notStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        deepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        notDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        partialDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        match(string: string, regexp: RegExp, message?: string): void;
        doesNotMatch(string: string, regexp: RegExp, message?: string): void;
        throws(fn: () => unknown, expected?: import("./types.js").ErrorMatcher, message?: string): void;
        doesNotThrow(fn: () => unknown, message?: string): void;
        rejects(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), expected?: import("./types.js").ErrorMatcher, message?: string): Promise<void>;
        doesNotReject(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), message?: string): Promise<void>;
        ifError(value: unknown): void;
        fail(message?: string | Error): never;
        AssertionError: typeof import("./assertion-error.js").AssertionError;
    };
};
export const run: () => never;
export namespace snapshot {
    let setResolveSnapshotPath: () => never;
    let setDefaultSnapshotSerializers: () => never;
}
export default test;
import type { Hook } from "./types.js";
import { mock } from "./mock.js";
