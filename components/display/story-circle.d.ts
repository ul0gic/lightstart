declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        src: string;
        name: string;
        seed: string;
        label: string;
        sub: string;
        href: string;
        ring: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly enum: readonly ["", "muted", "primary", "secondary", "highlight", "bar"];
        }>;
        badgeIcon: string;
        badgeText: string;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["md", "lg"];
        }>;
        masked: false;
    };
    events: {
        select: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly href: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    };
    /** @param {MouseEvent} e */
    _pick(e: MouseEvent): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        src: string;
        name: string;
        seed: string;
        label: string;
        sub: string;
        href: string;
        ring: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly enum: readonly ["", "muted", "primary", "secondary", "highlight", "bar"];
        }>;
        badgeIcon: string;
        badgeText: string;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["md", "lg"];
        }>;
        masked: false;
    } | undefined;
    events?: {
        select: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly href: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
