export { validateType } from "./validate.js";
export function createType(type: string, options?: TypeOptions | unknown): TypeDefinition<never>;
export function normalizeProperty(value: PropertyDeclaration): TypeDefinition;
export function normalizeProperties(block: Record<string, PropertyDeclaration>): Record<string, TypeDefinition>;
export function isReactive(prop: {
    reactive?: boolean;
} | undefined): boolean;
export function cloneDefault(prop: {
    defaultValue?: unknown;
} | undefined): unknown;
export default T;
import type { TypeOptions } from "./types.js";
import type { TypeDefinition } from "./types.js";
import type { PropertyDeclaration } from "./types.js";
/** @type {TypesAPI} */
declare const T: TypesAPI;
import type { TypesAPI } from "./types.js";
export { isDescriptor, parse, parsers } from "./parse.js";
