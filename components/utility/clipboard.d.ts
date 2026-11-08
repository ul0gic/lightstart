declare const _default: Omit<{
    tag: string;
    icons: string[];
    style: boolean;
    props: {
        text: string;
        label: string;
        copiedLabel: string;
        iconOnly: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["xs", "sm", "md"];
        }>;
        timeout: number;
        copied: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        _manual: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
            readonly defaultValue: false;
        }>;
        _timer: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: 0;
            readonly reactive: false;
        }>;
    };
    events: {
        copy: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
    };
    _copy(): Promise<void>;
    _copied(): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    /** @param {KeyboardEvent} e */
    _fieldKeydown(e: KeyboardEvent): void;
    /** @param {ClipboardEvent} e */
    _fieldCopy(e: ClipboardEvent): void;
    _closeField(): void;
    disconnected(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        text: string;
        label: string;
        copiedLabel: string;
        iconOnly: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["xs", "sm", "md"];
        }>;
        timeout: number;
        copied: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        _manual: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
            readonly defaultValue: false;
        }>;
        _timer: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: 0;
            readonly reactive: false;
        }>;
    } | undefined;
    events?: {
        copy: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
