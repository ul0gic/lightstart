import { HlState, Token } from "./state.js";
/** The names tokenizerFor knows. */
export declare const TOKENIZERS: string[];
/** The tokenizer named `name`; null for none. */
export declare const tokenizerFor: (name: string) => ((text: string, state: HlState) => Token[]) | null;
