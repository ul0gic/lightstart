/**
 * @lightstart/light/theme/terminal: the utility classes on the terminal
 * host. `TerminalClasses` is a `ClassStyler` over the classes engine: a
 * class compiles as it does for a page, and the declarations a terminal can
 * show become tdom props, colors resolved through the theme's tokens on one
 * side of the theme (`scheme`), lengths rounded to cells. `dark:` applies on
 * the dark scheme, `focus:` and `focus-within:` as the element's states say;
 * what a terminal cannot show (sizes, radii, margins, every other variant)
 * is ignored and listed in `ignored`, the dev aid.
 */
import { ClassProp, ClassStyler } from "../native/tui/classes.js";
import type { MatchedRule, ParsedClass } from "./classes/types.js";
import type { ThemeData } from "./tokens.js";
export declare class TerminalClasses extends ClassStyler {
    rules: {
        match: (parsed: ParsedClass) => MatchedRule | null;
    };
    vars: Map<string, string>;
    dark: boolean;
    memo: Map<string, ClassProp[]>;
    /** The classes that compiled to nothing a terminal shows, or to nothing at all. */
    ignored: Set<string>;
    /**
     * @param theme the theme object, `dark` block included
     * @param scheme `"light"` or `"dark"`: the side whose tokens the colors resolve through
     */
    constructor(theme: ThemeData, scheme: string);
    propsFor(classes: string): ClassProp[];
    /** A declaration's value with its `var()` references followed through the tokens and a `color-mix` alpha dropped. */
    resolveValue(value: string, depth: number): string;
    /** A color value as the terminal takes it: `#rrggbb`, `"default"` for no color, or null when it is not a color. */
    colorOf(value: string): string | null;
    /** A length in cells: half a rem or eight pixels per cell, at least one when positive; null for a percentage, a keyword or a calc. */
    cellsOf(value: string): number | null;
    /** The tdom props one CSS declaration means on the terminal, in the states `state` names; none for what it cannot show. */
    mapDecl(name: string, raw: string, state: number): ClassProp[];
}
