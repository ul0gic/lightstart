import type { ParsedPart, PartSpec } from "./types.js";
/**
 * The text with its character references decoded: the named ones a
 * template is likely to carry, and every numeric one.
 */
export declare const decodeEntities: (s: string) => string;
export declare class TplNode {
}
export declare class TplText extends TplNode {
    data: string;
    constructor(data: string);
}
export declare class TplComment extends TplNode {
    data: string;
    constructor(data: string);
}
export declare class TplElement extends TplNode {
    tag: string;
    attrs: Map<string, string>;
    children: TplNode[];
    marked: boolean;
    constructor(tag: string);
}
/**
 * The template tree of `markup`: the top-level nodes, elements holding
 * their attributes (minus the `data-$$` marker, kept as `marked`), their
 * children and nothing else.
 * @param kind HTML_KIND or SVG_KIND
 */
export declare const tokenize: (markup: string, kind: number) => TplNode[];
/**
 * The part specs of a template tree, each with the index of the node it
 * binds to: elements and comments counted in document order, the way a
 * browser's TreeWalker counts them, so a clone finds its targets by the
 * same walk.
 */
export declare const indexParts: (tree: TplNode[], parts: ParsedPart[]) => PartSpec[];
