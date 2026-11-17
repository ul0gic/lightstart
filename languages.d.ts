export declare class LanguageEntry {
    id: string;
    extensions: string[];
    fences: string[];
    lookAhead: number;
    indentAfter: (textBeforeCursor: string) => number;
    constructor(id: string, extensions: string[], fences: string[]);
    /**
     * Set how many lines ahead its tokens look and the indentation after a line, and answer the entry.
     * A call after the constructor rather than more arguments, so a reader of this file that takes the
     * constructor's three (widecode's languages plugin is generated that way) reads it as before.
     */
    traits(lookAhead: number, indentAfter: (textBeforeCursor: string) => number): LanguageEntry;
}
export declare const LANGUAGES: LanguageEntry[];
/** Register them, each with the core tokenizer of its id. */
export declare const registerLanguages: () => void;
