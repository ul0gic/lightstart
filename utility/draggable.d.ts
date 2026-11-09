declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        "dragged-id": import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        handle: string;
        target: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        onDragged: import("@lightstart/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
        _lastDownTarget: Prop<EventTarget | null>;
    };
    connected(): void;
    /**
     * @this {HTMLElement & { handle: string, _lastDownTarget?: EventTarget | null, "dragged-id": string }}
     * @param {DragEvent} event
     */
    handleDragStart(this: HTMLElement & {
        handle: string;
        _lastDownTarget?: EventTarget | null;
        "dragged-id": string;
    }, event: DragEvent): undefined;
    /**
     * @this {HTMLElement & { _lastDownTarget?: EventTarget | null }}
     * @param {DragEvent} _event
     */
    handleDragEnd(this: HTMLElement & {
        _lastDownTarget?: EventTarget | null;
    }, _event: DragEvent): void;
}, "events"> & {
    props?: {
        "dragged-id": import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        handle: string;
        target: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        onDragged: import("@lightstart/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
        _lastDownTarget: Prop<EventTarget | null>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
