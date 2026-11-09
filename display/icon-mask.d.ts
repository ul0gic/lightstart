export function maskDataUri({ body, width, height }: IconEntry, { solid, bold }?: {
    solid?: boolean;
    bold?: boolean;
}): string;
export function hasSolid({ body }: IconEntry): boolean;
export function hasBold({ body }: IconEntry): boolean;
export function maskRule(name: string, entry: IconEntry, { solid, bold }?: {
    solid?: boolean;
    bold?: boolean;
}): string;
export function iconMaskCSS(icons: Array<{
    name: string;
    entry: IconEntry;
}>, { solid, bold }?: {
    solid?: Set<string> | "all";
    bold?: Set<string> | "all";
}): string;
import type { IconEntry } from "@lightstart/light/theme";
/** An icon's body as a CSS mask rule, keyed by the `name` attribute. */
/** @import { IconEntry } from "@lightstart/light/theme" */
export const ICON_NAME: RegExp;
