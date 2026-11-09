declare const _default: Omit<{
    tag: string;
    props: {
        separator: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "/";
            readonly enum: readonly ["/", ">", "→", "·", "|"];
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        items: Prop<BreadcrumbItem[]>;
    };
    style: boolean;
    connected(): void;
    updated(): void;
    _parseItems(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        separator: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "/";
            readonly enum: readonly ["/", ">", "→", "·", "|"];
        }>;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        items: Prop<BreadcrumbItem[]>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { BreadcrumbItem } from "../types.js";
import type { Prop } from "../types.js";
