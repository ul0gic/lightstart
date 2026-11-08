declare const _default: Omit<{
    tag: string;
    props: {
        value: number;
        max: number;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "success", "danger", "warning", "info"];
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        showLabel: false;
        striped: false;
        animated: false;
        label: string;
        indeterminate: false;
    };
    style: boolean;
    getPercentage(): number;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        value: number;
        max: number;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "success", "danger", "warning", "info"];
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        showLabel: false;
        striped: false;
        animated: false;
        label: string;
        indeterminate: false;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
