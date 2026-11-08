declare const _default: Omit<{
    tag: string;
    props: {
        for: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        text: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        required: false;
        inline: false;
    };
    style: boolean;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        for: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        text: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        required: false;
        inline: false;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
