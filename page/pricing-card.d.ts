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
        name: string;
        price: string;
        period: string;
        description: string;
        features: Prop<string[]>;
        cta: Prop<PricingCta>;
        highlighted: false;
    };
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        name: string;
        price: string;
        period: string;
        description: string;
        features: Prop<string[]>;
        cta: Prop<PricingCta>;
        highlighted: false;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
import type { PricingCta } from "../types.js";
