declare const _default: Omit<{
    tag: string;
    style: boolean;
    themeTokens: {
        color: string[];
        text: string[];
        font: string[];
        spacing: string[];
    };
    props: {
        brand: Prop<FooterBrand>;
        tagline: string;
        columns: Prop<FooterColumn[]>;
        copyright: string;
        socials: Prop<FooterSocial[]>;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        brand: Prop<FooterBrand>;
        tagline: string;
        columns: Prop<FooterColumn[]>;
        copyright: string;
        socials: Prop<FooterSocial[]>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { FooterBrand } from "../types.js";
import type { Prop } from "../types.js";
import type { FooterColumn } from "../types.js";
import type { FooterSocial } from "../types.js";
