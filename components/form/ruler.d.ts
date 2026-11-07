declare const _default: Omit<{
    mixins: [{
        props: {
            _drag: Prop<import("../types.js").DragState | null>;
            _dragRaf: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
                readonly reactive: false;
                readonly defaultValue: 0;
            }>;
        };
        connected(): void;
    } & {
        props?: {
            _drag: Prop<import("../types.js").DragState | null>;
            _dragRaf: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
                readonly reactive: false;
                readonly defaultValue: 0;
            }>;
        } | undefined;
        events?: {} | undefined;
    }];
    tag: string;
    props: {
        items: Prop<Array<string | number>>;
        value: number;
        minor: number;
        step: number;
        disabled: false;
        label: string;
        _base: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: 0;
        }>;
        _live: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: -1;
        }>;
    };
    events: {
        input: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
        change: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    };
    style: boolean;
    role: string;
    connected(): void;
    updated(): void;
    /** @param {number} index */
    _ticks(index: number): number;
    /** @param {number} index */
    _offset(index: number): string;
    /** @param {number} index */
    _clamp(index: number): number;
    /** @param {number} index @param {"input" | "change"} kind */
    _settle(index: number, kind: "input" | "change"): void;
    onDragStart(): void;
    /** @param {{ dx: number }} d */
    onDragMove({ dx }: {
        dx: number;
    }): void;
    /** @param {{ dx: number, cancelled: boolean }} d */
    onDragEnd({ dx, cancelled }: {
        dx: number;
        cancelled: boolean;
    }): void;
    /** @param {WheelEvent} e */
    _onWheel(e: WheelEvent): void;
    /** @param {KeyboardEvent} e */
    _onKey(e: KeyboardEvent): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        items: Prop<Array<string | number>>;
        value: number;
        minor: number;
        step: number;
        disabled: false;
        label: string;
        _base: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: 0;
        }>;
        _live: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: -1;
        }>;
    } | undefined;
    events?: {
        input: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
        change: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [{
        props: {
            _drag: Prop<import("../types.js").DragState | null>;
            _dragRaf: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
                readonly reactive: false;
                readonly defaultValue: 0;
            }>;
        };
        connected(): void;
    } & {
        props?: {
            _drag: Prop<import("../types.js").DragState | null>;
            _dragRaf: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
                readonly reactive: false;
                readonly defaultValue: 0;
            }>;
        } | undefined;
        events?: {} | undefined;
    }] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
