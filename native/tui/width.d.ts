/**
 * @lightstart/light/native/tui/width: grapheme segmentation and terminal cell
 * widths. Intl.Segmenter gives grapheme clusters; a cluster is as wide as
 * its first non-zero-width code point, forced to two cells by an emoji
 * presentation selector (U+FE0F). The wide table covers East Asian Wide
 * and Fullwidth and the emoji presentation ranges; it is small and
 * approximate by design.
 */
/**
 * The grapheme clusters of `s`, one character each for ASCII.
 */
export declare const graphemes: (s: string) => string[];
/** The code points two cells wide, as pairs of a range's first and last. */
export declare const WIDE: number[];
/** The code points no cells wide (combining marks, joiners), as pairs of a range's first and last. */
export declare const ZERO: number[];
/**
 * Cells one code point takes: 0 (combining, control, joiner), 1, or 2 (wide).
 */
export declare const codePointWidth: (cp: number) => 0 | 1 | 2;
/**
 * Cells one grapheme cluster takes.
 */
export declare const graphemeWidth: (g: string) => number;
/**
 * Cells a whole string takes.
 */
export declare const stringWidth: (s: string) => number;
