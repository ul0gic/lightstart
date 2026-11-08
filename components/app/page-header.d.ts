declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        crumbs: Prop<PageHeaderCrumb[]>;
        title: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        subtitle: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        _hasTools: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
        }>;
    };
    /** @param {Event} e */
    _onToolsChange(e: Event): void;
    firstUpdated(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        crumbs: Prop<PageHeaderCrumb[]>;
        title: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        subtitle: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        _hasTools: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { PageHeaderCrumb } from "../types.js";
import type { Prop } from "../types.js";
