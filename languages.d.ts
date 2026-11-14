export declare class LanguageEntry {
    id: string;
    extensions: string[];
    fences: string[];
    constructor(id: string, extensions: string[], fences: string[]);
}
export declare const LANGUAGES: LanguageEntry[];
/** Register them, each with the core tokenizer of its id. */
export declare const registerLanguages: () => void;
