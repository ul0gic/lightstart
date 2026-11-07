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
        label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        vertical: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        resizable: false;
        key: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        minPrev: number;
        minNext: number;
        maxPrev: number;
        maxNext: number;
        prevSize: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly sync: "local";
            readonly scope: "key";
        }>;
        nextSize: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
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
    render(): import("@bootstrapp/light/html").TemplateResult | null;
}, "events"> & {
    props?: {
        label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        vertical: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        resizable: false;
        key: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        minPrev: number;
        minNext: number;
        maxPrev: number;
        maxNext: number;
        prevSize: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly sync: "local";
            readonly scope: "key";
        }>;
        nextSize: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
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
