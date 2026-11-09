declare const _default: Omit<{
    tag: string;
    props: {
        _tabsBaseId: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
        _raf: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: 0;
        }>;
        activeTab: number;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "pills", "underline"];
        }>;
        vertical: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        responsive: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        fullWidth: false;
    };
    style: boolean;
    connected(): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    firstUpdated(): void;
    equalizeTabWidths(): void;
    updateActivePanels(): void;
    /** @param {MouseEvent} e */
    selectTab(e: MouseEvent): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        _tabsBaseId: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
        _raf: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: 0;
        }>;
        activeTab: number;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "pills", "underline"];
        }>;
        vertical: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        responsive: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        fullWidth: false;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
