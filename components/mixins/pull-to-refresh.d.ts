export function withPullToRefresh({ threshold, resistance, max, enabled, mouse, scroller }?: {
    threshold?: number;
    resistance?: number;
    max?: number;
    enabled?: string;
    mouse?: boolean;
    scroller?: string;
}): {
    mixins: ({
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
    })[];
    props: {
        pullY: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: 0;
            readonly attribute: false;
        }>;
        refreshing: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly defaultValue: false;
            readonly attribute: false;
        }>;
        _armed: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
    };
    _scrollTop(): number;
    /** @param {{ dx: number, dy: number }} move */
    dragYields({ dx, dy }: {
        dx: number;
        dy: number;
    }): boolean;
    onDragStart(): void;
    /** @param {{ dy: number }} move */
    onDragMove({ dy }: {
        dy: number;
    }): void;
    /** @param {{ dy: number, cancelled?: boolean }} end */
    onDragEnd({ dy, cancelled }: {
        dy: number;
        cancelled?: boolean;
    }): Promise<void>;
} & {
    props?: {
        pullY: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: 0;
            readonly attribute: false;
        }>;
        refreshing: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly defaultValue: false;
            readonly attribute: false;
        }>;
        _armed: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
    } | undefined;
    events?: {} | undefined;
};
export default withPullToRefresh;
import type { Prop } from "../types.js";
