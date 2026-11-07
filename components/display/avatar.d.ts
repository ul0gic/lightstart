declare const _default: Omit<{
    tag: string;
    props: {
        src: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        name: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        seed: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
        }>;
        shape: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "circle";
            readonly enum: readonly ["circle", "square", "rounded"];
        }>;
        status: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["online", "offline", "busy", "away"];
        }>;
        ring: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly enum: readonly ["", "muted", "primary", "secondary", "highlight", "bar"];
        }>;
        icon: string;
        _failed: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
            readonly defaultValue: false;
        }>;
    };
    style: boolean;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    willUpdate({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): string | undefined;
    /** @param {string} name */
    getInitials(name: string): string | null;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        src: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        name: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        seed: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
        }>;
        shape: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "circle";
            readonly enum: readonly ["circle", "square", "rounded"];
        }>;
        status: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["online", "offline", "busy", "away"];
        }>;
        ring: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly enum: readonly ["", "muted", "primary", "secondary", "highlight", "bar"];
        }>;
        icon: string;
        _failed: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
            readonly defaultValue: false;
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
