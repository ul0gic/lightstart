/**
 * @lightstart/light/native/tui/scrollbar: the scrollbar a `LineView` draws in its
 * last cell: where the thumb sits for a scroll position, and the scroll
 * position a place of the thumb stands for. Measured in half rows, drawn
 * with box drawing's half-heavy lines (`╽` `╿`), so the thumb moves half a
 * row at a time.
 */
/** The thumb over a track, in half rows: where it starts and how long it is (0 when every line fits). */
export declare class Thumb {
    start: number;
    length: number;
}
/** The thumb for `count` lines shown from line `top` in `rows` rows. */
export declare const thumbOf: (rows: number, count: number, top: number) => Thumb;
/** The first line shown when the thumb starts at half row `start`. */
export declare const topAt: (rows: number, count: number, start: number) => number;
/** Row `row`'s cell of the bar: the track, the thumb, or the thumb's end in one half. */
export declare const barCell: (t: Thumb, row: number) => string;
