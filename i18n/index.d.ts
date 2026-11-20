/** What a translation library answers the engine. */
export interface Translation {
    /** The sentence for `key` in the current language, or undefined when there is none (the component keeps its own). */
    translate(key: string, params?: Record<string, unknown>): string | undefined;
    /** The language the reader is in: a tag such as `en` or `pt-BR`. */
    language(): string;
    /** The languages on offer, the current one among them. */
    languages(): string[];
    /** Change the language; the library calls its subscribers once it has. */
    setLanguage(language: string): void | Promise<unknown>;
    /** Called after every change of language; answers the unsubscribe. */
    subscribe(fn: () => void): () => void;
}
/**
 * Hand the engine a translation library: a plain object or a class instance
 * whose members live on its prototype. Missing members keep the plain
 * behaviour. Its changes of language draw the renders that read it again.
 */
export declare const configureTranslation: (provider: Partial<Translation>) => void;
/** The translation components read. */
export declare const translation: Translation;
