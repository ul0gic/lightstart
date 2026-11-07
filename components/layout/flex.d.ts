declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        direction: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "row";
            readonly enum: readonly ["row", "column", "row-reverse", "column-reverse"];
        }>;
        gap: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
        }>;
        align: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "stretch";
            readonly enum: readonly ["start", "center", "end", "stretch", "baseline"];
        }>;
        justify: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "start";
            readonly enum: readonly ["start", "center", "end", "space-between", "space-around", "space-evenly"];
        }>;
        wrap: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "nowrap";
            readonly enum: readonly ["wrap", "nowrap", "wrap-reverse"];
        }>;
    };
}, "events"> & {
    props?: {
        direction: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "row";
            readonly enum: readonly ["row", "column", "row-reverse", "column-reverse"];
        }>;
        gap: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
        }>;
        align: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "stretch";
            readonly enum: readonly ["start", "center", "end", "stretch", "baseline"];
        }>;
        justify: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "start";
            readonly enum: readonly ["start", "center", "end", "space-between", "space-around", "space-evenly"];
        }>;
        wrap: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "nowrap";
            readonly enum: readonly ["wrap", "nowrap", "wrap-reverse"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
