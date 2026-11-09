declare const _default: Omit<{
    mixins: [{
        props: {
            _overlayId: Prop<string | null>;
        };
        updated({ changedProps }: {
            changedProps: Map<string, unknown>;
        }): void;
        disconnected(): void;
    } & {
        props?: {
            _overlayId: Prop<string | null>;
        } | undefined;
        events?: {} | undefined;
    }, {
        props: {
            _drag: Prop<import("../types.js").DragState | null>;
            _dragRaf: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
                readonly reactive: false;
                readonly defaultValue: 0;
            }>;
        };
        connected(): void;
    } & {
        props?: {
            _drag: Prop<import("../types.js").DragState | null>;
            _dragRaf: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
                readonly reactive: false;
                readonly defaultValue: 0;
            }>;
        } | undefined;
        events?: {} | undefined;
    }];
    tag: string;
    style: boolean;
    props: {
        open: false;
        detent: string;
        grabber: false;
        expandable: false;
        expanded: false;
        _room: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: 0;
        }>;
        _classified: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
        _suppressClick: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
        _sheet: Prop<SheetGeometry | null>;
        _clickTimer: Prop<ReturnType<typeof setTimeout> | null>;
    };
    onEscape(): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    willUpdate({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    _clearFree(): void;
    /** @param {string} detent */
    _classify(detent: string): void;
    /** @param {number} room */
    _expand(room: number): void;
    /** @param {HTMLElement} panelEl */
    _roomAbove(panelEl: HTMLElement): number;
    _halfPx(): number;
    connected(): void;
    _holdClick(): void;
    onDragStart(): void;
    /**
     * @param {SheetGeometry} sheet
     * @param {number} dy
     */
    _below(sheet: SheetGeometry, dy: number): number;
    /** @param {DragMove} move */
    onDragMove({ dy }: DragMove): void;
    /** @param {DragEnd} end */
    onDragEnd({ dy }: DragEnd): void;
    /**
     * @param {SheetGeometry} sheet
     * @param {number} dy
     */
    _clampToStops(sheet: SheetGeometry, dy: number): number;
    /** @param {string} detent */
    setDetent(detent: string): void;
    resetScroll(): void;
    toggle(): void;
    openSheet(): void;
    close(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        open: false;
        detent: string;
        grabber: false;
        expandable: false;
        expanded: false;
        _room: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: 0;
        }>;
        _classified: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
        _suppressClick: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
        _sheet: Prop<SheetGeometry | null>;
        _clickTimer: Prop<ReturnType<typeof setTimeout> | null>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [{
        props: {
            _overlayId: Prop<string | null>;
        };
        updated({ changedProps }: {
            changedProps: Map<string, unknown>;
        }): void;
        disconnected(): void;
    } & {
        props?: {
            _overlayId: Prop<string | null>;
        } | undefined;
        events?: {} | undefined;
    }, {
        props: {
            _drag: Prop<import("../types.js").DragState | null>;
            _dragRaf: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
                readonly reactive: false;
                readonly defaultValue: 0;
            }>;
        };
        connected(): void;
    } & {
        props?: {
            _drag: Prop<import("../types.js").DragState | null>;
            _dragRaf: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
                readonly reactive: false;
                readonly defaultValue: 0;
            }>;
        } | undefined;
        events?: {} | undefined;
    }] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
import type { SheetGeometry } from "../types.js";
import type { DragMove } from "../types.js";
import type { DragEnd } from "../types.js";
