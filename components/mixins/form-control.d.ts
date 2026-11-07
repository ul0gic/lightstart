export const withFormControl: {
    formAssociated: boolean;
    props: {
        label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        name: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        id: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        value: Prop<Renderable>;
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
    /** @param {unknown} value */
    syncFormValue(value: unknown): void;
} & {
    props?: {
        label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        name: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        id: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        value: Prop<Renderable>;
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
};
export default withFormControl;
import type { Renderable } from "../types.js";
import type { Prop } from "../types.js";
