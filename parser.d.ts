/**
 * @file The block phase: text to blocks with a container stack of quotes and list items, paragraphs
 * that continue lazily across lines, GFM pipe tables, fences, indented code, rules, ATX and setext
 * headings, raw HTML blocks, link reference definitions and footnote definitions collected
 * document-wide. It then parses each block's text with the inline phase (`inline.ts`) and appends
 * the referenced footnotes as one trailing block.
 */
import { Block } from "./nodes.js";
/**
 * `text` as blocks, its link reference definitions resolved across the whole document. The
 * referenced footnotes come last, as one `Footnotes` block in reference order.
 */
export declare const parse: (text: string) => Block[];
