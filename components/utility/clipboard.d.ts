declare const _default: Omit<{
    tag: string;
    icons: string[];
    style: boolean;
    props: {
        text: string;
        label: string;
        copiedLabel: string;
        iconOnly: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["xs", "sm", "md"];
        }>;
        timeout: number;
        copied: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        _timer: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: 0;
            readonly reactive: false;
        }>;
    };
    events: {
        copy: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    _copy(): Promise<void>;
    disconnected(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        text: string;
        label: string;
        copiedLabel: string;
        iconOnly: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["xs", "sm", "md"];
        }>;
        timeout: number;
        copied: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        _timer: import("@bootstrapp/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: 0;
            readonly reactive: false;
        }>;
    } | undefined;
    events?: {
        copy: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
