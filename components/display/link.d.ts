declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        content: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        external: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        skipRoute: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        hideLabel: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        disabled: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        alt: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        type: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        href: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        rel: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        related: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        ref: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        icon: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        iconSize: string;
        tooltip: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        tooltipPosition: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "top";
            readonly enum: readonly ["top", "bottom", "left", "right"];
        }>;
        active: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        activeMatch: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        exact: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        confirmation: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        popovertarget: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        popovertargetaction: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        tabindex: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        ariaLabel: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        ariaPressed: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
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
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        content: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        external: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        skipRoute: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        hideLabel: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        disabled: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        alt: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        type: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        href: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        rel: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        related: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        ref: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        icon: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        iconSize: string;
        tooltip: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        tooltipPosition: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "top";
            readonly enum: readonly ["top", "bottom", "left", "right"];
        }>;
        active: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        activeMatch: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        exact: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        confirmation: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        popovertarget: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        popovertargetaction: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        tabindex: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        ariaLabel: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        ariaPressed: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
