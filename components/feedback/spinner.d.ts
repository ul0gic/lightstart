declare const _default: Omit<{
    tag: string;
    props: {
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "circular";
            readonly enum: readonly ["circular", "dots", "bars"];
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
        }>;
        primary: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        secondary: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        success: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        danger: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        warning: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        info: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
    };
    style: boolean;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "circular";
            readonly enum: readonly ["circular", "dots", "bars"];
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
        }>;
        primary: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        secondary: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        success: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        danger: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        warning: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        info: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
