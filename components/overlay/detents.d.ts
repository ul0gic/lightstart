/**
 * @lightstart/light/components/overlay/detents
 *
 * The stop arithmetic a draggable sheet needs, as pure functions of numbers:
 * where each named stop sits, which one a release belongs to, how fast the
 * finger was going, and how far past a bound the sheet is allowed to stretch.
 * No DOM and no `$APP`, so `anim-drag-panel` and `lc-bottom-sheet` answer these
 * questions the same way and `node --test` can ask them directly.
 */
/** @import { DetentName, DetentStops } from "../types.js" */
export const DISMISS_ZONE_PX: 24;
export const RUBBER_PX: 64;
export function resolveStops({ height, halfPx, peekPx }: {
    height: number;
    halfPx: number;
    peekPx: number;
}): DetentStops;
export function classify(stops: DetentStops, y: number): DetentName;
export function releaseVelocity(samples: {
    t: number;
    y: number;
}[], now: number): number;
export function rubber(overshoot: number): number;
import type { DetentStops } from "../types.js";
import type { DetentName } from "../types.js";
