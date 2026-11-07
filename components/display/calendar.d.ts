export function localDateKey(date: Date): string;
export function localDateFromKey(dateStr: string): Date;
export function eventDateKey(event: CalendarEvent): string;
export function weekDaysOf(date: Date): Date[];
export function getDaysInMonth(year: number, month: number, events: CalendarEvent[]): {
    date: Date;
    day: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    events: CalendarEvent[];
}[];
declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        events: Prop<CalendarEvent[]>;
        viewMode: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "month";
            readonly enum: readonly ["list", "month", "week"];
        }>;
        currentMonth: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, number>;
        currentYear: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, number>;
        selectedDate: string;
        showDayPanel: false;
        dayPanel: true;
        showViewToggle: true;
        showNavigation: true;
        showTodayButton: true;
        locale: string;
        monthsAhead: number;
        renderEvent: Prop<CalendarEventRenderer | null>;
        onDayDrop: Prop<CalendarDayDrop | null>;
    };
    /**
     * @param {CalendarDay} dayObj
     * @param {DragEvent} e
     */
    _handleDayDrop(dayObj: CalendarDay, e: DragEvent): void;
    getEventsForCalendar(): CalendarEvent[];
    /** @param {number} direction */
    handleNav(direction: number): void;
    _weekAnchor(): Date;
    /** @param {number} direction */
    handleWeekNav(direction: number): void;
    /** @param {CalendarDay} dayObj */
    handleWeekDayClick(dayObj: CalendarDay): void;
    handleTodayClick(): void;
    /** @param {string} mode */
    handleViewToggle(mode: string): void;
    /** @param {CalendarDay} dayObj */
    handleDayClick(dayObj: CalendarDay): void;
    handleClosePanel(): void;
    /**
     * @param {CalendarEvent} event
     * @param {MouseEvent} [e]
     */
    handleEventClick(event: CalendarEvent, e?: MouseEvent): void;
    getEventsForSelectedDay(): CalendarEvent[];
    render(): import("@bootstrapp/light/html").TemplateResult;
    renderViewToggle(): import("@bootstrapp/light/html").TemplateResult;
    /** @param {Record<string, CalendarEvent[]>} groupedEvents */
    renderWeekView(groupedEvents: Record<string, CalendarEvent[]>): import("@bootstrapp/light/html").TemplateResult;
    /** @param {Record<string, CalendarEvent[]>} groupedEvents */
    renderListView(groupedEvents: Record<string, CalendarEvent[]>): import("@bootstrapp/light/html").TemplateResult;
    /** @param {CalendarEvent[]} events */
    renderGridView(events: CalendarEvent[]): import("@bootstrapp/light/html").TemplateResult;
    renderDayDetailPanel(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        events: Prop<CalendarEvent[]>;
        viewMode: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "month";
            readonly enum: readonly ["list", "month", "week"];
        }>;
        currentMonth: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, number>;
        currentYear: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, number>;
        selectedDate: string;
        showDayPanel: false;
        dayPanel: true;
        showViewToggle: true;
        showNavigation: true;
        showTodayButton: true;
        locale: string;
        monthsAhead: number;
        renderEvent: Prop<CalendarEventRenderer | null>;
        onDayDrop: Prop<CalendarDayDrop | null>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { CalendarEvent } from "../types.js";
import type { Prop } from "../types.js";
import type { CalendarEventRenderer } from "../types.js";
import type { CalendarDayDrop } from "../types.js";
import type { CalendarDay } from "../types.js";
