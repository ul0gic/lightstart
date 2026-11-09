declare const _default: Omit<{
    tag: string;
    props: {
        label: string;
        icon: string;
        expanded: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        active: false;
        modified: false;
    };
    events: {
        toggle: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        select: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
    };
    icons: string[];
    style: boolean;
    _hasChildren(): boolean;
    /** @param {Event} e */
    _activate(e: Event): void;
    _reflect(): void;
    firstUpdated(): void;
    updated(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        label: string;
        icon: string;
        expanded: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        active: false;
        modified: false;
    } | undefined;
    events?: {
        toggle: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        select: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
