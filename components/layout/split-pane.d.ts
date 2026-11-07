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
        direction: string;
        initialSize: string;
        minSize: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        maxSize: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        minSecondary: string;
        primarySize: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly sync: "local";
            readonly scope: "storageKey";
        }>;
        dividerSize: number;
        storageKey: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        resizable: false;
        _primaryPanel: Prop<HTMLElement | null>;
        _secondaryPanel: Prop<HTMLElement | null>;
        _start: Prop<{
            containerSize: number;
            primaryPx: number;
        } | null>;
    };
    extends: string;
    style: boolean;
    connected(): void;
    firstUpdated(): void;
    /** @param {string} size */
    _parseSize(size: string): {
        value: number;
        unit: string;
    } | null;
    /**
     * @param {string} size
     * @param {number} containerSize
     */
    _toPixels(size: string, containerSize: number): number | null;
    onDragStart(): void;
    /** @param {DragMove} move */
    onDragMove({ dx, dy }: DragMove): void;
    onDragEnd(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        direction: string;
        initialSize: string;
        minSize: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        maxSize: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        minSecondary: string;
        primarySize: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly sync: "local";
            readonly scope: "storageKey";
        }>;
        dividerSize: number;
        storageKey: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        resizable: false;
        _primaryPanel: Prop<HTMLElement | null>;
        _secondaryPanel: Prop<HTMLElement | null>;
        _start: Prop<{
            containerSize: number;
            primaryPx: number;
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
