declare const _default: Omit<{
    tag: string;
    props: {
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "bordered", "elevated"];
        }>;
        padding: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "sm", "md", "lg"];
        }>;
    };
    style: boolean;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "bordered", "elevated"];
        }>;
        padding: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "sm", "md", "lg"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
