declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        padding: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "sm", "md", "lg"];
        }>;
        overflow: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["visible", "hidden", "auto", "scroll"];
        }>;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["default", "filled", "outlined", "elevated"];
        }>;
    };
}, "events"> & {
    props?: {
        padding: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "sm", "md", "lg"];
        }>;
        overflow: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["visible", "hidden", "auto", "scroll"];
        }>;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["default", "filled", "outlined", "elevated"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
