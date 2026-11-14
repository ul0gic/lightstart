/**
 * @file The languages the code column and the chat's code blocks color, as the languages plugin
 * registers them: each with the file extensions and the fence names it answers to, and a tokenizer
 * for one line (the state carried to the next; tokenizers.ts names the core's). With none
 * registered nothing is colored. The registry is the process's, so a plugin's languages are
 * removed by its id when it stops.
 */
import { HlState, Token } from "./state.js";
export class Language {
    id;
    /** Lower-case file extensions ("ts"). */
    extensions;
    /** Lower-case names a Markdown fence gives it ("typescript", "ts"). */
    fences;
    tokenizeText;
    /** The plugin that registered it ("" for none). */
    owner = "";
    constructor(id, extensions, fences, tokenizeText) {
        this.id = id;
        this.extensions = extensions;
        this.fences = fences;
        this.tokenizeText = tokenizeText;
    }
}
const languages = [];
/** Register `l`; a later one with the same id replaces the earlier. */
export const addLanguage = (l) => {
    for (let i = 0; i < languages.length; i++)
        if (languages[i].id === l.id) {
            languages[i] = l;
            return;
        }
    languages.push(l);
};
/** Forget the languages plugin `owner` registered. */
export const removeLanguages = (owner) => {
    for (let i = languages.length - 1; i >= 0; i--)
        if (languages[i].owner === owner)
            languages.splice(i, 1);
};
export const findLanguage = (id) => {
    for (const l of languages)
        if (l.id === id)
            return l;
    return null;
};
/** The language of a file by its extension, "" when none registered answers to it. */
export const languageForPath = (path) => {
    const name = path.slice(path.lastIndexOf("/") + 1);
    const dot = name.lastIndexOf(".");
    if (dot < 0)
        return "";
    const ext = name.slice(dot + 1).toLowerCase();
    for (const l of languages)
        if (l.extensions.includes(ext))
            return l.id;
    return "";
};
/** The language a Markdown code fence names (```ts), "" when none registered answers to it. */
export const languageForFence = (info) => {
    const word = info.trim().split(/\s+/)[0].toLowerCase();
    for (const l of languages)
        if (l.fences.includes(word))
            return l.id;
    return "";
};
