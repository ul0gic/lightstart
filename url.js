/**
 * @file A URL is safe when a browser would not read a scheme other than `http`, `https` or
 * `mailto` in it. Character references are decoded first, as a browser decodes them, so
 * `java&#x09;script:` cannot hide a scheme.
 */
const NAMED_ENTITIES = new Map([
    ["colon", ":"],
    ["tab", "\t"],
    ["newline", "\n"],
    ["amp", "&"],
    ["lpar", "("],
    ["rpar", ")"],
]);
const codePoint = (digits, radix, fallback) => {
    const code = Number.parseInt(digits, radix);
    return Number.isSafeInteger(code) && code >= 0 && code <= 0x10ffff ? String.fromCodePoint(code) : fallback;
};
const decodeEntitiesOnce = (text) => text
    .replace(/&#x([0-9a-f]+);/gi, (entity, hex) => codePoint(hex, 16, entity))
    .replace(/&#([0-9]+);/g, (entity, decimal) => codePoint(decimal, 10, entity))
    .replace(/&([a-z][a-z0-9]+);/gi, (entity, name) => NAMED_ENTITIES.get(name.toLowerCase()) ?? entity);
const decodeEntities = (text) => {
    let decoded = text;
    for (let pass = 0; pass < 5; pass++) {
        const next = decodeEntitiesOnce(decoded);
        if (next === decoded)
            break;
        decoded = next;
    }
    return decoded;
};
/** A href as a browser reads it: references decoded, whitespace and control characters dropped. */
const normalized = (href) => decodeEntities(href).replace(/[\u0000-\u0020\u007f]/g, "").toLowerCase();
/**
 * Whether a href is relative or uses http, https or mailto. A colon after a path, query or
 * fragment delimiter is not a scheme.
 */
export const safeUrl = (href) => {
    const url = normalized(href);
    return !/^[a-z][a-z0-9+.-]*:/.test(url) || /^(https?|mailto):/.test(url);
};
/** Whether a href names another host (`https://host/…`, `//host/…`) rather than a path on this one. */
export const remoteUrl = (href) => /^(?:[a-z][a-z0-9+.-]*:)?\/\//.test(normalized(href));
