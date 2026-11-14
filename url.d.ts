/**
 * @file A URL is safe when a browser would not read a scheme other than `http`, `https` or
 * `mailto` in it. Character references are decoded first, as a browser decodes them, so
 * `java&#x09;script:` cannot hide a scheme.
 */
/**
 * Whether a href is relative or uses http, https or mailto. A colon after a path, query or
 * fragment delimiter is not a scheme.
 */
export declare const safeUrl: (href: string) => boolean;
/** Whether a href names another host (`https://host/…`, `//host/…`) rather than a path on this one. */
export declare const remoteUrl: (href: string) => boolean;
