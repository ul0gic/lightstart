declare const _default: Omit<{
    mixins: [{
        formAssociated: boolean;
        props: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: import("../types.js").Prop<import("../types.js").Renderable>;
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
            _labelledBy: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
            _internals: import("../types.js").Prop<ElementInternals | null>;
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
        _onHostClick(e: MouseEvent): void;
        updated(): void;
        _syncLabelledBy(): void;
        syncFormValue(value: unknown): void;
    } & {
        props?: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: import("../types.js").Prop<import("../types.js").Renderable>;
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
            _labelledBy: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
            _internals: import("../types.js").Prop<ElementInternals | null>;
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
        _dragging: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
        value: number;
        min: number;
        max: number;
        step: number;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "primary";
            readonly enum: readonly ["primary", "secondary", "success", "warning", "error"];
        }>;
        nofill: false;
        steppers: false;
    };
    style: boolean;
    connected(): void;
    willUpdate(): void;
    firstUpdated(): void;
    updated(): void;
    _syncFill(): void;
    /** @param {boolean} force */
    _syncInput(force: boolean): void;
    _endDrag(): void;
    /**
     * @param {Event} e
     * @param {string} event
     */
    _commit(e: Event, event: string): void;
    /** @param {number} direction */
    _nudge(direction: number): void;
    /**
     * @param {number} direction
     * @param {string} label
     * @param {string} glyph
     */
    _stepper(direction: number, label: string, glyph: string): import("@lightstart/light/html").TemplateResult;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        _dragging: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
        value: number;
        min: number;
        max: number;
        step: number;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "primary";
            readonly enum: readonly ["primary", "secondary", "success", "warning", "error"];
        }>;
        nofill: false;
        steppers: false;
    } | undefined;
    events?: {} | undefined;
    mixins?: [{
        formAssociated: boolean;
        props: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: import("../types.js").Prop<import("../types.js").Renderable>;
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
            _labelledBy: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
            _internals: import("../types.js").Prop<ElementInternals | null>;
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
        _onHostClick(e: MouseEvent): void;
        updated(): void;
        _syncLabelledBy(): void;
        syncFormValue(value: unknown): void;
    } & {
        props?: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: import("../types.js").Prop<import("../types.js").Renderable>;
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
            _labelledBy: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
            _internals: import("../types.js").Prop<ElementInternals | null>;
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
