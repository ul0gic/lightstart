/**
 * @file The tokenizers' state between lines: one class for every language (natively a subclass would
 * lose its identity through a base-typed parameter), each mode using its own fields. HTML holds the
 * state of the JavaScript or CSS inside a <script> or <style> as `inner`; Markdown holds an open
 * fence's marker, language and inner state in `fence` and a recognized table's column count in
 * `table`.
 */
export declare class Frame {
    /** "tpl" inside a template literal's text, "expr" inside its ${…}. */
    kind: string;
    braces: number;
    constructor(kind: string);
}
/** An open Markdown fence: its marker character and run length, its info language and name, and the state of its code. */
export declare class FenceState {
    marker: string;
    len: number;
    lang: string;
    name: string;
    inner: HlState | null;
    quote: number;
    constructor(marker: string, len: number, lang: string, name: string, inner: HlState | null, quote: number);
    clone(): FenceState;
    equals(other: FenceState): boolean;
}
/** A recognized Markdown table, with the number of cells its header has. */
export declare class TableState {
    columns: number;
    constructor(columns: number);
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
    /** Markdown's open fence, null for none. */
    fence: FenceState | null;
    /** Markdown's recognized table, null for none. */
    table: TableState | null;
    /** Markdown's previous block kind ("blank", "paragraph" or "other"). */
    prev: string;
    clone(): HlState;
    /**
     * Whether `other` is the same state, field for field as `clone()` copies them: a line that ends in
     * the state it ended in before leaves every later line as it was, so re-tokenizing can stop there.
     */
    equals(other: HlState): boolean;
}
export declare class Token {
    from: number;
    to: number;
    type: string;
    mark: boolean;
    constructor(from: number, to: number, type: string, mark?: boolean);
}
/** Append a token, joining it to the last one when they touch, share a type and neither is a mark. */
export declare const pushToken: (tokens: Token[], from: number, to: number, type: string, mark?: boolean) => void;
