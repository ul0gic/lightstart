declare const _default: Omit<{
    tag: string;
    style: boolean;
    _items(): TreeItemElement[];
    /** @param {KeyboardEvent} e */
    _keydown(e: KeyboardEvent): void;
    connected(): void;
    firstUpdated(): void;
}, "events"> & {
    props?: {} | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { TreeItemElement } from "../types.js";
