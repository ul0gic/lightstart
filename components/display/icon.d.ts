declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        name: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        solid: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        bold: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        color: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["primary", "secondary", "success", "danger", "warning", "info", "inverse"];
        }>;
    };
    /**
     * A page whose stylesheet has every rule (a build) leaves `icons.load` null,
     * so there is nothing to fetch. Otherwise each name is loaded once, and the
     * solid and the bold rule are drawn only once an element wants them.
     * @param {string} name
     * @param {boolean} [solid]
     * @param {boolean} [bold]
     */
    getIcon(name: string, solid?: boolean, bold?: boolean): Promise<void> | undefined;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    willUpdate({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): Promise<void> | undefined;
    connected(): Promise<void> | undefined;
    applyNumericSize(): void;
    render(): string | null;
}, "events"> & {
    props?: {
        name: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        solid: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        bold: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        color: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["primary", "secondary", "success", "danger", "warning", "info", "inverse"];
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
