declare const _default: Omit<{
    tag: string;
    props: {
        fixed: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "none";
            readonly enum: readonly ["none", "top", "bottom"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "bordered", "floating"];
        }>;
        transparent: false;
        mobileMenuOpen: false;
        collapsed: false;
        collapsible: false;
        direction: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["vertical", "horizontal"];
            readonly defaultValue: "horizontal";
        }>;
    };
    style: boolean;
    toggleMobileMenu(): void;
    toggle(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        fixed: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "none";
            readonly enum: readonly ["none", "top", "bottom"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "bordered", "floating"];
        }>;
        transparent: false;
        mobileMenuOpen: false;
        collapsed: false;
        collapsible: false;
        direction: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["vertical", "horizontal"];
            readonly defaultValue: "horizontal";
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
