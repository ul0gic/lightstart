declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        max: number;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
        }>;
        _overflow: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly attribute: false;
            readonly defaultValue: 0;
        }>;
    };
    _sync(): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        max: number;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
        }>;
        _overflow: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly attribute: false;
            readonly defaultValue: 0;
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
