/**
 * @file The tokenizers' state between lines: one class for every language (natively a subclass would
 * lose its identity through a base-typed parameter), each mode using its own fields. HTML holds the
 * state of the JavaScript or CSS inside a <script> or <style> as `inner`.
 */
export declare class Frame {
    /** "tpl" inside a template literal's text, "expr" inside its ${…}. */
    kind: string;
    braces: number;
    constructor(kind: string);
}
export declare class HlState {
    stack: Frame[];
    comment: boolean;
    /** The quote of a string continued on the next line, "" for none. */
    string: string;
    regexOk: boolean;
    decl: boolean;
    afterDot: boolean;
    objKey: boolean;
    depth: number;
    mode: string;
    url: boolean;
    hmode: number;
    quote: string;
    tagName: string;
    closing: boolean;
    nameNext: boolean;
    afterEq: boolean;
    attrName: string;
    /** A <script>'s type attribute; `hasScriptType` false when it has none. */
    scriptType: string;
    hasScriptType: boolean;
    rawTag: string;
    /** "javascript", "css", or "" for a <script> of another type (not colored). */
    rawLang: string;
    inner: HlState | null;
    clone(): HlState;
}
export declare class Token {
    from: number;
    to: number;
    type: string;
    constructor(from: number, to: number, type: string);
}
/** Append a token, joining it to the last one when they touch and share a type. */
export declare const pushToken: (tokens: Token[], from: number, to: number, type: string) => void;
