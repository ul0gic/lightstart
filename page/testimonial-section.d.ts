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
        testimonials: Prop<Testimonial[]>;
        sectionId: string;
    };
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        eyebrow: string;
        headline: string;
        subheadline: string;
        testimonials: Prop<Testimonial[]>;
        sectionId: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Testimonial } from "../types.js";
import type { Prop } from "../types.js";
