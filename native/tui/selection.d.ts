import { Line, LineSource, Run } from "./lines.js";
/** `line`'s runs with cells `from` to `to` (-1: the end) drawn inverse. */
export declare const selectRuns: (line: Line, from: number, to: number) => Run[];
/** The text of `line`'s cells `from` to `to` (-1: the end), its decoration left out. */
export declare const rowText: (line: Line, from: number, to: number) => string;
/** The text a copy of rows `from` (from cell `fromCell`) to `to` (before cell `toCell`, -1 the end) gives. */
export declare const copyRows: (source: LineSource, from: number, fromCell: number, to: number, toCell: number, width: number) => string;
/** The part of `text` in cells `from` to `to` (-1: the end). */
export declare const sliceCells: (text: string, from: number, to: number) => string;
