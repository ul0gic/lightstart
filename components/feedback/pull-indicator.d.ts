declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        pull: number;
        threshold: number;
        refreshing: false;
    };
    willUpdate(): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        pull: number;
        threshold: number;
        refreshing: false;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
