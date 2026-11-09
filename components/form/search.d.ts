declare const _default: Omit<{
    mixins: [{
        props: {
            _overlayId: Prop<string | null>;
        };
        updated({ changedProps }: {
            changedProps: Map<string, unknown>;
        }): void;
        disconnected(): void;
    } & {
        props?: {
            _overlayId: Prop<string | null>;
        } | undefined;
        events?: {} | undefined;
    }, {
        connected(this: import("@lightstart/light").default & {
            onClickOutside?: (e: Event) => void;
        }): void;
    } & {
        props?: {} | undefined;
        events?: {} | undefined;
    }];
    tag: string;
    style: boolean;
    props: {
        placeholder: string;
        label: string;
        query: string;
        open: false;
        active: number;
        limit: number;
        remote: false;
        loading: false;
        docs: Prop<SearchDoc[]>;
        suggestions: Prop<SearchDoc[]>;
        groups: Prop<string[]>;
        collapsible: false;
        expanded: false;
        inline: false;
        autofocus: false;
        iconPosition: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "left";
            readonly enum: readonly ["left", "right"];
        }>;
        leading: Prop<(() => TemplateValue) | null>;
        trailing: Prop<(() => TemplateValue) | null>;
        renderResult: Prop<((doc: SearchDoc) => TemplateValue) | null>;
        _expanding: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
        _id: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
    };
    events: {
        "search-select": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        "search-input": import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        "search-expand": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly expanded: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    };
    connected(): void;
    firstUpdated(): void;
    _shown(): SearchDoc[];
    _grouped(): {
        group: string;
        docs: SearchDoc[];
    }[];
    _flat(): SearchDoc[];
    _worthOpening(): boolean;
    _showPanel(): boolean;
    focusInput(): void;
    expand(): Promise<void>;
    collapse(): void;
    _clear(): void;
    /** @param {SearchDoc} doc */
    _select(doc: SearchDoc): void;
    /** @param {Event} e */
    _onInput(e: Event): void;
    _onFocus(): void;
    _onFocusOut(): void;
    /** @param {KeyboardEvent} e */
    _onKeydown(e: KeyboardEvent): void;
    _escape(): undefined;
    onEscape(): void;
    onClickOutside(): void;
    /**
     * @param {SearchDoc} doc
     * @param {number} index
     */
    _renderResult(doc: SearchDoc, index: number): import("@lightstart/light/html").TemplateResult;
    _trigger(): import("@lightstart/light/html").TemplateResult;
    _field(): import("@lightstart/light/html").TemplateResult;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        placeholder: string;
        label: string;
        query: string;
        open: false;
        active: number;
        limit: number;
        remote: false;
        loading: false;
        docs: Prop<SearchDoc[]>;
        suggestions: Prop<SearchDoc[]>;
        groups: Prop<string[]>;
        collapsible: false;
        expanded: false;
        inline: false;
        autofocus: false;
        iconPosition: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "left";
            readonly enum: readonly ["left", "right"];
        }>;
        leading: Prop<(() => TemplateValue) | null>;
        trailing: Prop<(() => TemplateValue) | null>;
        renderResult: Prop<((doc: SearchDoc) => TemplateValue) | null>;
        _expanding: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
        _id: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
    } | undefined;
    events?: {
        "search-select": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        "search-input": import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        "search-expand": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly expanded: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [{
        props: {
            _overlayId: Prop<string | null>;
        };
        updated({ changedProps }: {
            changedProps: Map<string, unknown>;
        }): void;
        disconnected(): void;
    } & {
        props?: {
            _overlayId: Prop<string | null>;
        } | undefined;
        events?: {} | undefined;
    }, {
        connected(this: import("@lightstart/light").default & {
            onClickOutside?: (e: Event) => void;
        }): void;
    } & {
        props?: {} | undefined;
        events?: {} | undefined;
    }] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
import type { SearchDoc } from "../types.js";
import type { TemplateValue } from "@lightstart/light/html";
