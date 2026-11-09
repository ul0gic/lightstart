declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        label: string;
        count: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: null;
        }>;
        collapsed: false;
        fill: false;
        static: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        icon: string;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["sm", "md"];
        }>;
    };
    events: {
        toggle: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly collapsed: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    };
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        label: string;
        count: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: null;
        }>;
        collapsed: false;
        fill: false;
        static: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        icon: string;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["sm", "md"];
        }>;
    } | undefined;
    events?: {
        toggle: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly collapsed: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
