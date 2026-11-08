/**
 * @lightstart/light/native/tui/editor: multi-line editing for an input node,
 * grapheme-aware: caret movement (by grapheme, and by word with Alt or Ctrl
 * and ←/→, or Alt+b and Alt+f), insertion, deletion (Ctrl+D forward), the
 * kill keys, paste, and submit. Every edit dispatches a change event through the
 * tree; Enter dispatches submit with the content, cleared first. The operations
 * are exported, so an app can bind its own keys to them; `editorHandleKey` is
 * the default table.
 */
import { KeyEvent } from "./events.js";
import { TInput } from "./node.js";
/**
 * Insert text at the caret; newlines split the line.
 */
export declare const insertText: (input: TInput, text: string) => void;
export declare const setValue: (input: TInput, text: string) => void;
export declare const clearInput: (input: TInput) => void;
/** Delete the grapheme before the caret; at a line's start, join the line before. */
export declare const backspace: (input: TInput) => void;
/** Delete the grapheme after the caret; at a line's end, join the next line. */
export declare const del: (input: TInput) => void;
export declare const moveLeft: (input: TInput) => void;
export declare const moveRight: (input: TInput) => void;
/** To the start of the word before the caret; at a line's start, to the end of the line before. */
export declare const wordLeft: (input: TInput) => void;
/** To the end of the word after the caret; at a line's end, to the start of the line after. */
export declare const wordRight: (input: TInput) => void;
/** Move the caret `delta` lines; false at the first or last line. */
export declare const moveRow: (input: TInput, delta: number) => boolean;
/** The caret to the line's start. */
export declare const lineStart: (input: TInput) => void;
/** The caret to the line's end. */
export declare const lineEnd: (input: TInput) => void;
/** A new line at the caret. */
export declare const newline: (input: TInput) => void;
/** Kill to the line's start; answers what was killed. */
export declare const killToStart: (input: TInput) => string;
/** Kill to the end of the line; at its end, join the next line (as emacs and bash do). Answers what was killed ("" for a join). */
export declare const killToEnd: (input: TInput) => string;
/** Delete the word before the caret (spaces separate words); at a line's start, a backspace. Answers what was deleted. */
export declare const deleteWord: (input: TInput) => string;
/** Submit the content: the input cleared, then a submit event with it. */
export declare const submit: (input: TInput) => void;
/**
 * Handle one key; answers whether the editor consumed it.
 */
export declare const editorHandleKey: (input: TInput, e: KeyEvent) => boolean;
