export function boundsOf(width: number, height: number, maxZoom?: number, aspect?: number): CropBounds;
export function coverRect(bounds: CropBounds): CropRect;
export function clampRect(rect: CropRect, bounds: CropBounds): CropRect;
export function panRect(rect: CropRect, dx: number, dy: number, view: number, bounds: CropBounds): CropRect;
export function zoomRectAt(rect: CropRect, factor: number, fx: number, fy: number, view: number, bounds: CropBounds): CropRect;
export function zoomOf(rect: CropRect, bounds: CropBounds): number;
export function rectAtZoom(rect: CropRect, zoom: number, bounds: CropBounds): CropRect;
export function pinchStep(before: [CropPoint, CropPoint], after: [CropPoint, CropPoint]): {
    factor: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
};
export function pinchRect(rect: CropRect, before: [CropPoint, CropPoint], after: [CropPoint, CropPoint], view: number, bounds: CropBounds): CropRect;
export function wheelFactor(deltaY: number, deltaMode?: number): number;
export function keyIntent(key: string, { step, shift }?: {
    step?: number;
    shift?: boolean;
}): CropIntent | null;
export function sourceRect(rect: CropRect, { width, height, aspect }: CropBounds): {
    sx: number;
    sy: number;
    size: number;
};
export function fitWithin(width: number, height: number, maxPixels: number): {
    width: number;
    height: number;
    scale: number;
};
export function qualitySteps(start?: number, floor?: number, step?: number): number[];
export function halvingSteps(from: number, to: number): number[];
import type { CropBounds } from "../types.js";
import type { CropRect } from "../types.js";
import type { CropPoint } from "../types.js";
import type { CropIntent } from "../types.js";
