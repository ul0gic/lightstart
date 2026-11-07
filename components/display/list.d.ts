declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        spacing: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl"];
        }>;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "unordered";
            readonly enum: readonly ["ordered", "unordered", "unstyled"];
        }>;
    };
    /** @this {HTMLElement} */
    connected(this: HTMLElement): void;
}, "events"> & {
    props?: {
        spacing: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["none", "xs", "sm", "md", "lg", "xl"];
        }>;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "unordered";
            readonly enum: readonly ["ordered", "unordered", "unstyled"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
