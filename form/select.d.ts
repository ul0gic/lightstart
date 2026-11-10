declare const _default: Omit<{
    mixins: [{
        props: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: Prop<Renderable>;
            placeholder: string;
            disabled: false;
            readonly: false;
            required: false;
            error: false;
            fullWidth: false;
            size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "md";
                readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
            }>;
            variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "default";
                readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error"];
            }>;
            _inputId: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
        };
        events: {
            input: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
            change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
        };
        getInputId(): string;
        connected(): void;
    } & {
        props?: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: Prop<Renderable>;
            placeholder: string;
            disabled: false;
            readonly: false;
            required: false;
            error: false;
            fullWidth: false;
            size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "md";
                readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
            }>;
            variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "default";
                readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error"];
            }>;
            _inputId: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
        } | undefined;
        events?: {
            input: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
            change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
        } | undefined;
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
        options: Prop<SelectOption[]>;
        multiple: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        searchable: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        max: number;
        open: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
        }>;
        search: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly attribute: false;
            readonly defaultValue: "";
        }>;
        highlightIndex: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly attribute: false;
            readonly defaultValue: -1;
        }>;
    };
    reportValidity(): boolean;
    connected(): void;
    /** @param {FocusEvent} e */
    _onFocusOut(e: FocusEvent): void;
    _openList(): void;
    _closeList(): void;
    /**
     * The current value as the list it is when `multiple`, so every read has
     * one shape whichever mode the element is in.
     * @returns {string[]}
     */
    readonly selected: string[];
    /** @param {unknown} value @returns {boolean} */
    isSelected(value: unknown): boolean;
    /** @param {string[] | string} value */
    _commit(value: string[] | string): void;
    /**
     * An open list is scrolled into view, clear of whatever the page keeps over
     * its bottom edge (`--lc-select-dropdown-scroll-margin`, a bar or a dock),
     * and the highlighted option is scrolled into the list.
     * @param {{ changedProps: Map<string, unknown> }} detail
     */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    onClickOutside(): void;
    /** @returns {string} */
    readonly selectId: string;
    /** @returns {string} */
    readonly listId: string;
    /** @param {number} index @returns {string} */
    _optionId(index: number): string;
    /** @param {SelectOption[]} filtered @returns {string} */
    _activeId(filtered: SelectOption[]): string;
    /**
     * @param {SelectOption} option
     * @returns {string}
     */
    _getLabel(option: SelectOption): string;
    /** @param {SelectOption} option */
    _getValue(option: SelectOption): {};
    /**
     * What an option carries before its label, a flag or an emoji, or "".
     * @param {SelectOption | undefined} option
     */
    _getLeading(option: SelectOption | undefined): string;
    /** @param {string} value */
    _optionOf(value: string): SelectOption | undefined;
    _getSelectedLabel(): string | number | bigint | true | symbol | object;
    _getFilteredOptions(): SelectOption[];
    _full(): boolean;
    /** @param {string} value */
    _remove(value: string): void;
    /** @param {InputEvent} e */
    _onSearchInput(e: InputEvent): void;
    _onSearchFocus(): void;
    /** @param {KeyboardEvent} e */
    _onSearchKeydown(e: KeyboardEvent): void;
    /** @param {SelectOption} option */
    _selectOption(option: SelectOption): void;
    /** @param {Event} e @returns {string[] | string} */
    _readNative(e: Event): string[] | string;
    /** @param {Event} e */
    _onInput(e: Event): void;
    /** @param {Event} e */
    _onChange(e: Event): void;
    /** @param {MouseEvent} e */
    _toggleDropdown(e: MouseEvent): void;
    /**
     * The named native control a searchable select does not draw.
     * @returns {Renderable}
     */
    _hiddenValues(): Renderable;
    renderTags(): import("@lightstart/light/html").TemplateResult;
    renderSearchable(): import("@lightstart/light/html").TemplateResult;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        options: Prop<SelectOption[]>;
        multiple: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        searchable: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
        max: number;
        open: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
        }>;
        search: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly attribute: false;
            readonly defaultValue: "";
        }>;
        highlightIndex: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly attribute: false;
            readonly defaultValue: -1;
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [{
        props: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: Prop<Renderable>;
            placeholder: string;
            disabled: false;
            readonly: false;
            required: false;
            error: false;
            fullWidth: false;
            size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "md";
                readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
            }>;
            variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "default";
                readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error"];
            }>;
            _inputId: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
        };
        events: {
            input: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
            change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
        };
        getInputId(): string;
        connected(): void;
    } & {
        props?: {
            label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            id: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            value: Prop<Renderable>;
            placeholder: string;
            disabled: false;
            readonly: false;
            required: false;
            error: false;
            fullWidth: false;
            size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "md";
                readonly enum: readonly ["xs", "sm", "md", "lg", "xl"];
            }>;
            variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly defaultValue: "default";
                readonly enum: readonly ["default", "primary", "secondary", "success", "warning", "error"];
            }>;
            _inputId: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
                readonly reactive: false;
                readonly defaultValue: "";
            }>;
        } | undefined;
        events?: {
            input: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
            change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
                readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            }>;
        } | undefined;
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
import type { Renderable } from "../types.js";
import type { Prop } from "../types.js";
import type { SelectOption } from "../types.js";
