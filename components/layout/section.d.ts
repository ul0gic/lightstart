declare const _default: Omit<{
    tag: string;
    props: {
        padding: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "sm", "md", "lg", "xl"];
        }>;
        maxWidth: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "lg";
            readonly enum: readonly ["sm", "md", "lg", "xl", "2xl", "full"];
        }>;
        centered: false;
    };
    style: boolean;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        padding: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "sm", "md", "lg", "xl"];
        }>;
        maxWidth: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "lg";
            readonly enum: readonly ["sm", "md", "lg", "xl", "2xl", "full"];
        }>;
        centered: false;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
