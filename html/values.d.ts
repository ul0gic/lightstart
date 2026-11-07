/**
 * @bootstrapp/light/html/values: the values a template can hold besides
 * text, nodes and lists. `html` and `svg` (in `tags.js`) answer a `TemplateResult`; `key`,
 * `element` and `unsafeHTML` wrap a value in a `Keyed`, `ElementSpec` or
 * `Unsafe`. They are classes so the parts engine recognises them with
 * `instanceof`, which a native build dispatches on.
 */
import type { ElementBindings, TemplateKind } from "./types.js";
/**
 * The result of an html`` or svg`` template: its strings, kind and values.
 * `strings` is the call site's `TemplateStringsArray`, held as `unknown`: the
 * engine caches prepared templates by its identity, and a native build keeps
 * that identity only while the value stays untyped.
 */
export declare class TemplateResult {
    strings: unknown;
    kind: TemplateKind;
    values: unknown[];
    constructor(strings: unknown, kind: TemplateKind, values: unknown[]);
}
/** A child value keyed for identity-based reconciliation, from `key(k, value)`. */
export declare class Keyed {
    k: unknown;
    v: unknown;
    constructor(k: unknown, v: unknown);
}
/** An element with a runtime tag name, from `element(tag, bindings, children)`. */
export declare class ElementSpec {
    tag: string;
    bindings: ElementBindings | undefined;
    children: unknown;
    constructor(tag: string, bindings: ElementBindings | undefined, children: unknown);
}
/** Raw markup to parse at commit time, from `unsafeHTML(value)`. */
export declare class Unsafe {
    s: string;
    constructor(s: string);
}
/**
 * Key a child value for identity-based reconciliation. A keyed array gets
 * move-based list diffing (reorders move DOM, never recreate it); a single
 * keyed value forces a fresh render when the key changes.
 */
export declare const key: (k: unknown, value: unknown) => Keyed;
/**
 * Render an element with a runtime tag name: the safe replacement for
 * lit's staticHTML/unsafeStatic. Binding keys mirror template syntax:
 * plain keys are attributes, `.prop` sets a property, `@click` an event,
 * `?disabled` a boolean attribute, and `ref` receives the element (and
 * later `null` on teardown).
 */
export declare const element: (tag: string, bindings?: ElementBindings, children?: unknown) => ElementSpec;
/**
 * Render a raw HTML string as parsed markup. The only way a string
 * reaches an HTML parser at runtime; everything else commits via
 * attributes and text nodes.
 */
export declare const unsafeHTML: (value: unknown) => Unsafe;
