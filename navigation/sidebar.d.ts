declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        position: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "left";
            readonly enum: readonly ["left", "right"];
        }>;
        collapsed: false;
        collapsible: true;
    };
    toggle(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        position: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "left";
            readonly enum: readonly ["left", "right"];
        }>;
        collapsed: false;
        collapsible: true;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
