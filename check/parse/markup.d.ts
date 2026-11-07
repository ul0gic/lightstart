/**
 * Every text run of a template, depth-first, the ones outside any element
 * included.
 * @param {{ children: MarkupNode[] }} node
 * @returns {Generator<import("../types.js").MarkupText>}
 */
export function texts(node: {
    children: MarkupNode[];
}): Generator<import("../types.js").MarkupText>;
/**
 * Every element of a template, depth-first.
 * @param {{ children: MarkupNode[] }} node
 * @returns {Generator<MarkupElement>}
 */
export function elements(node: {
    children: MarkupNode[];
}): Generator<MarkupElement>;
export function parseMarkup(content: string, start: number): ParsedTemplate;
export function rawValue(attr: MarkupAttribute, source: string): string;
export function parseTemplates(content: string, start: number): ParsedTemplate[];
import type { MarkupNode } from "../types.js";
import type { MarkupElement } from "../types.js";
import type { ParsedTemplate } from "../types.js";
import type { MarkupAttribute } from "../types.js";
