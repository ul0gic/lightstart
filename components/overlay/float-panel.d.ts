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
    style: boolean;
    props: {
        storageKey: string;
        panelWidth: number;
        panelHeight: number;
        minWidth: number;
        minHeight: number;
        _rect: Prop<{
            x: number;
            y: number;
            w: number;
            h: number;
        }>;
        _dragBase: Prop<{
            x: number;
            y: number;
        } | null>;
    };
    events: {
        "panel-moved": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly x: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            readonly y: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
        "panel-resized": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly w: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            readonly h: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    };
    connected(): void;
    onDragStart(): void;
    /** @param {DragMove} move */
    onDragMove({ dx, dy }: DragMove): void;
    onDragEnd(): void;
    _viewport(): {
        width: number;
        height: number;
    };
    _mins(): {
        minWidth: number;
        minHeight: number;
    };
    _apply(): void;
    _persist(): void;
}, "events"> & {
    props?: {
        storageKey: string;
        panelWidth: number;
        panelHeight: number;
        minWidth: number;
        minHeight: number;
        _rect: Prop<{
            x: number;
            y: number;
            w: number;
            h: number;
        }>;
        _dragBase: Prop<{
            x: number;
            y: number;
        } | null>;
    } | undefined;
    events?: {
        "panel-moved": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly x: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            readonly y: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
        "panel-resized": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly w: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            readonly h: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
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
import type { DragMove } from "../types.js";
