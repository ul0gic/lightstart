/**
 * The number for a color written as "default", a basic name, "bright" plus
 * a name, "gray", "#rrggbb" or an index "0".."255". Throws on anything else.
 */
export declare const parseColor: (input: string) => number;
/** What a `#rrggbb` color is emitted as: 24-bit SGR, or the nearest index of the 256-color palette. */
export type ColorDepth = "truecolor" | "256";
/** Set what `colorSgr` emits for a `#rrggbb`; `Terminal.enter()` sets it from the environment. */
export declare const setColorDepth: (d: ColorDepth) => void;
export declare const colorDepth: () => ColorDepth;
/**
 * The depth a terminal announces. `forced` (`LIGHT_COLORS`) decides when it says "truecolor" or
 * "256"; else COLORTERM `truecolor` or `24bit`, a TERM naming `truecolor`, `direct` or `kitty`, or
 * a TERM_PROGRAM known to paint 24-bit color mean truecolor, and anything else the 256-color palette.
 */
export declare const colorDepthOf: (colorterm: string, term: string, termProgram: string, forced: string) => ColorDepth;
/** The index of the 256-color palette nearest to `rgb`: a cell of the 6x6x6 cube or a step of the gray ramp, whichever is closer. */
export declare const to256: (rgb: number) => number;
/**
 * The SGR parameters selecting color `c` as the foreground (`fg` true) or background.
 */
export declare const colorSgr: (c: number, fg: boolean) => string;
