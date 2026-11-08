declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        author: string;
        avatar: string;
        at: string;
        body: string;
        concealed: false;
        href: string;
        actions: Prop<CommentActions | null>;
    };
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        author: string;
        avatar: string;
        at: string;
        body: string;
        concealed: false;
        href: string;
        actions: Prop<CommentActions | null>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { CommentActions } from "../types.js";
import type { Prop } from "../types.js";
