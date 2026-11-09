declare const _default: Omit<{
    tag: string;
    icons: string[];
    style: boolean;
    props: {
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "success", "warning", "error", "info", "note", "tip"];
        }>;
        icon: string;
        title: string;
    };
    /** @param {string} variant */
    _getIcon(variant: string): string;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "success", "warning", "error", "info", "note", "tip"];
        }>;
        icon: string;
        title: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
