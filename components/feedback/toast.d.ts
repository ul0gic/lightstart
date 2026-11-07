declare const _default: Omit<{
    tag: string;
    icons: string[];
    props: {
        position: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "top-right";
            readonly enum: readonly ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"];
        }>;
        toasts: Prop<ToastItem[]>;
    };
    style: boolean;
    connected(): void;
    /** @param {string} variant */
    _getIcon(variant: string): string;
    /** @param {ToastItem} toast */
    _body(toast: ToastItem): import("@bootstrapp/light/html").TemplateResult;
    render(): "" | import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        position: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "top-right";
            readonly enum: readonly ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"];
        }>;
        toasts: Prop<ToastItem[]>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { ToastItem } from "../types.js";
import type { Prop } from "../types.js";
