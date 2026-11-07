/**
 * @bootstrapp/light/native/tui/ticks: one tick for everything that moves on its
 * own (a spinner, a running clock), four times a second. Every listener runs
 * in the same turn, so what they redraw lands in one frame instead of a frame
 * each; the timer runs while something listens and stops with the last
 * listener. `spinnerAt(now)` is the spinner's frame of the moment, one per
 * tick.
 */
export declare const TICK_MS = 250;
export declare const SPINNER: string[];
/** The spinner's frame at `now`, one per tick. */
export declare const spinnerAt: (now: number) => string;
/** Call `fn` on every tick until the function answered is called. */
export declare const onTick: (fn: () => void) => (() => void);
