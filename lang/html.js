/**
 * @file The HTML grammar, registered when its module loads.
 */
import { htmlToken } from "../html.js";
import { registerGrammar } from "./register.js";
import { streamLine } from "../line.js";
registerGrammar("html", (text, state, _peek) => streamLine(text, state, htmlToken));
