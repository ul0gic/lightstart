export function configureMarkdown(options: {
    load: () => Promise<{
        marked: MarkedLike;
    }>;
}): void;
declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        content: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        anchors: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        onWikiLink: import("@bootstrapp/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
        _marked: Prop<MarkedLike | null>;
        _headings: Prop<MarkdownHeading[]>;
        _announced: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly reactive: false;
        }>;
    };
    events: {
        "markdown-rendered": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    connected(): void;
    updated(): void;
    render(): "" | import("@bootstrapp/light/html").Unsafe;
}, "events"> & {
    props?: {
        content: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        anchors: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        onWikiLink: import("@bootstrapp/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
        _marked: Prop<MarkedLike | null>;
        _headings: Prop<MarkdownHeading[]>;
        _announced: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "";
            readonly reactive: false;
        }>;
    } | undefined;
    events?: {
        "markdown-rendered": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { MarkedLike } from "../types.js";
import type { Prop } from "../types.js";
import type { MarkdownHeading } from "../types.js";
