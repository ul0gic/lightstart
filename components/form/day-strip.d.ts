/**
 * The calendar date it is now where the reader is, or in the zone asked for.
 * @type {(timezone: string, now?: number) => string}
 */
export const todayIn: (timezone: string, now?: number) => string;
export function stripDays({ from, days, locale, today, dots }: {
    from: string;
    days: number;
    locale?: string;
    today?: string;
    dots?: string[];
}): DayStripDay[];
declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        value: string;
        from: string;
        days: number;
        timezone: string;
        locale: string;
        dots: Prop<string[]>;
        disabled: false;
    };
    events: {
        change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    };
    /** @returns {DayStripDay[]} */
    _days(): DayStripDay[];
    /** @param {string} date */
    _pick(date: string): void;
    /** @param {KeyboardEvent} e @param {DayStripDay[]} days */
    _onKeydown(e: KeyboardEvent, days: DayStripDay[]): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        value: string;
        from: string;
        days: number;
        timezone: string;
        locale: string;
        dots: Prop<string[]>;
        disabled: false;
    } | undefined;
    events?: {
        change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { DayStripDay } from "../types.js";
import type { Prop } from "../types.js";
