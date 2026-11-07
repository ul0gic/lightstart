import type { ParseResult } from "./types.js";
/**
 * Parse the static quasis of an html``/svg`` template into markup with
 * binding markers plus an ordered part list. Child bindings become a
 * `<!--$--><!--/-->` comment pair; elements with bound attributes get a
 * `data-$$` marker attribute and their bound attributes are withheld from
 * the markup entirely (committed via parts at instantiation). A `<slot>`
 * is marked too and listed as a `slot` part, so the instance that clones
 * the template can hand it to its host for light-DOM projection.
 */
export declare const parseTemplate: (strings: ReadonlyArray<string>, kind: number) => ParseResult;
