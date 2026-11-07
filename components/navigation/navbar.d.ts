declare const _default: Omit<{
    tag: string;
    props: {
        fixed: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "none";
            readonly enum: readonly ["none", "top", "bottom"];
        }>;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "bordered", "floating"];
        }>;
        transparent: false;
        mobileMenuOpen: false;
        collapsed: false;
        collapsible: false;
        direction: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["vertical", "horizontal"];
            readonly defaultValue: "horizontal";
        }>;
    };
    style: boolean;
    toggleMobileMenu(): void;
    toggle(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        fixed: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "none";
            readonly enum: readonly ["none", "top", "bottom"];
        }>;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "bordered", "floating"];
        }>;
        transparent: false;
        mobileMenuOpen: false;
        collapsed: false;
        collapsible: false;
        direction: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["vertical", "horizontal"];
            readonly defaultValue: "horizontal";
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
