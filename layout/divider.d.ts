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
        label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        vertical: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        resizable: false;
        key: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        minPrev: number;
        minNext: number;
        maxPrev: number;
        maxNext: number;
        prevSize: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly sync: "local";
            readonly scope: "key";
        }>;
        nextSize: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly sync: "local";
            readonly scope: "key";
        }>;
        _prevElem: Prop<HTMLElement | null>;
        _nextElem: Prop<HTMLElement | null>;
        _start: Prop<{
            prevW: number;
            nextW: number;
            prevH: number;
            nextH: number;
        } | null>;
    };
    firstUpdated(): void;
    /** A size kept within the bounds a side declares; 0 means unbounded. @param {number} size @param {number} min @param {number} max */
    _clamp(size: number, min: number, max: number): number;
    _restoreSizes(): void;
    onDragStart(): void;
    /** @param {DragMove} move */
    onDragMove({ dx, dy }: DragMove): void;
    onDragEnd(): void;
    render(): import("@lightstart/light/html").TemplateResult | null;
}, "events"> & {
    props?: {
        label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        vertical: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        resizable: false;
        key: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        minPrev: number;
        minNext: number;
        maxPrev: number;
        maxNext: number;
        prevSize: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly sync: "local";
            readonly scope: "key";
        }>;
        nextSize: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly sync: "local";
            readonly scope: "key";
        }>;
        _prevElem: Prop<HTMLElement | null>;
        _nextElem: Prop<HTMLElement | null>;
        _start: Prop<{
            prevW: number;
            nextW: number;
            prevH: number;
            nextH: number;
        } | null>;
    } | undefined;
    events?: {} | undefined;
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
import type { DragMove } from "../types.js";
