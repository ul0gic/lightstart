declare const _default: Omit<{
    tag: string;
    icons: string[];
    props: {
        layout: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "auto";
            readonly enum: readonly ["auto", "mobile", "desktop"];
        }>;
        breakpoint: string;
        asideBreakpoint: string;
        navWidth: string;
        asideWidth: string;
        headerHeight: string;
        navOpen: false;
        isMobile: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly defaultValue: false;
            readonly internal: true;
        }>;
        isWide: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly defaultValue: true;
            readonly internal: true;
        }>;
    };
    events: {
        "nav-toggle": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        "layout-change": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    style: boolean;
    /** @param {string} name */
    _hasSlot(name: string): boolean;
    /** @param {boolean} open */
    _setNav(open: boolean): void;
    connected(): void;
    /** @param {string} bp */
    _checkMobile(bp: string): boolean;
    render(): import("@bootstrapp/light/html").TemplateResult;
    _vars(): string;
    renderMobile(): import("@bootstrapp/light/html").TemplateResult;
    renderDesktop(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        layout: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "auto";
            readonly enum: readonly ["auto", "mobile", "desktop"];
        }>;
        breakpoint: string;
        asideBreakpoint: string;
        navWidth: string;
        asideWidth: string;
        headerHeight: string;
        navOpen: false;
        isMobile: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly defaultValue: false;
            readonly internal: true;
        }>;
        isWide: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly defaultValue: true;
            readonly internal: true;
        }>;
    } | undefined;
    events?: {
        "nav-toggle": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        "layout-change": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
