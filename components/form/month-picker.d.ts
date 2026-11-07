/** The month a date is in, `YYYY-MM`. @type {(iso: string) => string} */
export const monthOf: (iso: string) => string;
/**
 * The month `n` months on from `month`; `month` itself when it is not one.
 * @type {(month: string, n: number) => string}
 */
export const shiftMonth: (month: string, n: number) => string;
export function monthDays({ month, locale, today, dots, min, max, weekStart, from, to }: {
    month: string;
    locale?: string;
    today?: string;
    dots?: string[];
    min?: string;
    max?: string;
    weekStart?: number;
    from?: string;
    to?: string;
}): {
    weekdays: string[];
    days: MonthPickerDay[];
};
declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        month: string;
        value: string;
        from: string;
        to: string;
        range: false;
        min: string;
        max: string;
        timezone: string;
        locale: string;
        weekStart: number;
        dots: Prop<string[]>;
        navigation: true;
        prevLabel: string;
        nextLabel: string;
        disabled: false;
    };
    events: {
        change: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            readonly from: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            readonly to: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
        "month-change": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly month: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    };
    /** @returns {string} */
    _month(): string;
    /** @param {string} date */
    _pick(date: string): void;
    /** @param {number} n */
    _shift(n: number): void;
    /** @param {KeyboardEvent} e */
    _onKeydown(e: KeyboardEvent): Promise<void>;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        month: string;
        value: string;
        from: string;
        to: string;
        range: false;
        min: string;
        max: string;
        timezone: string;
        locale: string;
        weekStart: number;
        dots: Prop<string[]>;
        navigation: true;
        prevLabel: string;
        nextLabel: string;
        disabled: false;
    } | undefined;
    events?: {
        change: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            readonly from: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            readonly to: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
        "month-change": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly month: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { MonthPickerDay } from "../types.js";
import type { Prop } from "../types.js";
