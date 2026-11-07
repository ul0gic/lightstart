declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        theme: Prop<Record<string, unknown> | null>;
        header: Prop<PageSection | null>;
        sections: Prop<PageSection[]>;
        footer: Prop<PageSection | null>;
    };
    connected(): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    _applyTheme(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        theme: Prop<Record<string, unknown> | null>;
        header: Prop<PageSection | null>;
        sections: Prop<PageSection[]>;
        footer: Prop<PageSection | null>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
import type { PageSection } from "../types.js";
