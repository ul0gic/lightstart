declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        code: string;
        language: string;
        title: string;
        lineNumbers: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        copy: true;
        foldAt: number;
        expanded: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        wrap: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        highlight: string;
    };
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        code: string;
        language: string;
        title: string;
        lineNumbers: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        copy: true;
        foldAt: number;
        expanded: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        wrap: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        highlight: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
