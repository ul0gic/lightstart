import { html } from "@bootstrapp/light/html";
import { defineComponent } from "@bootstrapp/light";
import { withFormControl } from "@bootstrapp/light/components/mixins/form-control.js";
import T from "@bootstrapp/light/types";
import { nextIndex } from "../utils/roving.js";
import { lcText } from "../utils/text.js";

export default defineComponent({
  mixins: [withFormControl],
  tag: "lc-rating",
  style: true,
  props: {
    value: 0,
    max: 5,
    change: T.function(),
  },
  /** @param {KeyboardEvent} e @param {number} index */
  _onKeydown(e, index) {
    if (this.disabled) return;
    const next = e.key === " " ? index : nextIndex(e.key, index, this.max, { wrap: true, orientation: "both" });
    if (next === null) return;
    e.preventDefault();
    this.change && this.change(next + 1);
    /** @type {HTMLElement | null} */ (this.querySelectorAll(".lc-rating__star")[next])?.focus();
  },
  render() {
    const { value, max, readonly, disabled, change } = this;
    const filled = Array.from({ length: max }, (/** @type {unknown} */ _, index) => index < Math.round(value));
    /** @param {boolean} isFilled */
    const star = (isFilled) => html`
      <lc-icon name="star" ?solid=${isFilled} class=${isFilled ? "star-filled" : "star-empty"} aria-hidden="true"></lc-icon>
    `;

    if (readonly)
      return html`
        <div class="lc-rating__container" role="img" aria-label=${lcText("lc-rating", "value", { value, max })}>
          ${filled.map(star)}
        </div>
      `;

    const checked = Math.round(value);
    const stop = Math.min(Math.max(checked, 1), max) - 1;
    return html`
      <div class="lc-rating__container" role="radiogroup" aria-label=${this.label || lcText("lc-rating", "label")}>
        ${filled.map((isFilled, index) => html`
          <button type="button" role="radio" class="lc-rating__star"
            aria-checked=${index + 1 === checked ? "true" : "false"}
            aria-label=${index === 0 ? lcText("lc-rating", "one") : lcText("lc-rating", "many", { count: index + 1 })}
            tabindex=${index === stop ? "0" : "-1"}
            ?disabled=${disabled}
            @click=${() => change && change(index + 1)}
            @keydown=${(/** @type {KeyboardEvent} */ e) => this._onKeydown(e, index)}>
            ${star(isFilled)}
          </button>
        `)}
      </div>
    `;
  },
});
