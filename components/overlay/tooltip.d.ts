declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        _parent: Prop<HTMLElement | null>;
        _showTimer: Prop<ReturnType<typeof setTimeout> | null>;
        position: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "top";
            readonly enum: readonly ["top", "bottom", "left", "right"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "danger", "info"];
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        delay: number;
    };
    /** @param {DOMRect} rect */
    positionAt(rect: DOMRect): void;
    show(): void;
    hide(): void;
    connected(): void;
}, "events"> & {
    props?: {
        _parent: Prop<HTMLElement | null>;
        _showTimer: Prop<ReturnType<typeof setTimeout> | null>;
        position: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "top";
            readonly enum: readonly ["top", "bottom", "left", "right"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "danger", "info"];
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        delay: number;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
