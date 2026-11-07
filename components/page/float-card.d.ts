declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        animation: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "none";
            readonly enum: readonly ["none", "slow", "delayed", "fast"];
        }>;
        hide: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly enum: readonly ["", "sm", "md", "lg"];
        }>;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        animation: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "none";
            readonly enum: readonly ["none", "slow", "delayed", "fast"];
        }>;
        hide: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly enum: readonly ["", "sm", "md", "lg"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
