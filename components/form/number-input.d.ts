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
        _holdTimer: Prop<ReturnType<typeof setTimeout> | null>;
        value: Prop<number | null>;
        min: Prop<number | null>;
        max: Prop<number | null>;
        step: number;
        showButtons: true;
        stepper: false;
        unit: string;
        display: string;
        editing: false;
    };
    style: boolean;
    connected(): void;
    _updateFormValue(): void;
    /** @param {Event} e */
    handleInput(e: Event): void;
    /** @param {Event} e */
    handleChange(e: Event): void;
    /** @param {number} delta */
    nudge(delta: number): void;
    increment(): void;
    decrement(): void;
    /** @param {number} direction */
    _holdStart(direction: number): void;
    _holdStop(): void;
    disconnected(): void;
    _startEdit(): void;
    /** @param {string} raw */
    _commitEdit(raw: string): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    _renderStepper(): import("@bootstrapp/light/html").TemplateResult;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        _holdTimer: Prop<ReturnType<typeof setTimeout> | null>;
        value: Prop<number | null>;
        min: Prop<number | null>;
        max: Prop<number | null>;
        step: number;
        showButtons: true;
        stepper: false;
        unit: string;
        display: string;
        editing: false;
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
