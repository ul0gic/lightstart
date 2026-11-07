/**
 * @bootstrapp/light/view/definition.js: definition composition
 * The one merge primitive for definition-shaped citizens (components,
 * controllers, extensions): props, events and a controller's sync block union
 * (incoming wins), lifecycle hooks
 * chain (existing runs first, an async hook on either side is awaited),
 * everything else copies property descriptors
 * (NOT spread): definitions legitimately declare getters and spread would
 * invoke them at merge time with the wrong `this`. DOM-free on purpose: views,
 * controllers, and the extensions kernel all compose through it.
 */
/** @import { DefinitionFragment } from "./primitives.js" */
export const LIFECYCLE_HOOKS: string[];
export function isThenable(value: unknown): boolean;
export function isFrameworkKey(key: string): boolean;
export function assertDefinitionKeys(definition: object, label: string, definitionKeys: Iterable<string>): void;
export function mergeDefinitions(current: Record<string, unknown>, incoming: Record<string, unknown>, hooks?: readonly string[]): Record<string, unknown>;
export function composeDefinition<D extends {
    mixins?: readonly object[];
}>(definition: D, hooks?: readonly string[]): D;
