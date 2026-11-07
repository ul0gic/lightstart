declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        items: Prop<TocItem[]>;
        title: string;
        active: string;
        depth: number;
        root: string;
        offset: number;
        _current: string;
        _observer: Prop<IntersectionObserver | null>;
        _watched: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly reactive: false;
        }>;
    };
    events: {
        "toc-change": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    _shown(): TocItem[];
    _watch(): void;
    connected(): void;
    updated(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        items: Prop<TocItem[]>;
        title: string;
        active: string;
        depth: number;
        root: string;
        offset: number;
        _current: string;
        _observer: Prop<IntersectionObserver | null>;
        _watched: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly reactive: false;
        }>;
    } | undefined;
    events?: {
        "toc-change": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { TocItem } from "../types.js";
import type { Prop } from "../types.js";
