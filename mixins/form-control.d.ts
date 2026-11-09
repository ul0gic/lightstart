export const withFormControl: {
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
        _labelledBy: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
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
    /**
     * The id of the inner native control. It is never the host's own id: an
     * outside `<label for>` points at the host, which forwards the activation to
     * this control, so the two elements must not share one id.
     * @returns {string}
     */
    getInputId(): string;
    connected(): void;
    /**
     * A label outside the host points at the host, and the platform sends its
     * activation here as a click on the host itself. Send it on to the inner
     * control: a checkbox or radio fires its own click so a label toggles it,
     * anything else takes focus.
     * @param {MouseEvent} e
     */
    _onHostClick(e: MouseEvent): void;
    updated(): void;
    /**
     * Name the inner control from the labels pointing at the host, plus the
     * host's own `label` when it draws one. With none outside, drop the
     * `aria-labelledby` this mixin set and leave one the component set alone.
     */
    _syncLabelledBy(): void;
    /** @param {unknown} value */
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
        _labelledBy: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
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
};
export default withFormControl;
import type { Renderable } from "../types.js";
import type { Prop } from "../types.js";
