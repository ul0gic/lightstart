/**
 * @file The nodes a Markdown document parses into: blocks (a heading, a paragraph, a fenced or
 * indented code block, a list and its items, a quote, a rule, a table, raw HTML and the trailing
 * footnotes) and inlines (text, its styles, links, images, wiki links, footnote references,
 * breaks and raw inline HTML). Every node is a class, so a renderer narrows one with
 * `instanceof`; none of them draws anything.
 */
/** The cap on containers (quotes and list levels) and on inline nesting. */
export declare const MAX_NESTING = 100;
/** A block: what stands on its own between blank lines. */
export declare abstract class Block {
    /** Whether a blank line separated this block from the one before it in its container. */
    blankBefore: boolean;
}
/** An inline: what runs inside a block's text. */
export declare abstract class Inline {
}
/** Plain text. */
export declare class Text extends Inline {
    text: string;
    constructor(text: string);
}
/** Strong emphasis, `**text**` or `__text__`. */
export declare class Strong extends Inline {
    children: Inline[];
    constructor(children: Inline[]);
}
/** Emphasis, `*text*` or `_text_`. */
export declare class Em extends Inline {
    children: Inline[];
    constructor(children: Inline[]);
}
/** Strikethrough, `~~text~~`. */
export declare class Del extends Inline {
    children: Inline[];
    constructor(children: Inline[]);
}
/** A code span, in backtick runs of any length. */
export declare class CodeSpan extends Inline {
    text: string;
    constructor(text: string);
}
/** A link: its target, an optional title and its text. */
export declare class Link extends Inline {
    href: string;
    title: string;
    children: Inline[];
    constructor(href: string, title: string, children: Inline[]);
}
/** An image: its source, an optional title and its alt text as plain text. */
export declare class Image extends Inline {
    href: string;
    title: string;
    alt: string;
    constructor(href: string, title: string, alt: string);
}
/** A line break that starts a new terminal line but stays in the same paragraph. */
export declare class SoftBreak extends Inline {
}
/** A break two trailing spaces or a trailing backslash asked for. */
export declare class HardBreak extends Inline {
}
/** A wiki link, `[[name]]` or `[[name|display]]`. */
export declare class WikiLink extends Inline {
    name: string;
    display: string;
    constructor(name: string, display: string);
}
/** Raw inline HTML, an open or close tag or a comment. */
export declare class InlineHtml extends Inline {
    text: string;
    constructor(text: string);
}
/** An ATX heading; `text` is its plain text. */
export declare class Heading extends Block {
    level: number;
    children: Inline[];
    text: string;
    constructor(level: number, children: Inline[], text: string);
}
/** A paragraph. */
export declare class Paragraph extends Block {
    children: Inline[];
    constructor(children: Inline[]);
}
/** A fenced code block: the full info string and the lines between the fences. */
export declare class Code extends Block {
    info: string;
    text: string;
    constructor(info: string, text: string);
}
/** A list item: its blocks and whether it is a task, checked or not. */
export declare class ListItem {
    blocks: Block[];
    task: boolean;
    checked: boolean;
    constructor(blocks: Block[], task: boolean, checked: boolean);
}
/** An ordered or unordered list; `start` is the first item's number and `loose` says a blank line separates its blocks. */
export declare class List extends Block {
    ordered: boolean;
    start: number;
    items: ListItem[];
    loose: boolean;
    constructor(ordered: boolean, start: number, items: ListItem[], loose?: boolean);
}
/** A quote, holding blocks of its own. */
export declare class Quote extends Block {
    blocks: Block[];
    constructor(blocks: Block[]);
}
/** A thematic break. */
export declare class Rule extends Block {
}
/** A raw HTML block, its lines joined with newlines. */
export declare class Html extends Block {
    text: string;
    constructor(text: string);
}
/** A reference to a footnote by its label, numbered in order of first reference. */
export declare class FootnoteRef extends Inline {
    label: string;
    number: number;
    constructor(label: string, number: number);
}
/** One footnote definition: its label, its number and the blocks its body parses into. */
export declare class FootnoteDefinition {
    label: string;
    number: number;
    blocks: Block[];
    constructor(label: string, number: number, blocks: Block[]);
}
/** The document's referenced footnotes, in reference order, as a trailing block. */
export declare class Footnotes extends Block {
    items: FootnoteDefinition[];
    constructor(items: FootnoteDefinition[]);
}
