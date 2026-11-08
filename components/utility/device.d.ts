declare const _default: Omit<{
    tag: string;
    props: {
        device: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "iphone";
            readonly enum: readonly ["iphone", "android", "ipad", "desktop"];
        }>;
        width: string;
        height: string;
        scale: string;
        showNotch: true;
        showControls: true;
    };
    style: boolean;
    updated(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        device: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "iphone";
            readonly enum: readonly ["iphone", "android", "ipad", "desktop"];
        }>;
        width: string;
        height: string;
        scale: string;
        showNotch: true;
        showControls: true;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
