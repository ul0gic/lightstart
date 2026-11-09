declare const _default: Omit<{
    tag: string;
    props: {
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "text";
            readonly enum: readonly ["text", "circle", "rect", "rounded"];
        }>;
        width: string;
        height: string;
        count: number;
        animated: true;
    };
    style: boolean;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "text";
            readonly enum: readonly ["text", "circle", "rect", "rounded"];
        }>;
        width: string;
        height: string;
        count: number;
        animated: true;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
