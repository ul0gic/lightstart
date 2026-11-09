declare const _default: Omit<{
    tag: string;
    props: {
        options: Prop<(string | SegmentedOption)[]>;
        value: string;
        values: Prop<string[]>;
        multiple: false;
        disabled: false;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        block: false;
        name: string;
        label: string;
    };
    style: boolean;
    events: {
        change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly values: import("@lightstart/light/types").DeclaredTypeDefinition<unknown[], import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    };
    _options(): SegmentedOption[];
    /** @param {string} value */
    _isOn(value: string): boolean;
    /** @param {string} value */
    _pick(value: string): void;
    /** @param {string} value */
    _toggle(value: string): void;
    /** @param {KeyboardEvent} e @param {{ value: string }[]} options */
    _onKeydown(e: KeyboardEvent, options: {
        value: string;
    }[]): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        options: Prop<(string | SegmentedOption)[]>;
        value: string;
        values: Prop<string[]>;
        multiple: false;
        disabled: false;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md", "lg"];
        }>;
        block: false;
        name: string;
        label: string;
    } | undefined;
    events?: {
        change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly values: import("@lightstart/light/types").DeclaredTypeDefinition<unknown[], import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { SegmentedOption } from "../types.js";
import type { Prop } from "../types.js";
