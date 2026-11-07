declare const _default: Omit<{
    tag: string;
    props: {
        columns: string;
        minColumnWidth: string;
        cols: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        rows: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        gap: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
        }>;
        align: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "stretch";
            readonly enum: readonly ["start", "center", "end", "stretch"];
        }>;
        justify: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "start";
            readonly enum: readonly ["start", "center", "end", "stretch"];
        }>;
        _effectiveCols: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly attribute: false;
        }>;
        _breakpoint: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
    };
    style: boolean;
    connected(): void;
    _updateResponsiveCols(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        columns: string;
        minColumnWidth: string;
        cols: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        rows: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        gap: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
        }>;
        align: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "stretch";
            readonly enum: readonly ["start", "center", "end", "stretch"];
        }>;
        justify: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "start";
            readonly enum: readonly ["start", "center", "end", "stretch"];
        }>;
        _effectiveCols: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly attribute: false;
        }>;
        _breakpoint: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
