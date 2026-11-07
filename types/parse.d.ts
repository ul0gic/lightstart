export function isDescriptor(value: unknown): value is TypeDefinition;
/**
 * Coercion per type, from what an attribute or an input holds to the declared
 * type. A host adds its own types here (`parsers.money = ...`).
 * @type {Record<string, Parser>}
 */
export const parsers: Record<string, Parser>;
export function parse(value: unknown, prop?: TypeDefinition): unknown;
import type { TypeDefinition } from "./types.js";
import type { Parser } from "./types.js";
