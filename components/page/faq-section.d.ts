declare const _default: Omit<{
    tag: string;
    style: boolean;
    themeTokens: {
        color: string[];
        text: string[];
        font: string[];
        spacing: string[];
        radius: string[];
        shadow: string[];
    };
    props: {
        eyebrow: string;
        headline: string;
        subheadline: string;
        items: Prop<FaqItem[]>;
        openItems: Prop<number[]>;
        sectionId: string;
    };
    /** @param {number} index */
    _toggle(index: number): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        eyebrow: string;
        headline: string;
        subheadline: string;
        items: Prop<FaqItem[]>;
        openItems: Prop<number[]>;
        sectionId: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { FaqItem } from "../types.js";
import type { Prop } from "../types.js";
