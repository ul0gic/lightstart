declare const _default: Omit<{
    tag: string;
    style: boolean;
    themeTokens: {
        color: string[];
        text: string[];
        font: string[];
        spacing: string[];
        radius: string[];
    };
    props: {
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "prose";
            readonly enum: readonly ["prose", "split"];
        }>;
        eyebrow: string;
        headline: string;
        subheadline: string;
        body: string;
        sectionId: string;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "prose";
            readonly enum: readonly ["prose", "split"];
        }>;
        eyebrow: string;
        headline: string;
        subheadline: string;
        body: string;
        sectionId: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
