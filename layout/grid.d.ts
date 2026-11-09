declare const _default: Omit<{
    tag: string;
    props: {
        columns: string;
        minColumnWidth: string;
        cols: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        rows: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        gap: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
        }>;
        align: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "stretch";
            readonly enum: readonly ["start", "center", "end", "stretch"];
        }>;
        justify: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "start";
            readonly enum: readonly ["start", "center", "end", "stretch"];
        }>;
        _effectiveCols: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly attribute: false;
        }>;
        _breakpoint: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
    };
    style: boolean;
    connected(): void;
    _updateResponsiveCols(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        columns: string;
        minColumnWidth: string;
        cols: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        rows: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        gap: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
        }>;
        align: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "stretch";
            readonly enum: readonly ["start", "center", "end", "stretch"];
        }>;
        justify: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "start";
            readonly enum: readonly ["start", "center", "end", "stretch"];
        }>;
        _effectiveCols: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly attribute: false;
        }>;
        _breakpoint: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
