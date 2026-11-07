/** @import { Prop } from "../types.js" */
/**
 * @bootstrapp/light/components/mixins/popover
 *
 * A layer anchored to whatever opened it: `toggle(trigger)` positions the host
 * against that element, keeps it there while the page scrolls or the viewport
 * changes, and takes it down on Escape or an outside click. The host stays
 * `position: fixed` in its own stylesheet and draws whatever it likes.
 *
 *   import { defineComponent } from "@bootstrapp/light";
 *   import { withPopover } from "@bootstrapp/light/components/mixins/popover.js";
 *
 *   export default defineComponent({
 *     mixins: [withPopover],
 *     tag: "lc-dropdown",
 *     style: true,
 *   });
 *
 * The trigger protocol is `toggle(trigger)`, `_open(trigger)` and `_close()`,
 * which is what `<lc-link popovertarget>` calls and what every direct caller
 * across the repo already holds. Opening fires `popover-open` and closing
 * fires `popover-close`, both bubbling.
 */
export const withPopover: {
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
    /** @param {Element | null} triggerElement */
    _open(triggerElement: Element | null): void;
    _close(): void;
    close(): void;
    /** @param {Element | null} triggerElement */
    toggle(triggerElement: Element | null): void;
    _startPositionTracking(): void;
    _stopPositionTracking(): void;
    onEscape(): void;
    /** @param {Event} e */
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
};
export default withPopover;
import type { Prop } from "../types.js";
