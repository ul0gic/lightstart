declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        content: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        anchors: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        unsafeHtml: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
            readonly defaultValue: false;
        }>;
        remoteImages: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
            readonly defaultValue: true;
        }>;
        idPrefix: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly attribute: false;
            readonly defaultValue: "";
        }>;
        onWikiLink: import("@lightstart/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
        _headings: Prop<MarkdownHeading[]>;
        _announced: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly reactive: false;
        }>;
    };
    events: {
        "markdown-rendered": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
    };
    connected(): void;
    updated(): void;
    render(): import("@lightstart/light/html").Unsafe;
}, "events"> & {
    props?: {
        content: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        anchors: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        unsafeHtml: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
            readonly defaultValue: false;
        }>;
        remoteImages: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
            readonly defaultValue: true;
        }>;
        idPrefix: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly attribute: false;
            readonly defaultValue: "";
        }>;
        onWikiLink: import("@lightstart/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
        _headings: Prop<MarkdownHeading[]>;
        _announced: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly reactive: false;
        }>;
    } | undefined;
    events?: {
        "markdown-rendered": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
export type BlockNode = import("@lightstart/markdown").Block;
export type InlineNode = import("@lightstart/markdown").Inline;
export type RenderContext = {
    slug: (text: string) => string;
    headings: MarkdownHeading[];
    anchors: boolean;
    unsafeHtml: boolean;
    remoteImages: boolean;
    idPrefix: string;
};
import type { MarkdownHeading } from "../types.js";
import type { Prop } from "../types.js";
