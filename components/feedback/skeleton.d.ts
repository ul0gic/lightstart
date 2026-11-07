declare const _default: Omit<{
    tag: string;
    props: {
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "text";
            readonly enum: readonly ["text", "circle", "rect", "rounded"];
        }>;
        width: string;
        height: string;
        count: number;
        animated: true;
    };
    style: boolean;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
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
