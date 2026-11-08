declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        value: Prop<WeekHoursEntry[]>;
        name: string;
        label: string;
        locale: string;
        firstDay: number;
        disabled: false;
    };
    events: {
        change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown[], import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    };
    /** @param {number} day */
    _weekday(day: number): string;
    /** @param {Array<WeekHoursDay | null>} week */
    _commit(week: Array<WeekHoursDay | null>): void;
    /**
     * The hours a day takes when it opens: the nearest open day before it in
     * the week, else any open day, else a working day.
     * @param {Array<WeekHoursDay | null>} week
     * @param {number} day
     * @returns {WeekHoursDay}
     */
    _hoursFor(week: Array<WeekHoursDay | null>, day: number): WeekHoursDay;
    /** @param {number} day @param {boolean} open */
    _toggle(day: number, open: boolean): void;
    /** @param {number} day @param {"open" | "close"} which @param {string} time */
    _time(day: number, which: "open" | "close", time: string): void;
    /** @param {number} day @param {WeekHoursDay} hours @param {string} name */
    _times(day: number, hours: WeekHoursDay, name: string): import("@lightstart/light/html").TemplateResult;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        value: Prop<WeekHoursEntry[]>;
        name: string;
        label: string;
        locale: string;
        firstDay: number;
        disabled: false;
    } | undefined;
    events?: {
        change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown[], import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { WeekHoursEntry } from "../types.js";
import type { Prop } from "../types.js";
import type { WeekHoursDay } from "../types.js";
