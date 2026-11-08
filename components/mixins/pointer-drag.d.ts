export function withPointerDrag({ handle, enabled, capture, touchFallback, mouse }?: {
    handle?: string;
    enabled?: string;
    capture?: boolean;
    touchFallback?: boolean;
    mouse?: boolean;
}): {
    props: {
        _drag: Prop<DragState | null>;
        _dragRaf: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: 0;
        }>;
    };
    connected(): void;
} & {
    props?: {
        _drag: Prop<DragState | null>;
        _dragRaf: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: 0;
        }>;
    } | undefined;
    events?: {} | undefined;
};
export default withPointerDrag;
import type { DragState } from "../types.js";
import type { Prop } from "../types.js";
