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
            _swipe: Prop<import("../types.js").SwipeStart | null>;
        };
        connected(): void;
    } & {
        props?: {
            _swipe: Prop<import("../types.js").SwipeStart | null>;
        } | undefined;
        events?: {} | undefined;
    }];
    tag: string;
    class: string;
    style: boolean;
    props: {
        items: Prop<unknown[]>;
        index: number;
        open: false;
        full: false;
        axis: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "y";
            readonly enum: readonly ["x", "y"];
        }>;
        tapZones: false;
        duration: number;
        media: Prop<StoryRenderer | null>;
        header: Prop<StoryRenderer | null>;
        footer: Prop<StoryRenderer | null>;
        background: Prop<StoryBackground | null>;
        _lastWheel: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: 0;
        }>;
    };
    connected(): void;
    onEscape(): void;
    /** @param {unknown[]} items */
    show(items: unknown[], index?: number): void;
    close(): void;
    /** @param {number} index */
    _to(index: number): void;
    /** @param {number} delta */
    _go(delta: number): void;
    /** @param {number} direction */
    onSwipe(direction: number): void;
    /**
     * A tap on the story itself: the left third goes back, the rest forward. A
     * control inside the media keeps its tap.
     * @param {MouseEvent} e
     */
    _onTap(e: MouseEvent): void;
    _onSegmentEnd(): void;
    /** @param {WheelEvent} e */
    _onWheel(e: WheelEvent): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        items: Prop<unknown[]>;
        index: number;
        open: false;
        full: false;
        axis: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "y";
            readonly enum: readonly ["x", "y"];
        }>;
        tapZones: false;
        duration: number;
        media: Prop<StoryRenderer | null>;
        header: Prop<StoryRenderer | null>;
        footer: Prop<StoryRenderer | null>;
        background: Prop<StoryBackground | null>;
        _lastWheel: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: 0;
        }>;
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
            _swipe: Prop<import("../types.js").SwipeStart | null>;
        };
        connected(): void;
    } & {
        props?: {
            _swipe: Prop<import("../types.js").SwipeStart | null>;
        } | undefined;
        events?: {} | undefined;
    }] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
import type { StoryRenderer } from "../types.js";
import type { StoryBackground } from "../types.js";
