/**
 * @lightstart/light/html/template: prepared templates and their instances.
 * A template is prepared once per strings identity by the installed host
 * (`host.prepare`), which keeps whatever it needs beside the part specs; an
 * instance is a host clone of it with one part per spec, in document order.
 */
import type { Part } from "./part.js";
import type { Prepared } from "./host.js";
import type { PartSpec } from "./types.js";
export declare class Template {
    prepared: Prepared;
    parts: PartSpec[];
    kind: number;
    constructor(strings: ReadonlyArray<string>, kind: number);
}
/**
 * Prepared-template cache, keyed on the TemplateStringsArray identity,
 * so template literals written once in a
 * render() are prepared once and diffed thereafter. `strings` stays
 * `unknown` up to here so a native build keeps that identity.
 */
export declare const getTemplate: (strings: unknown, kind: number) => Template;
export declare class TemplateInstance {
    template: Template;
    owner: object | undefined;
    parts: Part[];
    constructor(template: Template, owner: object | undefined);
    /** @returns the clone's root, to insert where the instance renders */
    clone(): unknown;
    commit(values: unknown[]): void;
    dispose(): void;
}
