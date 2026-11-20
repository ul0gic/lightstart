/**
 * @file The JavaScript grammar, registered when its module loads.
 */
import { jsToken } from "../javascript.js";
import { registerGrammar } from "./register.js";
import { streamLine } from "../line.js";
registerGrammar("javascript", (text, state, _peek) => streamLine(text, state, (stream, current) => jsToken(stream, current, false)));
