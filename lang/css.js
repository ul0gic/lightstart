/**
 * @file The CSS grammar, registered when its module loads.
 */
import { cssToken } from "../css.js";
import { registerGrammar } from "./register.js";
import { streamLine } from "../line.js";
registerGrammar("css", (text, state, _peek) => streamLine(text, state, cssToken));
