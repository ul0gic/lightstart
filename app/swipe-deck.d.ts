declare const _default: Omit<{
    mixins: [{
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
        items: Prop<unknown[]>;
        index: number;
        card: Prop<SwipeDeckRenderer | null>;
        footer: Prop<SwipeDeckRenderer | null>;
        empty: Prop<SwipeDeckEmpty | null>;
        background: Prop<SwipeDeckBackground | null>;
        threshold: number;
        peek: number;
        labels: Prop<SwipeDeckLabels | null>;
        _busy: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
        _tapOnControl: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
        _cardEl: Prop<HTMLElement | null>;
        _throwTimer: Prop<ReturnType<typeof setTimeout> | null>;
        _history: Prop<SwipeDeckHistory[]>;
    };
    events: {
        swipe: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly props: {
                readonly direction: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
                readonly index: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
                readonly item: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
            };
        }>;
        select: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly props: {
                readonly index: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
                readonly item: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
            };
        }>;
        "index-change": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly props: {
                readonly index: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
            };
        }>;
        end: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {}>;
        undo: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly props: {
                readonly index: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
                readonly item: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
            };
        }>;
    };
    connected(): void;
    /** @param {DragStart} d */
    onDragStart({ event }: DragStart): void;
    /** @param {DragMove} d */
    onDragMove({ dx, dy }: DragMove): void;
    /** @param {DragEnd} d */
    onDragEnd({ dx, dy, cancelled }: DragEnd): void;
    /** @param {string} direction */
    swipe(direction: string): void;
    select(): void;
    undo(): void;
    /** @param {number} index */
    to(index: number): void;
    /** @param {unknown[]} items */
    reset(items: unknown[]): void;
    /** @param {"left" | "right"} direction */
    _commit(direction: "left" | "right"): void;
    /** @param {number} index @param {number} depth */
    _ctx(index: number, depth: number): {
        index: number;
        total: number;
        depth: number;
        skip: () => void;
        save: () => void;
        open: () => void;
        undo: () => void;
    };
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        items: Prop<unknown[]>;
        index: number;
        card: Prop<SwipeDeckRenderer | null>;
        footer: Prop<SwipeDeckRenderer | null>;
        empty: Prop<SwipeDeckEmpty | null>;
        background: Prop<SwipeDeckBackground | null>;
        threshold: number;
        peek: number;
        labels: Prop<SwipeDeckLabels | null>;
        _busy: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
        _tapOnControl: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
        _cardEl: Prop<HTMLElement | null>;
        _throwTimer: Prop<ReturnType<typeof setTimeout> | null>;
        _history: Prop<SwipeDeckHistory[]>;
    } | undefined;
    events?: {
        swipe: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly props: {
                readonly direction: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
                readonly index: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
                readonly item: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
            };
        }>;
        select: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly props: {
                readonly index: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
                readonly item: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
            };
        }>;
        "index-change": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly props: {
                readonly index: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
            };
        }>;
        end: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {}>;
        undo: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly props: {
                readonly index: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
                readonly item: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
            };
        }>;
    } | undefined;
    mixins?: [{
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
import type { SwipeDeckRenderer } from "../types.js";
import type { SwipeDeckEmpty } from "../types.js";
import type { SwipeDeckBackground } from "../types.js";
import type { SwipeDeckLabels } from "../types.js";
import type { SwipeDeckHistory } from "../types.js";
import type { DragStart } from "../types.js";
import type { DragMove } from "../types.js";
import type { DragEnd } from "../types.js";
