declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        _initialized: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "bordered", "filled", "flush", "separated"];
        }>;
        single: false;
        rounded: true;
        openItems: never[];
    };
    connected(): void;
    updated(): void;
    _items(): Element[];
    _initItems(): void;
    _syncPanels(): void;
    /** @param {MouseEvent} e */
    _handleClick(e: MouseEvent): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        _initialized: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "bordered", "filled", "flush", "separated"];
        }>;
        single: false;
        rounded: true;
        openItems: never[];
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
