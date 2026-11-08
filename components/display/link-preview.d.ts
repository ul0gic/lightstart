declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        url: string;
        title: string;
        description: string;
        image: string;
        favicon: string;
        domain: string;
    };
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        url: string;
        title: string;
        description: string;
        image: string;
        favicon: string;
        domain: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
