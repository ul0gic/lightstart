/**
 * @file The inline phase: a line of Markdown to inline nodes, with CommonMark's delimiter-run
 * algorithm for `*` and `_`, code spans in backtick runs of any length, backslash escapes, links,
 * images and their references, footnote references, `<scheme:...>` and `<email>` autolinks before
 * inline HTML, GFM's bare-URL and email autolinks in text, wiki links, `~~del~~` and hard and soft
 * breaks. Character references stay as written; a URL is not decoded here.
 */
import { Inline } from "./nodes.js";
/** A link reference definition's target and title, collected document-wide. */
export declare class LinkDefinition {
    href: string;
    title: string;
    constructor(href: string, title: string);
}
/** A reference label as it is looked up: trimmed, its runs of whitespace one space, lowercased. */
export declare const normalizeLabel: (label: string) => string;
/** The footnote definitions in a document and the numbers its references have so far taken. */
export declare class FootnoteState {
    labels: Map<string, boolean>;
    definitions: Map<string, string[]>;
    numbers: Map<string, number>;
    order: string[];
    constructor(labels: Map<string, boolean>);
    /** Whether `label` names a footnote definition somewhere in the document. */
    has(label: string): boolean;
    /** The number a reference to `label` takes, assigned on its first reference, in document order. */
    number(label: string): number;
}
/** The plain text of `inlines`: a break becomes a space, a link its text, an image its alt. */
export declare const plainText: (inlines: Inline[]) => string;
/**
 * `text` as inline nodes; reference links resolve through `defs`, footnote references through
 * `notes`. `depth` bounds nested link text, and `bare` turns extended autolinks off inside a link.
 */
export declare const parseInline: (text: string, defs?: Map<string, LinkDefinition>, depth?: number, notes?: FootnoteState, bare?: boolean) => Inline[];
