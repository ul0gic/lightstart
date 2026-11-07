/**
 * @bootstrapp/light/native/tui/tags: the tags a terminal template may use. The
 * four node kinds have their own names (box, text, span, input) and the
 * HTML names map onto them, with the style the HTML name implies, so a
 * template reads like HTML: `div`, `section`, `ul` are boxes; `p`, `h1`,
 * `li`, `pre` are text; `b`, `em`, `code`, `a` are spans; `textarea` is an
 * input. A tag the app `define`d makes its view's box; any other tag
 * outside the table is a box. `class`, `id` and `style` are accepted and
 * kept inert.
 */
import { TElement } from "./node.js";
/**
 * A tag the app defined: the function making its element, a view's box. A
 * class, since a Map's values are class instances natively, never bare
 * functions.
 */
export declare class TagDefinition {
    tag: string;
    makeElement: () => TElement;
    constructor(tag: string, makeElement: () => TElement);
}
/**
 * Register a definition. The tag is lowercase with a hyphen, as a custom
 * element's name is, and defined once.
 */
export declare const registerTag: (def: TagDefinition) => void;
export declare const isDefinedTag: (tag: string) => boolean;
export declare const EVENT_NAMES: string[];
/**
 * The node kind a tag creates.
 */
export declare const kindOf: (tag: string) => "text" | "input" | "box" | "span";
export declare const isKnownTag: (tag: string) => boolean;
/**
 * Whether an element of `tag` has a prop or attribute named `name`.
 */
export declare const isKnownProp: (tag: string, name: string) => boolean;
/**
 * An element for `tag`: a defined tag's view box, else an element styled as
 * the HTML name implies.
 */
export declare const createElement: (tag: string) => TElement;
