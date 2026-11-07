declare const _default: Omit<{
    tag: string;
    props: {
        layout: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "auto";
            readonly enum: readonly ["auto", "mobile", "desktop"];
        }>;
        useSafeArea: true;
        multiPane: false;
        currentRoute: string;
        routes: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {}>;
        height: string;
        currentBreakpoint: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "xs";
        }>;
        isMobile: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
    };
    style: boolean;
    connected(): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    /**
     * @param {string} path
     * @param {Record<string, string>} [params]
     */
    navigate(path: string, params?: Record<string, string>): void;
    goBack(): void;
    scrollToTop(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
    renderMobileLayout(): import("@bootstrapp/light/html").TemplateResult;
    renderDesktopLayout(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        layout: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "auto";
            readonly enum: readonly ["auto", "mobile", "desktop"];
        }>;
        useSafeArea: true;
        multiPane: false;
        currentRoute: string;
        routes: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {}>;
        height: string;
        currentBreakpoint: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "xs";
        }>;
        isMobile: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
