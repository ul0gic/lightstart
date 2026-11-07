declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        src: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        alt: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        aspect: string;
        scrim: true;
        _hasBody: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
        }>;
    };
    /** @param {Event} e */
    _onBodyChange(e: Event): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        src: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        alt: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        aspect: string;
        scrim: true;
        _hasBody: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
