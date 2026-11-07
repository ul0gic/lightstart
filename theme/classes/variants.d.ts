export function escapeSelector(cls: string): string;
export function createVariantApplier(screens: Scale): (variants: string[], className: string) => {
    selector: string;
    medias: string[];
    weight: number;
} | null;
import type { Scale } from "./types.js";
