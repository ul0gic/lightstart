declare const _default: Omit<{
    tag: string;
    props: {
        timestamp: Prop<number | null>;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        timestamp: Prop<number | null>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
