declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        fields: Prop<FormField[]>;
        data: Prop<Record<string, unknown>>;
        loading: false;
        typeHandlers: Prop<FormTypeHandlers>;
        errors: Prop<Record<string, unknown>>;
        layout: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "grid";
            readonly enum: readonly ["grid", "stacked"];
        }>;
        _options: Prop<Record<string, {
            loading: boolean;
            options: unknown[];
            error: string;
        }>>;
        _loads: Prop<Map<string, number>>;
        _refusing: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
    };
    events: {
        "field-change": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly values: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
        "form-invalid": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly errors: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    };
    connected(): void;
    /**
     * A native control the platform refused. It fires one `invalid` per failing
     * control and then submits nothing, so this is where a submit driven by a
     * submit button gets its reason drawn, and the refusal is announced once
     * the platform has checked every control.
     *
     * @param {Event} e
     */
    _onControlInvalid(e: Event): void;
    /**
     * Field name to message: the shape `validateRow` answers with, so
     * `form.setErrors(err.errors)` is the one line for a rejection whether the
     * schema refused the payload here or the worker refused the write.
     * @param {Record<string, string> | null | undefined} errors
     */
    setErrors(errors: Record<string, string> | null | undefined): void;
    clearErrors(): void;
    /**
     * The visible fields that are required and empty.
     *
     * The platform already refuses to submit a form holding an empty required
     * native control, but it refuses in silence: nothing is emitted and nothing
     * is drawn, which reads as a dead button. And a field rendered by a
     * `cmsType` or a `typeHandlers` widget has no native control at all, so its
     * `required` is invisible to the platform.
     *
     * This is the control-level check, not the schema's: `@bootstrapp/form`
     * runs the model's own rules on a payload that may never have had a DOM.
     *
     * @returns {Record<string, string>}
     */
    validate(): Record<string, string>;
    /**
     * Submit, or draw why not. Answers whether it went.
     * @returns {boolean}
     */
    submit(): boolean;
    /** @returns {NodeListOf<FormControlElement>} */
    getFormControls(): NodeListOf<FormControlElement>;
    /**
     * @param {string} name
     * @returns {FormField}
     */
    getFieldConfig(name: string): FormField;
    /**
     * Whether a field is on screen. `visibleIf` is the name of another field
     * that has to be truthy, or a predicate over the current values. A field
     * that is not shown is not collected either: a payload carrying a value
     * nobody could see is how a hidden branch ends up in the database.
     *
     * @param {FormField} field
     * @param {Record<string, unknown>} [values]
     * @returns {boolean}
     */
    isFieldVisible(field: FormField, values?: Record<string, unknown>): boolean;
    visibleFields(): FormField[];
    /**
     * One field changed. The value is written into `data` so a re-render keeps
     * it and a `visibleIf` depending on it re-evaluates, then announced.
     *
     * @param {FormField} field
     * @param {unknown} value
     */
    _fieldChanged(field: FormField, value: unknown): void;
    /**
     * Reload every field whose options came from the one that just changed, and
     * clear what each was holding: a list loaded for one account says nothing
     * about another.
     *
     * @param {string} changed
     */
    _reloadDependents(changed: string): void;
    /**
     * Ask a field for its options. The answer is kept per field, along with
     * whether it is still coming and why it did not.
     *
     * @param {FormField} field
     * @returns {Promise<void>}
     */
    loadFieldOptions(field: FormField): Promise<void>;
    /**
     * The field as it is drawn: its loaded options, plus whatever it currently
     * holds if that is not among them, so a saved value stays selected while its
     * options are still coming.
     *
     * @param {FormField} field
     * @param {unknown} value
     * @returns {FormField}
     */
    _withOptions(field: FormField, value: unknown): FormField;
    collectFormData(): Record<string, unknown>;
    /** @param {Record<string, unknown>} formData */
    serialize(formData: Record<string, unknown>): {
        [x: string]: unknown;
    };
    /** @param {Record<string, unknown>} record */
    deserialize(record: Record<string, unknown>): {
        [x: string]: unknown;
    };
    /**
     * One listener announces every edit, rather than thirteen renderers each
     * wiring their own.
     *
     * It has to run in the capture phase: a control stops the native event so
     * its own re-emitted one is the public surface, and `$emit` does not bubble,
     * so nothing reaches an ancestor either way. Capture sees the event on the
     * way down, before the control takes it.
     *
     * The read is deferred to a microtask because capture is too early: the
     * control has not written its own `value` yet. A microtask queued during a
     * dispatch runs once that dispatch has finished, which is exactly late
     * enough and never later.
     *
     * @param {Event} e
     */
    _onControlEdit(e: Event): void;
    /** @param {string} name */
    _announceEdit(name: string): void;
    /** @param {Event} e */
    _handleSubmit(e: Event): void;
    /**
     * The control for one field: the form's own `typeHandlers` escape hatch
     * first, then whatever the registry holds for the field's `cmsType` or its
     * `type`, then a text input.
     *
     * @param {FormField} field
     * @param {unknown} value
     * @returns {Renderable}
     */
    renderField(field: FormField, value: unknown): Renderable;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        fields: Prop<FormField[]>;
        data: Prop<Record<string, unknown>>;
        loading: false;
        typeHandlers: Prop<FormTypeHandlers>;
        errors: Prop<Record<string, unknown>>;
        layout: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "grid";
            readonly enum: readonly ["grid", "stacked"];
        }>;
        _options: Prop<Record<string, {
            loading: boolean;
            options: unknown[];
            error: string;
        }>>;
        _loads: Prop<Map<string, number>>;
        _refusing: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly reactive: false;
            readonly defaultValue: false;
        }>;
    } | undefined;
    events?: {
        "field-change": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly name: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly value: import("@lightstart/light/types").DeclaredTypeDefinition<unknown, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly values: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
        "form-invalid": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly errors: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { FormField } from "../types.js";
import type { Prop } from "../types.js";
import type { FormTypeHandlers } from "../types.js";
import type { FormControlElement } from "../types.js";
import type { Renderable } from "../types.js";
