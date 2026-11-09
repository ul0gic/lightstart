export namespace overlays {
    let stack: import("@lightstart/light/signals").Signal<OverlayEntry[]>;
    /**
     * @param {Element} host
     * @param {OverlayOptions} [options]
     * @returns {string} the id this layer closes with
     */
    function open(host: Element, { dismiss, dismissible, lockScroll, restoreFocus }?: OverlayOptions): string;
    /** @param {string | null} id */
    function close(id: string | null): void;
    /** @param {string | null} id @returns {boolean} whether this layer is the one Escape would reach */
    function isTop(id: string | null): boolean;
    function closeTop(): void;
}
import type { OverlayEntry } from "../types.js";
import type { OverlayOptions } from "../types.js";
