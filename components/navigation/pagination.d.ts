declare const _default: Omit<{
    tag: string;
    props: {
        current: number;
        total: number;
        siblings: number;
        showFirst: true;
        showLast: true;
        showPrevNext: true;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "simple", "loadmore", "pager"];
        }>;
        previousLink: Prop<PagerLink | null>;
        nextLink: Prop<PagerLink | null>;
        loadmoreText: string;
        hasMore: true;
        hrefFor: Prop<((page: number) => string) | null>;
    };
    style: boolean;
    /** @param {number} page */
    goToPage(page: number): void;
    next(): void;
    prev(): void;
    _loadMore(): void;
    _getPageNumbers(): (number | "...")[];
    /**
     * @param {number} page
     * @param {{ cls?: string, label: string, content: import("@lightstart/light/html").TemplateValue, disabled?: boolean }} arg
     */
    _ctrl(page: number, { cls, label, content, disabled }: {
        cls?: string;
        label: string;
        content: import("@lightstart/light/html").TemplateValue;
        disabled?: boolean;
    }): import("@lightstart/light/html").TemplateResult;
    renderDefault(): import("@lightstart/light/html").TemplateResult;
    renderSimple(): import("@lightstart/light/html").TemplateResult;
    renderLoadmore(): import("@lightstart/light/html").TemplateResult;
    /**
     * @param {PagerLink | null} link
     * @param {"previous" | "next"} side
     */
    _pagerLink(link: PagerLink | null, side: "previous" | "next"): import("@lightstart/light/html").TemplateResult;
    renderPager(): import("@lightstart/light/html").TemplateResult;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        current: number;
        total: number;
        siblings: number;
        showFirst: true;
        showLast: true;
        showPrevNext: true;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "simple", "loadmore", "pager"];
        }>;
        previousLink: Prop<PagerLink | null>;
        nextLink: Prop<PagerLink | null>;
        loadmoreText: string;
        hasMore: true;
        hrefFor: Prop<((page: number) => string) | null>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { PagerLink } from "../types.js";
import type { Prop } from "../types.js";
