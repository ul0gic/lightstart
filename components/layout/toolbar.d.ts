declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["xs", "sm", "md"];
        }>;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "floating", "ghost"];
        }>;
        align: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "start";
            readonly enum: readonly ["start", "center", "end", "between"];
        }>;
        vertical: false;
        wrap: false;
        scrollable: false;
    };
    connected(): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
}, "events"> & {
    props?: {
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["xs", "sm", "md"];
        }>;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "floating", "ghost"];
        }>;
        align: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "start";
            readonly enum: readonly ["start", "center", "end", "between"];
        }>;
        vertical: false;
        wrap: false;
        scrollable: false;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
