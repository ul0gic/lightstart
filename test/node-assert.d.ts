/** @param {unknown} value @param {string} [message] */
export function ok(value: unknown, message?: string): void;
/** @param {unknown} actual @param {unknown} expected @param {string} [message] */
export function equal(actual: unknown, expected: unknown, message?: string): void;
/** @param {unknown} actual @param {unknown} expected @param {string} [message] */
export function notEqual(actual: unknown, expected: unknown, message?: string): void;
/** @param {unknown} actual @param {unknown} expected @param {string} [message] */
export function deepEqual(actual: unknown, expected: unknown, message?: string): void;
/** @param {unknown} actual @param {unknown} expected @param {string} [message] */
export function notDeepEqual(actual: unknown, expected: unknown, message?: string): void;
/** @param {unknown} actual @param {unknown} expected @param {string} [message] */
export function strictEqual(actual: unknown, expected: unknown, message?: string): void;
/** @param {unknown} actual @param {unknown} expected @param {string} [message] */
export function notStrictEqual(actual: unknown, expected: unknown, message?: string): void;
/** @param {unknown} actual @param {unknown} expected @param {string} [message] */
export function deepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
/** @param {unknown} actual @param {unknown} expected @param {string} [message] */
export function notDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
/** @param {unknown} actual @param {unknown} expected @param {string} [message] */
export function partialDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
/** @param {string} string @param {RegExp} regexp @param {string} [message] */
export function match(string: string, regexp: RegExp, message?: string): void;
/** @param {string} string @param {RegExp} regexp @param {string} [message] */
export function doesNotMatch(string: string, regexp: RegExp, message?: string): void;
/** @param {() => unknown} fn @param {ErrorMatcher} [expected] @param {string} [message] */
export function throws(fn: () => unknown, expected?: ErrorMatcher, message?: string): void;
/** @param {() => unknown} fn @param {string} [message] */
export function doesNotThrow(fn: () => unknown, message?: string): void;
/** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {ErrorMatcher} [expected] @param {string} [message] */
export function rejects(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), expected?: ErrorMatcher, message?: string): Promise<void>;
/** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {string} [message] */
export function doesNotReject(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), message?: string): Promise<void>;
/** @param {unknown} value */
export function ifError(value: unknown): void;
/** @param {string | Error} [message] */
export function failAssertion(message?: string | Error): never;
export const strict: ((value: unknown, message?: string) => void) & {
    ok: (value: unknown, message?: string) => void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    equal(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    notEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    deepEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    notDeepEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    strictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    notStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    deepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    notDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    partialDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {string} string @param {RegExp} regexp @param {string} [message] */
    match(string: string, regexp: RegExp, message?: string): void;
    /** @param {string} string @param {RegExp} regexp @param {string} [message] */
    doesNotMatch(string: string, regexp: RegExp, message?: string): void;
    /** @param {() => unknown} fn @param {ErrorMatcher} [expected] @param {string} [message] */
    throws(fn: () => unknown, expected?: ErrorMatcher, message?: string): void;
    /** @param {() => unknown} fn @param {string} [message] */
    doesNotThrow(fn: () => unknown, message?: string): void;
    /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {ErrorMatcher} [expected] @param {string} [message] */
    rejects(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), expected?: ErrorMatcher, message?: string): Promise<void>;
    /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {string} [message] */
    doesNotReject(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), message?: string): Promise<void>;
    /** @param {unknown} value */
    ifError(value: unknown): void;
    /** @param {string | Error} [message] */
    fail(message?: string | Error): never;
    AssertionError: typeof AssertionError;
} & {
    Assert: typeof Assert;
    strict: ((value: unknown, message?: string) => void) & {
        ok: (value: unknown, message?: string) => void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        equal(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        notEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        deepEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        notDeepEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        strictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        notStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        deepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        notDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        partialDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {string} string @param {RegExp} regexp @param {string} [message] */
        match(string: string, regexp: RegExp, message?: string): void;
        /** @param {string} string @param {RegExp} regexp @param {string} [message] */
        doesNotMatch(string: string, regexp: RegExp, message?: string): void;
        /** @param {() => unknown} fn @param {ErrorMatcher} [expected] @param {string} [message] */
        throws(fn: () => unknown, expected?: ErrorMatcher, message?: string): void;
        /** @param {() => unknown} fn @param {string} [message] */
        doesNotThrow(fn: () => unknown, message?: string): void;
        /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {ErrorMatcher} [expected] @param {string} [message] */
        rejects(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), expected?: ErrorMatcher, message?: string): Promise<void>;
        /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {string} [message] */
        doesNotReject(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), message?: string): Promise<void>;
        /** @param {unknown} value */
        ifError(value: unknown): void;
        /** @param {string | Error} [message] */
        fail(message?: string | Error): never;
        AssertionError: typeof AssertionError;
    };
};
export default looseAssert;
import type { ErrorMatcher } from "./types.js";
export function Assert(): ((value: unknown, message?: string) => void) & {
    ok: (value: unknown, message?: string) => void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    equal(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    notEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    deepEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    notDeepEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    strictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    notStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    deepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    notDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    partialDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {string} string @param {RegExp} regexp @param {string} [message] */
    match(string: string, regexp: RegExp, message?: string): void;
    /** @param {string} string @param {RegExp} regexp @param {string} [message] */
    doesNotMatch(string: string, regexp: RegExp, message?: string): void;
    /** @param {() => unknown} fn @param {ErrorMatcher} [expected] @param {string} [message] */
    throws(fn: () => unknown, expected?: ErrorMatcher, message?: string): void;
    /** @param {() => unknown} fn @param {string} [message] */
    doesNotThrow(fn: () => unknown, message?: string): void;
    /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {ErrorMatcher} [expected] @param {string} [message] */
    rejects(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), expected?: ErrorMatcher, message?: string): Promise<void>;
    /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {string} [message] */
    doesNotReject(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), message?: string): Promise<void>;
    /** @param {unknown} value */
    ifError(value: unknown): void;
    /** @param {string | Error} [message] */
    fail(message?: string | Error): never;
    AssertionError: typeof AssertionError;
} & {
    Assert: typeof Assert;
    strict: ((value: unknown, message?: string) => void) & {
        ok: (value: unknown, message?: string) => void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        equal(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        notEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        deepEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        notDeepEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        strictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        notStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        deepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        notDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        partialDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {string} string @param {RegExp} regexp @param {string} [message] */
        match(string: string, regexp: RegExp, message?: string): void;
        /** @param {string} string @param {RegExp} regexp @param {string} [message] */
        doesNotMatch(string: string, regexp: RegExp, message?: string): void;
        /** @param {() => unknown} fn @param {ErrorMatcher} [expected] @param {string} [message] */
        throws(fn: () => unknown, expected?: ErrorMatcher, message?: string): void;
        /** @param {() => unknown} fn @param {string} [message] */
        doesNotThrow(fn: () => unknown, message?: string): void;
        /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {ErrorMatcher} [expected] @param {string} [message] */
        rejects(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), expected?: ErrorMatcher, message?: string): Promise<void>;
        /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {string} [message] */
        doesNotReject(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), message?: string): Promise<void>;
        /** @param {unknown} value */
        ifError(value: unknown): void;
        /** @param {string | Error} [message] */
        fail(message?: string | Error): never;
        AssertionError: typeof AssertionError;
    };
};
import { AssertionError } from "./assertion-error.js";
declare const looseAssert: ((value: unknown, message?: string) => void) & {
    ok: (value: unknown, message?: string) => void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    equal(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    notEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    deepEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    notDeepEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    strictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    notStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    deepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    notDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
    partialDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
    /** @param {string} string @param {RegExp} regexp @param {string} [message] */
    match(string: string, regexp: RegExp, message?: string): void;
    /** @param {string} string @param {RegExp} regexp @param {string} [message] */
    doesNotMatch(string: string, regexp: RegExp, message?: string): void;
    /** @param {() => unknown} fn @param {ErrorMatcher} [expected] @param {string} [message] */
    throws(fn: () => unknown, expected?: ErrorMatcher, message?: string): void;
    /** @param {() => unknown} fn @param {string} [message] */
    doesNotThrow(fn: () => unknown, message?: string): void;
    /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {ErrorMatcher} [expected] @param {string} [message] */
    rejects(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), expected?: ErrorMatcher, message?: string): Promise<void>;
    /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {string} [message] */
    doesNotReject(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), message?: string): Promise<void>;
    /** @param {unknown} value */
    ifError(value: unknown): void;
    /** @param {string | Error} [message] */
    fail(message?: string | Error): never;
    AssertionError: typeof AssertionError;
} & {
    Assert: typeof Assert;
    strict: ((value: unknown, message?: string) => void) & {
        ok: (value: unknown, message?: string) => void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        equal(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        notEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        deepEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        notDeepEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        strictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        notStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        deepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        notDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
        partialDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
        /** @param {string} string @param {RegExp} regexp @param {string} [message] */
        match(string: string, regexp: RegExp, message?: string): void;
        /** @param {string} string @param {RegExp} regexp @param {string} [message] */
        doesNotMatch(string: string, regexp: RegExp, message?: string): void;
        /** @param {() => unknown} fn @param {ErrorMatcher} [expected] @param {string} [message] */
        throws(fn: () => unknown, expected?: ErrorMatcher, message?: string): void;
        /** @param {() => unknown} fn @param {string} [message] */
        doesNotThrow(fn: () => unknown, message?: string): void;
        /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {ErrorMatcher} [expected] @param {string} [message] */
        rejects(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), expected?: ErrorMatcher, message?: string): Promise<void>;
        /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {string} [message] */
        doesNotReject(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), message?: string): Promise<void>;
        /** @param {unknown} value */
        ifError(value: unknown): void;
        /** @param {string | Error} [message] */
        fail(message?: string | Error): never;
        AssertionError: typeof AssertionError;
    } & {
        Assert: typeof Assert;
        strict: ((value: unknown, message?: string) => void) & {
            ok: (value: unknown, message?: string) => void;
            /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
            equal(actual: unknown, expected: unknown, message?: string): void;
            /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
            notEqual(actual: unknown, expected: unknown, message?: string): void;
            /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
            deepEqual(actual: unknown, expected: unknown, message?: string): void;
            /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
            notDeepEqual(actual: unknown, expected: unknown, message?: string): void;
            /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
            strictEqual(actual: unknown, expected: unknown, message?: string): void;
            /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
            notStrictEqual(actual: unknown, expected: unknown, message?: string): void;
            /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
            deepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
            /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
            notDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
            /** @param {unknown} actual @param {unknown} expected @param {string} [message] */
            partialDeepStrictEqual(actual: unknown, expected: unknown, message?: string): void;
            /** @param {string} string @param {RegExp} regexp @param {string} [message] */
            match(string: string, regexp: RegExp, message?: string): void;
            /** @param {string} string @param {RegExp} regexp @param {string} [message] */
            doesNotMatch(string: string, regexp: RegExp, message?: string): void;
            /** @param {() => unknown} fn @param {ErrorMatcher} [expected] @param {string} [message] */
            throws(fn: () => unknown, expected?: ErrorMatcher, message?: string): void;
            /** @param {() => unknown} fn @param {string} [message] */
            doesNotThrow(fn: () => unknown, message?: string): void;
            /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {ErrorMatcher} [expected] @param {string} [message] */
            rejects(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), expected?: ErrorMatcher, message?: string): Promise<void>;
            /** @param {Promise<unknown> | (() => Promise<unknown>)} promiseOrFn @param {string} [message] */
            doesNotReject(promiseOrFn: Promise<unknown> | (() => Promise<unknown>), message?: string): Promise<void>;
            /** @param {unknown} value */
            ifError(value: unknown): void;
            /** @param {string | Error} [message] */
            fail(message?: string | Error): never;
            AssertionError: typeof AssertionError;
        };
    };
};
export { failAssertion as fail, AssertionError };
