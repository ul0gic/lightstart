import { html, nothing } from "@lightstart/light/html";
import { defineComponent } from "@lightstart/light";
import { withFormControl } from "@lightstart/components/mixins/form-control.js";
import T from "@lightstart/light/types";

/** @import { Prop } from "../types.ts" */

export default defineComponent({
  mixins: [withFormControl],
  tag: "lc-input",
  props: {
    type: T.string({
      defaultValue: "text",
      enum: ["text", "email", "tel", "url", "search", "password", "number", "date", "datetime-local", "time", "month", "week", "color"],
    }),
    inputmode: T.string(),
    autocomplete: T.string(),
    autocapitalize: T.string(),
    min: /** @type {Prop<string | number | null>} */ (T.any({ defaultValue: null })),
    max: /** @type {Prop<string | number | null>} */ (T.any({ defaultValue: null })),
    step: /** @type {Prop<string | number | null>} */ (T.any({ defaultValue: null })),
    prefix: "",
    hint: T.string(),
    errorMessage: T.string(),
  },
  style: true,

  /** @param {Event} e */
  handleInput(e) {
    e.stopPropagation();
    this.value = /** @type {HTMLInputElement} */ (e.target).value;
    this.$emit("input", { value: this.value });
  },

  /** @param {Event} e */
  handleChange(e) {
    e.stopPropagation();
    this.value = /** @type {HTMLInputElement} */ (e.target).value;
    this.$emit("change", { value: this.value });
  },

  focusInput() {
    /** @type {HTMLInputElement | null} */ (this.querySelector("input"))?.focus();
  },

  render() {
    const id = this.getInputId();
    const describedBy = [this.hint && `${id}-hint`, this.errorMessage && `${id}-error`].filter(Boolean).join(" ");
    const field = html`<input
        id=${id}
        name=${this.name || this.id || nothing}
        class="input"
        type=${this.type}
        inputmode=${this.inputmode || nothing}
        autocomplete=${this.autocomplete || nothing}
        autocapitalize=${this.autocapitalize || nothing}
        .value=${this.value ?? ""}
        placeholder=${this.placeholder}
        min=${this.min ?? nothing}
        max=${this.max ?? nothing}
        step=${this.step ?? nothing}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        aria-invalid=${this.errorMessage ? "true" : nothing}
        aria-describedby=${describedBy || nothing}
        @input=${this.handleInput.bind(this)}
        @change=${this.handleChange.bind(this)}
      />`;
    return html`
      ${this.label ? html`<lc-label for=${id} text=${this.label} ?required=${this.required}></lc-label>` : ""}
      ${this.prefix
        ? html`<span class="input-affixed" style=${`--lc-input-prefix-chars:${[...this.prefix].length}`}><span class="input-prefix" aria-hidden="true">${this.prefix}</span>${field}</span>`
        : field}
      ${this.hint ? html`<span class="input-hint" id=${`${id}-hint`}>${this.hint}</span>` : ""}
      ${this.errorMessage ? html`<span class="input-error" id=${`${id}-error`}>${this.errorMessage}</span>` : ""}
    `;
  },
});
