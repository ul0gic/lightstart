declare const _default: Omit<{
    tag: string;
    props: {
        device: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
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
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        device: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
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
