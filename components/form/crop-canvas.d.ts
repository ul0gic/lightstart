/** @import { CropBounds, CropRect } from "../types.js" */
/** The most pixels a working picture keeps: what iOS Safari draws into a canvas. */
export const MAX_PIXELS: 8388608;
export function encodesWebp(): Promise<boolean>;
export function loadPicture(source: Blob | string): Promise<ImageBitmap>;
export function releasePicture(picture: ImageBitmap | null | undefined): void | undefined;
export function drawSquare(picture: ImageBitmap, rect: CropRect, bounds: CropBounds, size: number, ground?: string): HTMLCanvasElement;
export function cropToBlob(picture: ImageBitmap, rect: CropRect, bounds: CropBounds, { size, type, quality, maxBytes }?: {
    size?: number;
    type?: string;
    quality?: number;
    maxBytes?: number;
}): Promise<Blob | null>;
import type { CropRect } from "../types.js";
import type { CropBounds } from "../types.js";
