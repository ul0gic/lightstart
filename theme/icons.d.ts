/**
 * @file @lightstart/light/theme/icons.js
 * Icon sets in the `@iconify-json` shape, and where a page reads one icon
 * from. Nothing is fetched until the page says where icons come from:
 * `configureIcons({ load: iconify("lucide") })` reads them from the public
 * Iconify API, and a host that serves icons itself passes its own `load`.
 */
/** @import { IconCollection, IconEntry, IconSource } from "./types.js" */
export const DEFAULT_SET: "lucide";
/**
 * One icon of a collection, with the collection's sizes filled in; aliases
 * resolve to their parent. Null when the set has no such name.
 * @type {(collection: IconCollection, name: string) => IconEntry | null}
 */
export const icon: (collection: IconCollection, name: string) => IconEntry | null;
/**
 * Every name the set answers to, aliases included, deprecated ones left out.
 * @type {(collection: IconCollection) => string[]}
 */
export const iconNames: (collection: IconCollection) => string[];
export function iconify(set?: string): (name: string) => Promise<IconEntry | null>;
/** @type {IconSource} */
export const icons: IconSource;
export function configureIcons(options: Partial<IconSource>): void;
import type { IconCollection } from "./types.js";
import type { IconEntry } from "./types.js";
import type { IconSource } from "./types.js";
