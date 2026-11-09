declare const _default: Omit<{
    tag: string;
    props: {
        title: string;
        value: Prop<Renderable>;
        desc: string;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "primary", "secondary", "success", "danger", "warning", "info"];
        }>;
        centered: false;
        delta: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        trend: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["up", "down", "flat"];
            readonly defaultValue: "flat";
        }>;
    };
    style: boolean;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        title: string;
        value: Prop<Renderable>;
        desc: string;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "primary", "secondary", "success", "danger", "warning", "info"];
        }>;
        centered: false;
        delta: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        trend: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly enum: readonly ["up", "down", "flat"];
            readonly defaultValue: "flat";
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Renderable } from "../types.js";
import type { Prop } from "../types.js";
