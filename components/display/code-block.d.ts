declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        code: string;
        language: string;
        title: string;
        lineNumbers: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        copy: true;
        foldAt: number;
        expanded: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        wrap: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        highlight: string;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        code: string;
        language: string;
        title: string;
        lineNumbers: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        copy: true;
        foldAt: number;
        expanded: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        wrap: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        highlight: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
