import { html, nothing } from "@lightstart/light/html";
import { defineComponent } from "@lightstart/light";
import { withFormControl } from "@lightstart/components/mixins/form-control.js";
import T from "@lightstart/light/types";
import { nextIndex } from "../utils/roving.js";
import { lcText } from "../utils/text.js";

/** @import { TemplateValue } from "@lightstart/light/html" */

export default defineComponent({
  mixins: [withFormControl],
  tag: "lc-rating",
  style: true,
  props: {
    value: 0,
    max: 5,
    step: 1,
    clearable: false,
    change: T.function(),
  },
  /** @param {KeyboardEvent} e @param {number} index @param {number} perStar */
  _onKeydown(e, index, perStar) {
    if (this.disabled) return;
    if (this.clearable && (e.key === "Backspace" || e.key === "Delete")) {
      e.preventDefault();
      this.change && this.change(0);
      return;
    }
    const next =
      e.key === " " ? index : nextIndex(e.key, index, this.max * perStar, { wrap: true, orientation: "both", homeEnd: true });
    if (next === null) return;
    e.preventDefault();
    this.change && this.change((next + 1) / perStar);
    /** @type {HTMLElement | null} */ (this.querySelectorAll(".lc-rating__star")[next])?.focus();
  },
  render() {
    const { value, max, readonly, disabled, clearable, label, change } = this;
    const perStar = this.step === 0.5 ? 2 : 1;
    const rated = Math.round(value * perStar) / perStar;
    const locale = document.documentElement.lang || "en";
    /** @param {number} n */
    const number = (n) => (Number.isInteger(n) ? n : new Intl.NumberFormat(locale).format(n));
    const steps = Array.from({ length: max * perStar }, (/** @type {unknown} */ _, index) => (index + 1) / perStar);
    /** @param {boolean} isFilled */
    const star = (isFilled) => html`
      <lc-icon name="star" ?solid=${isFilled} class=${isFilled ? "star-filled" : "star-empty"} aria-hidden="true"></lc-icon>
    `;
    /** @param {TemplateValue[]} pieces */
    const byStar = (pieces) =>
      perStar === 1
        ? pieces
        : Array.from({ length: max }, (/** @type {unknown} */ _, index) => html`
            <span class="lc-rating__pair">${pieces[index * 2]}${pieces[index * 2 + 1]}</span>
          `);

    if (readonly)
      return html`
        <div class="lc-rating__container" role="img" aria-label=${lcText("lc-rating", "value", { value: perStar === 1 ? value : number(rated), max })}>
          ${byStar(steps.map((n) => (perStar === 1 ? star(n <= rated) : html`<span class="lc-rating__half">${star(n <= rated)}</span>`)))}
        </div>
      `;

    const stop = Math.min(Math.max(rated * perStar, 1), max * perStar) - 1;
    const labelId = `${this.getInputId()}-label`;
    return html`
      ${label ? html`<lc-label id=${labelId} text=${label}></lc-label>` : ""}
      <div class="lc-rating__container" role="radiogroup"
        aria-labelledby=${label ? labelId : nothing}
        aria-label=${label ? nothing : lcText("lc-rating", "label")}>
        ${byStar(steps.map((n, index) => html`
          <button type="button" role="radio" class=${perStar === 1 ? "lc-rating__star" : "lc-rating__star lc-rating__half"}
            aria-checked=${n === rated ? "true" : "false"}
            aria-label=${n === 1 ? lcText("lc-rating", "one") : lcText("lc-rating", "many", { count: number(n) })}
            tabindex=${index === stop ? "0" : "-1"}
            ?disabled=${disabled}
            @click=${() => change && change(clearable && n === rated ? 0 : n)}
            @keydown=${(/** @type {KeyboardEvent} */ e) => this._onKeydown(e, index, perStar)}>
            ${star(n <= rated)}
          </button>
        `))}
      </div>
    `;
  },
});
