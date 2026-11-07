declare const _default: Omit<{
    mixins: [{
        formAssociated: boolean;
        props: {
            label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            name: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            id: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            value: Prop<import("../types.js").Renderable>;
            placeholder: string;
            disabled: false;
            readonly: false;
            required: false;
            error: false;
            fullWidth: false;
            size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "md";
                readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
            }>;
            variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "default";
                readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error"];
            }>;
            _inputId: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
            _internals: Prop<ElementInternals | null>;
        };
        events: {
            input: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            }>;
            change: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            }>;
        };
        getInputId(): string;
        connected(): void;
        syncFormValue(value: unknown): void;
    } & {
        props?: {
            label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            name: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            id: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            value: Prop<import("../types.js").Renderable>;
            placeholder: string;
            disabled: false;
            readonly: false;
            required: false;
            error: false;
            fullWidth: false;
            size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "md";
                readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
            }>;
            variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "default";
                readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error"];
            }>;
            _inputId: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
            _internals: Prop<ElementInternals | null>;
        } | undefined;
        events?: {
            input: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            }>;
            change: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            }>;
        } | undefined;
    }];
    tag: string;
    props: {
        type: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "text";
            readonly enum: readonly ["text", "email", "tel", "url", "search", "password", "number", "date", "datetime-local", "time", "month", "week", "color"];
        }>;
        inputmode: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        min: Prop<string | number | null>;
        max: Prop<string | number | null>;
        step: Prop<string | number | null>;
        prefix: string;
        errorMessage: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    style: boolean;
    /** @param {Event} e */
    handleInput(e: Event): void;
    /** @param {Event} e */
    handleChange(e: Event): void;
    focusInput(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        type: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "text";
            readonly enum: readonly ["text", "email", "tel", "url", "search", "password", "number", "date", "datetime-local", "time", "month", "week", "color"];
        }>;
        inputmode: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        min: Prop<string | number | null>;
        max: Prop<string | number | null>;
        step: Prop<string | number | null>;
        prefix: string;
        errorMessage: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [{
        formAssociated: boolean;
        props: {
            label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            name: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            id: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            value: Prop<import("../types.js").Renderable>;
            placeholder: string;
            disabled: false;
            readonly: false;
            required: false;
            error: false;
            fullWidth: false;
            size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "md";
                readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
            }>;
            variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "default";
                readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error"];
            }>;
            _inputId: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
            _internals: Prop<ElementInternals | null>;
        };
        events: {
            input: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            }>;
            change: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            }>;
        };
        getInputId(): string;
        connected(): void;
        syncFormValue(value: unknown): void;
    } & {
        props?: {
            label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            name: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            id: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            value: Prop<import("../types.js").Renderable>;
            placeholder: string;
            disabled: false;
            readonly: false;
            required: false;
            error: false;
            fullWidth: false;
            size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "md";
                readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
            }>;
            variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "default";
                readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error"];
            }>;
            _inputId: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
            _internals: Prop<ElementInternals | null>;
        } | undefined;
        events?: {
            input: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            }>;
            change: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
            }>;
        } | undefined;
    }] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
