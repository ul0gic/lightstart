declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        gap: string;
        pad: string;
        chevrons: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "auto";
            readonly enum: readonly ["auto", "always", "never"];
        }>;
        snap: false;
        _track: Prop<HTMLElement | null>;
        _prev: Prop<HTMLElement | null>;
        _next: Prop<HTMLElement | null>;
        _raf: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: 0;
        }>;
    };
    firstUpdated(): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    /** @param {number} dir */
    _scroll(dir: number): void;
    _sync(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        gap: string;
        pad: string;
        chevrons: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "auto";
            readonly enum: readonly ["auto", "always", "never"];
        }>;
        snap: false;
        _track: Prop<HTMLElement | null>;
        _prev: Prop<HTMLElement | null>;
        _next: Prop<HTMLElement | null>;
        _raf: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly reactive: false;
            readonly defaultValue: 0;
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
