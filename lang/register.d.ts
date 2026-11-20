import { HlState, Token } from "../state.js";
import type { Peek } from "../structure.js";
/** Register grammar `id` with `tokenize`; an entry with no matching grammar is ignored. */
export declare const registerGrammar: (id: string, tokenize: (text: string, state: HlState, peek: Peek) => Token[]) => void;
