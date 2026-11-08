declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        padding: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "sm", "md", "lg"];
        }>;
        overflow: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["visible", "hidden", "auto", "scroll"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["default", "filled", "outlined", "elevated"];
        }>;
    };
}, "events"> & {
    props?: {
        padding: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "sm", "md", "lg"];
        }>;
        overflow: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["visible", "hidden", "auto", "scroll"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["default", "filled", "outlined", "elevated"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
