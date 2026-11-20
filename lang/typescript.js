/**
 * @file The TypeScript grammar, JavaScript's with its own keywords, registered when its module loads.
 */
import { jsToken } from "../javascript.js";
import { registerGrammar } from "./register.js";
import { streamLine } from "../line.js";
registerGrammar("typescript", (text, state, _peek) => streamLine(text, state, (stream, current) => jsToken(stream, current, true)));
