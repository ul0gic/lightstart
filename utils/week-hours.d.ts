export function isClock(value: unknown): value is string;
/**
 * The week in the order a reader lists it, starting on `firstDay`.
 * @type {(firstDay?: number) => number[]}
 */
export const weekOrder: (firstDay?: number) => number[];
/**
 * Each day's hours, Sunday first, or null for a day closed. Anything that is
 * not a valid entry is left out, and a day named twice keeps its last hours.
 * @type {(value: unknown) => Array<WeekHoursDay | null>}
 */
export const expandWeek: (value: unknown) => Array<WeekHoursDay | null>;
/**
 * The week as entries: the days sharing hours together, Monday first within
 * an entry and entry by entry.
 * @type {(week: Array<WeekHoursDay | null>) => WeekHoursEntry[]}
 */
export const groupWeek: (week: Array<WeekHoursDay | null>) => WeekHoursEntry[];
/**
 * Whether the hours of a day run past midnight.
 * @type {(hours: WeekHoursDay) => boolean}
 */
export const pastMidnight: (hours: WeekHoursDay) => boolean;
import type { WeekHoursDay } from "../types.js";
import type { WeekHoursEntry } from "../types.js";
