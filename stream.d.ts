/**
 * @file A bounded cursor over one line, the surface a tokenizer reads through. Every regex
 * passed to `match` is sticky (`y`), so it is tried at the cursor and a long line stays linear.
 */
export declare class Stream {
    text: string;
    pos: number;
    start: number;
    end: number;
    constructor(text: string, pos: number, end: number);
    /** The character at the cursor, consumed; "" at the end. */
    next(): string;
    peek(): string;
    eat(ch: string): boolean;
    /** Consume one character that `re` (non-sticky, testing one character) accepts. */
    eatClass(re: RegExp): boolean;
    eatWhileClass(re: RegExp): boolean;
    eatSpace(): boolean;
    /** Whether `s` is at the cursor; consumed when `consume`. */
    take(s: string, consume: boolean): boolean;
    /** A sticky `re` matched at the cursor (consumed when `consume`), or null. */
    match(re: RegExp, consume: boolean): RegExpExecArray | null;
    skipToEnd(): void;
    eol(): boolean;
    current(): string;
    /** A stream over the same text from the cursor to `subEnd`. */
    sub(subEnd: number): Stream;
}
/** Read a quoted string to its closing quote, escapes included; false when the line ended first. */
export declare const readString: (stream: Stream, quote: string) => boolean;
