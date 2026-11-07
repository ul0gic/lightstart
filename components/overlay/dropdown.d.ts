declare const _default: Omit<{
    mixins: [{
        mixins: (({
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
            _triggerElement: Prop<Element | null>;
            _reposition: Prop<(() => void) | null>;
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
            _triggerElement: Prop<Element | null>;
            _reposition: Prop<(() => void) | null>;
        } | undefined;
        events?: {} | undefined;
    }];
    style: boolean;
    tag: string;
    props: {
        autoClose: true;
        items: Prop<DropdownItem[]>;
        content: Prop<(() => TemplateValue) | null>;
        _slotContent: Prop<ChildNode[] | null>;
    };
    connected(): void;
    _rows(): HTMLElement[];
    /** @param {KeyboardEvent} e */
    _handleKeydown(e: KeyboardEvent): void;
    /** @param {MouseEvent} e */
    _handleMenuClick(e: MouseEvent): void;
    /**
     * @param {DropdownItem} item
     * @param {MouseEvent} e
     */
    _pickItem(item: DropdownItem, e: MouseEvent): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        autoClose: true;
        items: Prop<DropdownItem[]>;
        content: Prop<(() => TemplateValue) | null>;
        _slotContent: Prop<ChildNode[] | null>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [{
        mixins: (({
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
            _triggerElement: Prop<Element | null>;
            _reposition: Prop<(() => void) | null>;
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
            _triggerElement: Prop<Element | null>;
            _reposition: Prop<(() => void) | null>;
        } | undefined;
        events?: {} | undefined;
    }] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
import type { DropdownItem } from "../types.js";
import type { TemplateValue } from "@bootstrapp/light/html";
