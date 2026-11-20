/** A built-in grammar's names and traits, without its tokenizer. */
export interface GrammarEntry {
    id: string;
    extensions: string[];
    fences: string[];
    lookAhead: number;
    indentAfter: (textBeforeCursor: string) => number;
}
/** The built-in grammars, by id, with every name and extension that asks for one. */
export declare const GRAMMARS: readonly GrammarEntry[];
/** The entry named `id`; null for a grammar the core does not have. */
export declare const grammarEntry: (id: string) => GrammarEntry | null;
/** The grammar id `name` asks for: an id, fence name or file extension, or a path's extension; "" for none. */
export declare const grammarFor: (name: string) => string;
/** Load the grammar `language` names, once; an unknown language resolves without one. */
export declare const loadLanguage: (language: string) => Promise<void>;
/** Whether the grammar `language` names is loaded and ready to tokenize synchronously. */
export declare const hasLanguage: (language: string) => boolean;
