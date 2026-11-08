declare const _default: Omit<{
    tag: string;
    icons: string[];
    style: boolean;
    props: {
        groups: Prop<NavTreeGroup[]>;
        open: Prop<string[]>;
        collapseAt: number;
        expanded: Prop<string[]>;
        active: string;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["sm", "md"];
        }>;
        _path: string;
    };
    events: {
        "nav-tree-toggle": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        "nav-tree-select": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
    };
    connected(): void;
    /** @param {string} id */
    _toggle(id: string): void;
    /** @param {string} id */
    _expand(id: string): void;
    /** @param {{ href: string, exact?: boolean }} item */
    _isActive(item: {
        href: string;
        exact?: boolean;
    }): boolean;
    /** @param {NavTreeGroup} group */
    _renderGroup(group: NavTreeGroup): import("@lightstart/light/html").TemplateResult;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        groups: Prop<NavTreeGroup[]>;
        open: Prop<string[]>;
        collapseAt: number;
        expanded: Prop<string[]>;
        active: string;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "sm";
            readonly enum: readonly ["sm", "md"];
        }>;
        _path: string;
    } | undefined;
    events?: {
        "nav-tree-toggle": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        "nav-tree-select": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { NavTreeGroup } from "../types.js";
import type { Prop } from "../types.js";
