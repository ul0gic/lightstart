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
    style: boolean;
    props: {
        value: string;
        alpha: false;
        swatches: Prop<string[]>;
        allowClear: false;
        _draft: string;
    };
    connected(): void;
    /** @param {string} next @param {"input" | "change"} event */
    _commit(next: string, event: "input" | "change"): void;
    _locked(): boolean;
    /** @param {Event} e */
    _onPicker(e: Event): void;
    /** @param {Event} e */
    _onHexInput(e: Event): void;
    /** @param {Event} e */
    _onHexDone(e: Event): void;
    /** @param {Event} e */
    _onAlpha(e: Event): void;
    /** @param {string} swatch */
    _pickSwatch(swatch: string): void;
    _clear(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        value: string;
        alpha: false;
        swatches: Prop<string[]>;
        allowClear: false;
        _draft: string;
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
