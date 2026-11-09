declare const _default: Omit<{
    tag: string;
    icons: string[];
    style: boolean;
    props: {
        docs: Prop<SearchDoc[]>;
        suggestions: Prop<SearchDoc[]>;
        groups: Prop<string[]>;
        placeholder: string;
        shortcut: string;
        open: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        hideTrigger: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        compact: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        limit: number;
        renderResult: import("@lightstart/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
    };
    events: {
        "command-select": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
    };
    _keys(): string[];
    connected(): void;
    _focusSearch(): void;
    /** @param {Event} e */
    _closed(e: Event): void;
    /** @param {CustomEvent<SearchDoc>} e */
    _select(e: CustomEvent<SearchDoc>): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        docs: Prop<SearchDoc[]>;
        suggestions: Prop<SearchDoc[]>;
        groups: Prop<string[]>;
        placeholder: string;
        shortcut: string;
        open: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        hideTrigger: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        compact: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        limit: number;
        renderResult: import("@lightstart/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
    } | undefined;
    events?: {
        "command-select": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { SearchDoc } from "../types.js";
import type { Prop } from "../types.js";
