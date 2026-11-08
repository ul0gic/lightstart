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
        align: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "left";
            readonly enum: readonly ["left", "right"];
        }>;
        eyebrow: string;
        headline: string;
        subheadline: string;
        body: string;
        image: Prop<ShowcaseImage>;
        ctas: Prop<ShowcaseCta[]>;
        sectionId: string;
    };
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        align: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "left";
            readonly enum: readonly ["left", "right"];
        }>;
        eyebrow: string;
        headline: string;
        subheadline: string;
        body: string;
        image: Prop<ShowcaseImage>;
        ctas: Prop<ShowcaseCta[]>;
        sectionId: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { ShowcaseImage } from "../types.js";
import type { Prop } from "../types.js";
import type { ShowcaseCta } from "../types.js";
