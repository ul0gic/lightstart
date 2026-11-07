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
        eyebrowIcon: string;
        headline: string;
        subheadline: string;
        steps: Prop<StepItem[]>;
        stepMockups: Prop<unknown[]>;
        footerCta: Prop<FooterCta | null>;
        sectionId: string;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        eyebrow: string;
        eyebrowIcon: string;
        headline: string;
        subheadline: string;
        steps: Prop<StepItem[]>;
        stepMockups: Prop<unknown[]>;
        footerCta: Prop<FooterCta | null>;
        sectionId: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { StepItem } from "../types.js";
import type { Prop } from "../types.js";
import type { FooterCta } from "../types.js";
