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
    }, {
        connected(this: import("@bootstrapp/light").default & {
            onClickOutside?: (e: Event) => void;
        }): void;
    } & {
        props?: {} | undefined;
        events?: {} | undefined;
    }];
    tag: string;
    style: boolean;
    props: {
        items: Prop<ContextMenuItem[]>;
        target: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, null>;
        offset: number;
        position: string;
        _openSubmenu: Prop<string | null>;
        _closeTimer: Prop<ReturnType<typeof setTimeout> | null>;
    };
    events: {
        select: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly item: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            readonly target: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    };
    connected(): void;
    /**
     * Open at a point, as a right-click does.
     * @param {number} x @param {number} y
     * @param {{ items?: ContextMenuItem[], target?: unknown }} [opts]
     */
    openAt(x: number, y: number, { items, target }?: {
        items?: ContextMenuItem[];
        target?: unknown;
    }): void;
    /**
     * Open beside an element, as a kebab button does.
     * @param {Element} anchor
     * @param {{ items?: ContextMenuItem[], target?: unknown, position?: string }} [opts]
     */
    openFor(anchor: Element, { items, target, position }?: {
        items?: ContextMenuItem[];
        target?: unknown;
        position?: string;
    }): void;
    _settle(): void;
    /** @param {ContextMenuItem} item */
    _pick(item: ContextMenuItem): void;
    /** @param {string | undefined} label @param {HTMLElement} li */
    _showSubmenu(label: string | undefined, li: HTMLElement): void;
    /** @param {HTMLElement} li */
    _hideSubmenu(li: HTMLElement): void;
    /** @param {ContextMenuItem} item */
    _renderLeaf(item: ContextMenuItem): import("@bootstrapp/light/html").TemplateResult;
    /** @param {ContextMenuItem} item @param {ContextMenuItem[]} children */
    _renderParent(item: ContextMenuItem, children: ContextMenuItem[]): import("@bootstrapp/light/html").TemplateResult;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        items: Prop<ContextMenuItem[]>;
        target: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, null>;
        offset: number;
        position: string;
        _openSubmenu: Prop<string | null>;
        _closeTimer: Prop<ReturnType<typeof setTimeout> | null>;
    } | undefined;
    events?: {
        select: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly item: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            readonly target: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
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
    }, {
        connected(this: import("@bootstrapp/light").default & {
            onClickOutside?: (e: Event) => void;
        }): void;
    } & {
        props?: {} | undefined;
        events?: {} | undefined;
    }] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
import type { ContextMenuItem } from "../types.js";
