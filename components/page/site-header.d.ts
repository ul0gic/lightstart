declare const _default: Omit<{
    tag: string;
    style: boolean;
    themeTokens: {
        color: string[];
        text: string[];
        font: string[];
        radius: string[];
        shadow: string[];
    };
    props: {
        brand: Prop<SiteHeaderBrand>;
        links: Prop<SiteHeaderLink[]>;
        actions: Prop<SiteHeaderAction[]>;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        brand: Prop<SiteHeaderBrand>;
        links: Prop<SiteHeaderLink[]>;
        actions: Prop<SiteHeaderAction[]>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { SiteHeaderBrand } from "../types.js";
import type { Prop } from "../types.js";
import type { SiteHeaderLink } from "../types.js";
import type { SiteHeaderAction } from "../types.js";
