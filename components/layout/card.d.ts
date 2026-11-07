declare const _default: Omit<{
    tag: string;
    extends: string;
    style: boolean;
    props: {
        padding: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg"];
        }>;
        borderWidth: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "1";
            readonly enum: readonly ["none", "0", "1", "2", "3"];
        }>;
        borderStyle: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "solid";
            readonly enum: readonly ["solid", "dashed", "dotted"];
        }>;
        shadow: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "none";
            readonly enum: readonly ["none", "sm", "md", "lg"];
        }>;
        hover: false;
        gap: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl"];
        }>;
        href: string;
        icon: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        heading: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        ariaLabel: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    /** @param {MouseEvent} e */
    _click(e: MouseEvent): undefined;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        padding: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg"];
        }>;
        borderWidth: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "1";
            readonly enum: readonly ["none", "0", "1", "2", "3"];
        }>;
        borderStyle: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "solid";
            readonly enum: readonly ["solid", "dashed", "dotted"];
        }>;
        shadow: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "none";
            readonly enum: readonly ["none", "sm", "md", "lg"];
        }>;
        hover: false;
        gap: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl"];
        }>;
        href: string;
        icon: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        heading: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        ariaLabel: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
