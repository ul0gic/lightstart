declare const _default: Omit<{
    mixins: [{
        mixins: (({
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
        }) | ({
            connected(this: import("@bootstrapp/light").default & {
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
            _triggerElement: import("../types.js").Prop<Element | null>;
            _reposition: import("../types.js").Prop<(() => void) | null>;
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
            _triggerElement: import("../types.js").Prop<Element | null>;
            _reposition: import("../types.js").Prop<(() => void) | null>;
        } | undefined;
        events?: {} | undefined;
    }];
    tag: string;
    icons: string[];
    style: boolean;
    props: {
        value: string;
        tab: string;
        search: string;
        category: string;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
    _getFilteredIcons(): string[];
    _getFilteredEmoji(): {
        char: string;
        name: string;
    }[];
    /** @param {string} value */
    _select(value: string): void;
}, "events"> & {
    props?: {
        value: string;
        tab: string;
        search: string;
        category: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [{
        mixins: (({
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
        }) | ({
            connected(this: import("@bootstrapp/light").default & {
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
            _triggerElement: import("../types.js").Prop<Element | null>;
            _reposition: import("../types.js").Prop<(() => void) | null>;
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
            _triggerElement: import("../types.js").Prop<Element | null>;
            _reposition: import("../types.js").Prop<(() => void) | null>;
        } | undefined;
        events?: {} | undefined;
    }] | undefined;
};
export default _default;
