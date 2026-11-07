declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        crumbs: Prop<PageHeaderCrumb[]>;
        title: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        subtitle: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        _hasTools: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
        }>;
    };
    /** @param {Event} e */
    _onToolsChange(e: Event): void;
    firstUpdated(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        crumbs: Prop<PageHeaderCrumb[]>;
        title: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        subtitle: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        _hasTools: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { PageHeaderCrumb } from "../types.js";
import type { Prop } from "../types.js";
