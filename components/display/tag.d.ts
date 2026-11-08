declare const _default: Omit<{
    tag: string;
    props: {
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error", "info"];
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["xs", "sm", "md", "lg"];
        }>;
        count: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: null;
        }>;
        outlined: false;
        rounded: true;
        closable: false;
        clickable: false;
        selected: false;
        disabled: false;
    };
    style: boolean;
    /** @param {Event} e */
    handleClose(e: Event): void;
    /** @param {MouseEvent} e */
    handleClick(e: MouseEvent): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error", "info"];
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["xs", "sm", "md", "lg"];
        }>;
        count: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: null;
        }>;
        outlined: false;
        rounded: true;
        closable: false;
        clickable: false;
        selected: false;
        disabled: false;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
