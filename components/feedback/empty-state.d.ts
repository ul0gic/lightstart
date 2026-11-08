declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        icon: string;
        title: string;
        headingLevel: number;
        description: string;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
    };
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        icon: string;
        title: string;
        headingLevel: number;
        description: string;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
