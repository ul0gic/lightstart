declare const _default: Omit<{
    tag: string;
    props: {
        isEditing: false;
        value: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        editingValue: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        onSave: import("@lightstart/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "lg";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
    };
    _textClass(): "text-sm font-medium" | "text-base font-semibold" | "text-xl font-semibold";
    connected(): void;
    startEditing(): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    cancelEditing(): void;
    save(): Promise<void>;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        isEditing: false;
        value: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        editingValue: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        onSave: import("@lightstart/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "lg";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
