declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        direction: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "row";
            readonly enum: readonly ["row", "column", "row-reverse", "column-reverse"];
        }>;
        gap: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
        }>;
        align: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "stretch";
            readonly enum: readonly ["start", "center", "end", "stretch", "baseline"];
        }>;
        justify: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "start";
            readonly enum: readonly ["start", "center", "end", "space-between", "space-around", "space-evenly"];
        }>;
        wrap: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "nowrap";
            readonly enum: readonly ["wrap", "nowrap", "wrap-reverse"];
        }>;
    };
}, "events"> & {
    props?: {
        direction: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "row";
            readonly enum: readonly ["row", "column", "row-reverse", "column-reverse"];
        }>;
        gap: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
        }>;
        align: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "stretch";
            readonly enum: readonly ["start", "center", "end", "stretch", "baseline"];
        }>;
        justify: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "start";
            readonly enum: readonly ["start", "center", "end", "space-between", "space-around", "space-evenly"];
        }>;
        wrap: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "nowrap";
            readonly enum: readonly ["wrap", "nowrap", "wrap-reverse"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
