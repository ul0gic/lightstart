declare const _default: Omit<{
    mixins: [{
        formAssociated: boolean;
        props: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: import("../types").Prop<import("../types").Renderable>;
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
            _internals: import("../types").Prop<ElementInternals | null>;
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
            value: import("../types").Prop<import("../types").Renderable>;
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
            _internals: import("../types").Prop<ElementInternals | null>;
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
        rows: number;
        cols: number;
        maxlength: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: null;
        }>;
        minlength: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: null;
        }>;
        resize: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "vertical";
            readonly enum: readonly ["none", "both", "horizontal", "vertical"];
        }>;
    };
    style: boolean;
    connected(): void;
    /** @param {Event} e */
    handleInput(e: Event): void;
    /** @param {Event} e */
    handleChange(e: Event): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        rows: number;
        cols: number;
        maxlength: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: null;
        }>;
        minlength: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: null;
        }>;
        resize: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "vertical";
            readonly enum: readonly ["none", "both", "horizontal", "vertical"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [{
        formAssociated: boolean;
        props: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: import("../types").Prop<import("../types").Renderable>;
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
            _internals: import("../types").Prop<ElementInternals | null>;
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
            value: import("../types").Prop<import("../types").Renderable>;
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
            _internals: import("../types").Prop<ElementInternals | null>;
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
