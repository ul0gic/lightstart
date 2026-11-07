declare const _default: Omit<{
    tag: string;
    icons: string[];
    style: boolean;
    props: {
        width: string;
        compact: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        inverted: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        navItem: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        label: string;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        dark: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    getIcon(): "moon" | "sun";
    getLabel(): "Dark Mode" | "Light Mode";
    /** @param {Event} e */
    toggle(e: Event): void;
    connected(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        width: string;
        compact: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        inverted: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        navItem: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        label: string;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        dark: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
