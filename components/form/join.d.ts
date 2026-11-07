declare const _default: Omit<{
    tag: string;
    props: {
        orientation: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "horizontal";
            readonly enum: readonly ["horizontal", "vertical"];
        }>;
    };
    style: boolean;
}, "events"> & {
    props?: {
        orientation: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "horizontal";
            readonly enum: readonly ["horizontal", "vertical"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
