/**
 * @lightstart/components/overlay/anchor
 *
 * Where a floating box goes when it is anchored to something else. Rects in,
 * a top and a left out, already clamped into the viewport, so the two things
 * that anchor in this package (a popover and a tooltip) agree on the answer
 * and `node --test` can ask for it directly. Nothing here touches the DOM or
 * reads `$APP`: the caller measures and the caller writes.
 */
/** @import { AnchorAlign, AnchorSide, Box, Rect } from "../types.js" */
export const ANCHOR_GUTTER_PX: 8;
export function parseAnchor(position: string, defaultAlign?: AnchorAlign): {
    side: AnchorSide;
    align: AnchorAlign;
};
export function anchorPosition({ trigger, floating, side, align, offset, viewport, gutter }: {
    trigger: Rect;
    floating: Box;
    side: AnchorSide;
    align: AnchorAlign;
    offset?: number;
    viewport: Box;
    gutter?: number;
}): {
    top: number;
    left: number;
};
import type { AnchorAlign } from "../types.js";
import type { AnchorSide } from "../types.js";
import type { Rect } from "../types.js";
import type { Box } from "../types.js";
