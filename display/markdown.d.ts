export function configureMarkdown(options: {
    load: () => Promise<{
        marked: MarkedLike;
    }>;
}): void;
declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        content: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        anchors: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        untrusted: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        onWikiLink: import("@lightstart/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
        _marked: Prop<MarkedLike | null>;
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
    render(): import("@lightstart/light/html").Unsafe | "";
}, "events"> & {
    props?: {
        content: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        anchors: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        untrusted: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        onWikiLink: import("@lightstart/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
        _marked: Prop<MarkedLike | null>;
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
import type { MarkedLike } from "../types.js";
import type { Prop } from "../types.js";
import type { MarkdownHeading } from "../types.js";
