declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        label: string;
        labels: Prop<Record<string, string>>;
    };
    /** @param {string} tag */
    labelFor(tag: string): string;
    /** @param {Event} e */
    change(e: Event): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        label: string;
        labels: Prop<Record<string, string>>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
