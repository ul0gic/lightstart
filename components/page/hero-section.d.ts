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
        eyebrow: Prop<HeroEyebrow>;
        headline: string;
        subheadline: string;
        ctas: Prop<HeroCta[]>;
        decorations: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly attribute: false;
            readonly defaultValue: null;
        }>;
        image: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly fieldType: "file";
            readonly accept: "image/*";
        }>;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        eyebrow: Prop<HeroEyebrow>;
        headline: string;
        subheadline: string;
        ctas: Prop<HeroCta[]>;
        decorations: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly attribute: false;
            readonly defaultValue: null;
        }>;
        image: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly fieldType: "file";
            readonly accept: "image/*";
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { HeroEyebrow } from "../types.js";
import type { Prop } from "../types.js";
import type { HeroCta } from "../types.js";
