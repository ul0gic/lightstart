declare const _default: Omit<{
    tag: string;
    props: {
        _internals: Prop<ElementInternals | null>;
        checked: false;
        disabled: false;
        name: string;
        value: string;
        label: string;
        hint: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        _hintId: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "primary";
            readonly enum: readonly ["primary", "secondary", "success", "warning", "error"];
        }>;
    };
    style: boolean;
    formAssociated: boolean;
    connected(): void;
    /** @param {Event} e */
    handleChange(e: Event): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        _internals: Prop<ElementInternals | null>;
        checked: false;
        disabled: false;
        name: string;
        value: string;
        label: string;
        hint: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        _hintId: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "primary";
            readonly enum: readonly ["primary", "secondary", "success", "warning", "error"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
