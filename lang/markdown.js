/**
 * @file The Markdown grammar, registered when its module loads, with the
 * structure reader a synchronous caller can use once it has.
 */
import { fencedLine } from "../line.js";
import { markdownLine } from "../markdown.js";
import { registerGrammar } from "./register.js";
import { setMarkdownStructure } from "../registry.js";
const structure = (text, state, peek) => markdownLine(text, state, fencedLine, peek);
registerGrammar("markdown", (text, state, peek) => structure(text, state, peek).tokens);
setMarkdownStructure(structure);
