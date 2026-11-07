declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        content: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        external: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        skipRoute: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        hideLabel: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        disabled: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        name: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        alt: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        type: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        href: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        rel: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        related: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        ref: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        icon: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        iconSize: string;
        tooltip: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        tooltipPosition: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "top";
            readonly enum: readonly ["top", "bottom", "left", "right"];
        }>;
        active: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        activeMatch: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        exact: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        confirmation: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        popovertarget: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        popovertargetaction: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        tabindex: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        ariaLabel: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        ariaPressed: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    _isActive(): boolean;
    connected(): void;
    /**
     * A click dispatched on the host itself (`el.click()`, a synthetic one in a
     * test) never reaches the anchor inside it, so it is handed on. The
     * forwarded event does not bubble, so a `@click` listener on the host still
     * fires exactly once.
     * @param {MouseEvent} e
     */
    _forwardHostClick(e: MouseEvent): void;
    /** @param {Event} e */
    _handlePopoverTarget(e: Event): boolean;
    /** @param {MouseEvent} e */
    _defaultOnClick(e: MouseEvent): void;
    _getHref(): string;
    firstUpdated(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        content: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        external: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        skipRoute: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        hideLabel: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        disabled: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        name: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        alt: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        type: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        href: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        rel: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        related: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        ref: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        icon: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        iconSize: string;
        tooltip: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        tooltipPosition: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "top";
            readonly enum: readonly ["top", "bottom", "left", "right"];
        }>;
        active: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        activeMatch: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        exact: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        confirmation: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        popovertarget: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        popovertargetaction: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        tabindex: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        ariaLabel: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        ariaPressed: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
