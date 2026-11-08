declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["xs", "sm", "md"];
        }>;
    };
}, "events"> & {
    props?: {
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["xs", "sm", "md"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
