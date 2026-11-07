declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"];
        }>;
        weight: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["normal", "medium", "semibold", "bold", "black"];
        }>;
        tracking: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["tight", "normal", "wide", "wider", "widest"];
        }>;
        color: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["primary", "secondary", "success", "danger", "warning", "info", "muted", "inverse"];
        }>;
        muted: false;
        mono: false;
        align: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["left", "center", "right"];
        }>;
        transform: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["capitalize", "uppercase", "lowercase", "none"];
        }>;
        eyebrow: false;
        level: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly min: 1;
            readonly max: 6;
        }>;
    };
    updated(): void;
}, "events"> & {
    props?: {
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"];
        }>;
        weight: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["normal", "medium", "semibold", "bold", "black"];
        }>;
        tracking: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["tight", "normal", "wide", "wider", "widest"];
        }>;
        color: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["primary", "secondary", "success", "danger", "warning", "info", "muted", "inverse"];
        }>;
        muted: false;
        mono: false;
        align: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["left", "center", "right"];
        }>;
        transform: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["capitalize", "uppercase", "lowercase", "none"];
        }>;
        eyebrow: false;
        level: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly min: 1;
            readonly max: 6;
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
