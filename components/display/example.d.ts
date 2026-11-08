declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        preview: Prop<(() => import("@lightstart/light/html").TemplateValue) | null>;
        code: string;
        language: string;
        title: string;
        description: string;
        view: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "preview";
            readonly enum: readonly ["preview", "code", "both"];
        }>;
        viewport: number;
        viewports: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        skin: string;
        align: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "center";
            readonly enum: readonly ["start", "center"];
        }>;
    };
    events: {
        "view-change": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        "viewport-change": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
    };
    _viewOptions(): {
        value: string;
        label: string;
    }[];
    _viewportOptions(): {
        value: string;
        label: string;
        icon: string;
    }[];
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        preview: Prop<(() => import("@lightstart/light/html").TemplateValue) | null>;
        code: string;
        language: string;
        title: string;
        description: string;
        view: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "preview";
            readonly enum: readonly ["preview", "code", "both"];
        }>;
        viewport: number;
        viewports: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        skin: string;
        align: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "center";
            readonly enum: readonly ["start", "center"];
        }>;
    } | undefined;
    events?: {
        "view-change": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        "viewport-change": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
