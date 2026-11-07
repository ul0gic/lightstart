declare const _default: Omit<{
    tag: string;
    style: boolean;
    themeTokens: {
        color: string[];
        text: string[];
        font: string[];
        spacing: string[];
        radius: string[];
    };
    props: {
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "dark";
            readonly enum: readonly ["light", "dark"];
        }>;
        eyebrow: string;
        headline: string;
        subheadline: string;
        features: Prop<FeatureGridItem[]>;
        sectionId: string;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "dark";
            readonly enum: readonly ["light", "dark"];
        }>;
        eyebrow: string;
        headline: string;
        subheadline: string;
        features: Prop<FeatureGridItem[]>;
        sectionId: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { FeatureGridItem } from "../types.js";
import type { Prop } from "../types.js";
