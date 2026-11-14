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
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "prose";
            readonly enum: readonly ["prose", "split"];
        }>;
        eyebrow: string;
        headline: string;
        subheadline: string;
        body: string;
        sectionId: string;
        unsafeHtml: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
            readonly defaultValue: false;
        }>;
    };
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "prose";
            readonly enum: readonly ["prose", "split"];
        }>;
        eyebrow: string;
        headline: string;
        subheadline: string;
        body: string;
        sectionId: string;
        unsafeHtml: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
            readonly defaultValue: false;
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
