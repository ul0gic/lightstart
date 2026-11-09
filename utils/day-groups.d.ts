export function readAt(at: string): TimelineMoment;
export function dayKeyOf(ms: number, timeZone?: string): string;
export function groupByDay(entries: TimelineEntry[], { oldestFirst, timeZone }?: {
    oldestFirst?: boolean;
    timeZone?: string;
}): TimelineDay[];
export function dayWords(day: string, locale: string, today: string): string;
export function timeWords(ms: number, locale: string): string;
import type { TimelineMoment } from "../types.js";
import type { TimelineEntry } from "../types.js";
import type { TimelineDay } from "../types.js";
