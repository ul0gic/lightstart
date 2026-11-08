declare const _default: Omit<{
    mixins: [{
        props: {
            _overlayId: import("../types.js").Prop<string | null>;
        };
        updated({ changedProps }: {
            changedProps: Map<string, unknown>;
        }): void;
        disconnected(): void;
    } & {
        props?: {
            _overlayId: import("../types.js").Prop<string | null>;
        } | undefined;
        events?: {} | undefined;
    }, {
        props: {
            _swipe: import("../types.js").Prop<import("../types.js").SwipeStart | null>;
        };
        connected(): void;
    } & {
        props?: {
            _swipe: import("../types.js").Prop<import("../types.js").SwipeStart | null>;
        } | undefined;
        events?: {} | undefined;
    }];
    tag: string;
    style: boolean;
    props: {
        open: false;
        position: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "right";
            readonly enum: readonly ["left", "right", "top", "bottom"];
        }>;
        width: string;
        height: string;
        backdrop: true;
        persistent: false;
    };
    /** @param {number} direction */
    onSwipe(direction: number): void;
    /** @param {MouseEvent} e */
    _handleBackdropClick(e: MouseEvent): void;
    onEscape(): void;
    openDrawer(): void;
    closeDrawer(): void;
    toggleDrawer(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        open: false;
        position: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "right";
            readonly enum: readonly ["left", "right", "top", "bottom"];
        }>;
        width: string;
        height: string;
        backdrop: true;
        persistent: false;
    } | undefined;
    events?: {} | undefined;
    mixins?: [{
        props: {
            _overlayId: import("../types.js").Prop<string | null>;
        };
        updated({ changedProps }: {
            changedProps: Map<string, unknown>;
        }): void;
        disconnected(): void;
    } & {
        props?: {
            _overlayId: import("../types.js").Prop<string | null>;
        } | undefined;
        events?: {} | undefined;
    }, {
        props: {
            _swipe: import("../types.js").Prop<import("../types.js").SwipeStart | null>;
        };
        connected(): void;
    } & {
        props?: {
            _swipe: import("../types.js").Prop<import("../types.js").SwipeStart | null>;
        } | undefined;
        events?: {} | undefined;
    }] | undefined;
};
export default _default;
