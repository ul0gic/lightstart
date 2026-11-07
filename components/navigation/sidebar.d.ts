declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        position: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "left";
            readonly enum: readonly ["left", "right"];
        }>;
        collapsed: false;
        collapsible: true;
    };
    toggle(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        position: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
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
