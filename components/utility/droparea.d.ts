declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        _dropIndex: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: -1;
        }>;
        onDropped: Prop<((info: DropInfo) => void) | null>;
        "droparea-id": import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        orderable: false;
        direction: string;
    };
    connected(): void;
    /** @param {DragEvent & { _handledByOrderable?: boolean }} event */
    handleDragOver(event: DragEvent & {
        _handledByOrderable?: boolean;
    }): void;
    /** @param {DragEvent} event */
    handleDrop(event: DragEvent): void;
    /** @param {DragEvent} event */
    handleDragEnter(event: DragEvent): void;
    /** @param {DragEvent} event */
    handleDragLeave(event: DragEvent): void;
    _getOrderableChildren(): Element[];
    /** @param {number} clientPos */
    _updateDropIndex(clientPos: number): void;
    _hideIndicator(): void;
}, "events"> & {
    props?: {
        _dropIndex: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: -1;
        }>;
        onDropped: Prop<((info: DropInfo) => void) | null>;
        "droparea-id": import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        orderable: false;
        direction: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { DropInfo } from "../types.js";
import type { Prop } from "../types.js";
