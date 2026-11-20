/**
 * @file Register one built-in grammar from its entry and its line tokenizer,
 * the same way for every language module.
 */
import { grammarEntry } from "../grammar.js";
import { addLanguage, Language } from "../registry.js";
/** Register grammar `id` with `tokenize`; an entry with no matching grammar is ignored. */
export const registerGrammar = (id, tokenize) => {
    const entry = grammarEntry(id);
    if (entry === null)
        return;
    const language = new Language(entry.id, entry.extensions, entry.fences, tokenize);
    language.lookAhead = entry.lookAhead;
    language.indentAfter = entry.indentAfter;
    addLanguage(language);
};
