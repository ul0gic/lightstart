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
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "dark";
            readonly enum: readonly ["light", "dark"];
        }>;
        headline: string;
        subheadline: string;
        ctas: Prop<CtaSectionAction[]>;
    };
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "dark";
            readonly enum: readonly ["light", "dark"];
        }>;
        headline: string;
        subheadline: string;
        ctas: Prop<CtaSectionAction[]>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { CtaSectionAction } from "../types.js";
import type { Prop } from "../types.js";
