declare const _default: Omit<{
    mixins: [{
        formAssociated: boolean;
        props: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: Prop<Renderable>;
            placeholder: string;
            disabled: false;
            readonly: false;
            required: false;
            error: false;
            fullWidth: false;
            size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "md";
                readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
            }>;
            variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "default";
                readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error"];
            }>;
            _inputId: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
            _internals: Prop<ElementInternals | null>;
        };
        events: {
            input: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
            change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
        };
        getInputId(): string;
        connected(): void;
        syncFormValue(value: unknown): void;
    } & {
        props?: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: Prop<Renderable>;
            placeholder: string;
            disabled: false;
            readonly: false;
            required: false;
            error: false;
            fullWidth: false;
            size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "md";
                readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
            }>;
            variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "default";
                readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error"];
            }>;
            _inputId: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
            _internals: Prop<ElementInternals | null>;
        } | undefined;
        events?: {
            input: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
            change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
        } | undefined;
    }];
    tag: string;
    props: {
        orientation: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "vertical";
            readonly enum: readonly ["vertical", "horizontal"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "primary";
            readonly enum: readonly ["primary", "secondary", "success", "warning", "error"];
        }>;
        _onRadioChange: Prop<EventListener | null>;
    };
    style: boolean;
    connected(): void;
    _radios(): RadioElement[];
    /** @param {{ changedProps: Map<string, unknown> }} props */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    _updateFormValue(): void;
    _syncRadios(): void;
    handleSlotChange(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        orientation: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "vertical";
            readonly enum: readonly ["vertical", "horizontal"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "primary";
            readonly enum: readonly ["primary", "secondary", "success", "warning", "error"];
        }>;
        _onRadioChange: Prop<EventListener | null>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [{
        formAssociated: boolean;
        props: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: Prop<Renderable>;
            placeholder: string;
            disabled: false;
            readonly: false;
            required: false;
            error: false;
            fullWidth: false;
            size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "md";
                readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
            }>;
            variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "default";
                readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error"];
            }>;
            _inputId: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
            _internals: Prop<ElementInternals | null>;
        };
        events: {
            input: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
            change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
        };
        getInputId(): string;
        connected(): void;
        syncFormValue(value: unknown): void;
    } & {
        props?: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: Prop<Renderable>;
            placeholder: string;
            disabled: false;
            readonly: false;
            required: false;
            error: false;
            fullWidth: false;
            size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "md";
                readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
            }>;
            variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "default";
                readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error"];
            }>;
            _inputId: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
            _internals: Prop<ElementInternals | null>;
        } | undefined;
        events?: {
            input: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
            change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
        } | undefined;
    }] | undefined;
};
export default _default;
import type { Renderable } from "../types.js";
import type { Prop } from "../types.js";
import type { RadioElement } from "../types.js";
