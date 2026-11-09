declare const _default: Omit<{
    tag: string;
    props: {
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "bordered", "compact", "flush", "sidebar"];
        }>;
        rounded: true;
        bordered: true;
    };
    style: boolean;
}, "events"> & {
    props?: {
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "bordered", "compact", "flush", "sidebar"];
        }>;
        rounded: true;
        bordered: true;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
