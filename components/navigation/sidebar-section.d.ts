declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        label: string;
        count: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: null;
        }>;
        collapsed: false;
        fill: false;
        static: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        icon: string;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["sm", "md"];
        }>;
    };
    events: {
        toggle: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly collapsed: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        label: string;
        count: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: null;
        }>;
        collapsed: false;
        fill: false;
        static: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        icon: string;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["sm", "md"];
        }>;
    } | undefined;
    events?: {
        toggle: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly collapsed: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
