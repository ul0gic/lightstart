declare const _default: Omit<{
    tag: string;
    props: {
        title: string;
        fixed: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        transparent: false;
        showBackButton: false;
        showShadow: true;
        elevation: number;
    };
    style: boolean;
    handleBackClick(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        title: string;
        fixed: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        transparent: false;
        showBackButton: false;
        showShadow: true;
        elevation: number;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
