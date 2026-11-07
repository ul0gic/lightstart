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
        ring: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly enum: readonly ["", "muted", "primary", "secondary", "highlight", "bar"];
        }>;
        badgeIcon: string;
        badgeText: string;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["md", "lg"];
        }>;
        masked: false;
    };
    events: {
        select: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly href: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    };
    /** @param {MouseEvent} e */
    _pick(e: MouseEvent): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        src: string;
        name: string;
        seed: string;
        label: string;
        sub: string;
        href: string;
        ring: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly enum: readonly ["", "muted", "primary", "secondary", "highlight", "bar"];
        }>;
        badgeIcon: string;
        badgeText: string;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["md", "lg"];
        }>;
        masked: false;
    } | undefined;
    events?: {
        select: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly href: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
