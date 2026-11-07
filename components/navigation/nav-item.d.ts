declare const _default: Omit<{
    tag: string;
    props: {
        icon: string;
        solid: false;
        bold: false;
        label: string;
        badge: string;
        dot: false;
        count: string;
        badgeVariant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "primary", "muted"];
        }>;
        active: false;
        prominent: false;
        href: string;
        activeMatch: string;
        exact: false;
        disabled: false;
        activeBg: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        iconOnly: false;
        stacked: false;
        tooltip: false;
        tooltipPosition: string;
        tooltipDelay: number;
        tooltipVariant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "danger", "info"];
        }>;
        tooltipSize: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        indicatorPosition: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "none";
            readonly enum: readonly ["none", "left", "right", "top", "bottom"];
        }>;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
    };
    style: boolean;
    _follow(): void;
    connected(): void;
    /** @param {MouseEvent} e */
    _handleClick(e: MouseEvent): undefined;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        icon: string;
        solid: false;
        bold: false;
        label: string;
        badge: string;
        dot: false;
        count: string;
        badgeVariant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "primary", "muted"];
        }>;
        active: false;
        prominent: false;
        href: string;
        activeMatch: string;
        exact: false;
        disabled: false;
        activeBg: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        iconOnly: false;
        stacked: false;
        tooltip: false;
        tooltipPosition: string;
        tooltipDelay: number;
        tooltipVariant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "danger", "info"];
        }>;
        tooltipSize: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        indicatorPosition: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "none";
            readonly enum: readonly ["none", "left", "right", "top", "bottom"];
        }>;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
