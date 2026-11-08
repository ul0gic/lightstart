declare const _default: Omit<{
    mixins: [{
        mixins: (({
            props: {
                _overlayId: import("../types").Prop<string | null>;
            };
            updated({ changedProps }: {
                changedProps: Map<string, unknown>;
            }): void;
            disconnected(): void;
        } & {
            props?: {
                _overlayId: import("../types").Prop<string | null>;
            } | undefined;
            events?: {} | undefined;
        }) | ({
            connected(this: import("@lightstart/light").default & {
                onClickOutside?: (e: Event) => void;
            }): void;
        } & {
            props?: {} | undefined;
            events?: {} | undefined;
        }))[];
        props: {
            position: string;
            open: false;
            offset: number;
            _triggerElement: import("../types").Prop<Element | null>;
            _reposition: import("../types").Prop<(() => void) | null>;
        };
        connected(): void;
        _updatePosition(): void;
        _open(triggerElement: Element | null): void;
        _close(): void;
        close(): void;
        toggle(triggerElement: Element | null): void;
        _startPositionTracking(): void;
        _stopPositionTracking(): void;
        onEscape(): void;
        onClickOutside(e: Event): void;
    } & {
        props?: {
            position: string;
            open: false;
            offset: number;
            _triggerElement: import("../types").Prop<Element | null>;
            _reposition: import("../types").Prop<(() => void) | null>;
        } | undefined;
        events?: {} | undefined;
    }];
    tag: string;
    style: boolean;
    props: {
        arrow: true;
    };
}, "events"> & {
    props?: {
        arrow: true;
    } | undefined;
    events?: {} | undefined;
    mixins?: [{
        mixins: (({
            props: {
                _overlayId: import("../types").Prop<string | null>;
            };
            updated({ changedProps }: {
                changedProps: Map<string, unknown>;
            }): void;
            disconnected(): void;
        } & {
            props?: {
                _overlayId: import("../types").Prop<string | null>;
            } | undefined;
            events?: {} | undefined;
        }) | ({
            connected(this: import("@lightstart/light").default & {
                onClickOutside?: (e: Event) => void;
            }): void;
        } & {
            props?: {} | undefined;
            events?: {} | undefined;
        }))[];
        props: {
            position: string;
            open: false;
            offset: number;
            _triggerElement: import("../types").Prop<Element | null>;
            _reposition: import("../types").Prop<(() => void) | null>;
        };
        connected(): void;
        _updatePosition(): void;
        _open(triggerElement: Element | null): void;
        _close(): void;
        close(): void;
        toggle(triggerElement: Element | null): void;
        _startPositionTracking(): void;
        _stopPositionTracking(): void;
        onEscape(): void;
        onClickOutside(e: Event): void;
    } & {
        props?: {
            position: string;
            open: false;
            offset: number;
            _triggerElement: import("../types").Prop<Element | null>;
            _reposition: import("../types").Prop<(() => void) | null>;
        } | undefined;
        events?: {} | undefined;
    }] | undefined;
};
export default _default;
