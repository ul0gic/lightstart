declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        colors: Prop<string[]>;
        label: string;
        meta: string;
        selected: false;
        interactive: false;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md"];
        }>;
    };
    events: {
        select: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly colors: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown[], import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    };
    connected(): void;
    firstUpdated(): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    _reflect(): void;
    /** @param {Event} e */
    _activate(e: Event): void;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        colors: Prop<string[]>;
        label: string;
        meta: string;
        selected: false;
        interactive: false;
        size: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md"];
        }>;
    } | undefined;
    events?: {
        select: import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly colors: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown[], import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
