declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        src: string;
        alt: string;
        icon: string;
        label: string;
        meta: string;
        badge: string;
        aspect: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "1/1";
            readonly enum: string[];
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg", "fill"];
        }>;
        selected: false;
        disabled: false;
        loading: false;
        interactive: false;
    };
    events: {
        select: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {}>;
    };
    connected(): void;
    firstUpdated(): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    _reflectInteractive(): void;
    /**
     * The host is the button, so a click anywhere on the tile and a key on the
     * focused host both land here. A control inside the tile keeps its own.
     * @param {Event} e
     */
    _activate(e: Event): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        src: string;
        alt: string;
        icon: string;
        label: string;
        meta: string;
        badge: string;
        aspect: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "1/1";
            readonly enum: string[];
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg", "fill"];
        }>;
        selected: false;
        disabled: false;
        loading: false;
        interactive: false;
    } | undefined;
    events?: {
        select: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {}>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
