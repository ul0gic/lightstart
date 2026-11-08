declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        src: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        alt: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        aspect: string;
        scrim: true;
        _hasBody: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
        }>;
    };
    /** @param {Event} e */
    _onBodyChange(e: Event): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        src: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        alt: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        aspect: string;
        scrim: true;
        _hasBody: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
