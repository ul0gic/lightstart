declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        href: string;
        icon: string;
        iconSize: string;
        label: string;
        hint: string;
        meta: string;
        chevron: false;
        flat: false;
        unread: false;
        wrap: false;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        disabled: false;
        selected: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        static: false;
    };
    events: {
        select: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    /** @param {MouseEvent} e */
    _click(e: MouseEvent): undefined;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        href: string;
        icon: string;
        iconSize: string;
        label: string;
        hint: string;
        meta: string;
        chevron: false;
        flat: false;
        unread: false;
        wrap: false;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        disabled: false;
        selected: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        static: false;
    } | undefined;
    events?: {
        select: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
