declare const _default: Omit<{
    tag: string;
    extends: string;
    style: boolean;
    props: {
        padding: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg"];
        }>;
        borderWidth: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "1";
            readonly enum: readonly ["none", "0", "1", "2", "3"];
        }>;
        borderStyle: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "solid";
            readonly enum: readonly ["solid", "dashed", "dotted"];
        }>;
        shadow: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "none";
            readonly enum: readonly ["none", "sm", "md", "lg"];
        }>;
        hover: false;
        gap: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl"];
        }>;
        href: string;
        icon: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        heading: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        ariaLabel: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
    };
    /** @param {MouseEvent} e */
    _click(e: MouseEvent): undefined;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        padding: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg"];
        }>;
        borderWidth: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "1";
            readonly enum: readonly ["none", "0", "1", "2", "3"];
        }>;
        borderStyle: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "solid";
            readonly enum: readonly ["solid", "dashed", "dotted"];
        }>;
        shadow: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "none";
            readonly enum: readonly ["none", "sm", "md", "lg"];
        }>;
        hover: false;
        gap: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl"];
        }>;
        href: string;
        icon: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        heading: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        ariaLabel: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
