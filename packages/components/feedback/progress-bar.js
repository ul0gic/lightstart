import { html, nothing } from "@lightstart/light/html";
import T from "@lightstart/light/types";
import { defineComponent } from "@lightstart/light";
import { lcText } from "../utils/text.js";

export default defineComponent({
  tag: "lc-progress-bar",
  props: {
    value: 0,
    max: 100,
    variant: T.string({
      defaultValue: "default",
      enum: ["default", "success", "danger", "warning", "info"],
    }),
    size: T.string({
      defaultValue: "md",
      enum: ["sm", "md", "lg"],
    }),
    showLabel: false,
    striped: false,
    animated: false,
    label: "",
    indeterminate: false,
  },
  style: true,

  getPercentage() {
    return Math.min(100, Math.max(0, (this.value / this.max) * 100));
  },

  render() {
    const percentage = this.getPercentage();
    const { indeterminate } = this;

    return html`
      <div part="lc-progress-bar-container" class="progress-container">
        <div
          part="lc-progress-bar-bar"
          class="progress-bar"
          role="progressbar"
          aria-label=${this.label || lcText("lc-progress-bar", "label")}
          aria-valuenow=${indeterminate ? nothing : this.value}
          aria-valuemin=${indeterminate ? nothing : "0"}
          aria-valuemax=${indeterminate ? nothing : this.max}
        >
          <div
            part="lc-progress-bar-fill"
            class="progress-fill"
            style=${indeterminate ? nothing : `width: ${percentage}%`}
          >
            ${
              this.showLabel && !indeterminate
                ? html`<span part="lc-progress-bar-label" class="progress-label"
                  >${Math.round(percentage)}%</span
                >`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  },
});

/**
 * Progress Bar Component
 *
 * @component
 * @category feedback
 * @tag lc-progress-bar
 *
 * Visual progress indicator showing completion percentage
 *
 * @example
 * // Basic progress bar
 * ```html
 * <lc-progress-bar value="50"></lc-progress-bar>
 * ```
 *
 * @example
 * // With label
 * ```html
 * <lc-progress-bar value="75" showLabel></lc-progress-bar>
 * ```
 *
 * @example
 * // Named for screen readers (the name is not drawn)
 * ```html
 * <lc-progress-bar value="40" label="Uploading photos"></lc-progress-bar>
 * ```
 *
 * @example
 * // Indeterminate, when there is no value to show
 * ```html
 * <lc-progress-bar indeterminate label="Loading results"></lc-progress-bar>
 * ```
 *
 * @example
 * // With size variants
 * ```html
 * <div style="display: flex; flex-direction: column; gap: 1rem;">
 *   <lc-progress-bar value="60" size="sm" showLabel></lc-progress-bar>
 *   <lc-progress-bar value="60" size="md" showLabel></lc-progress-bar>
 *   <lc-progress-bar value="60" size="lg" showLabel></lc-progress-bar>
 * </div>
 * ```
 *
 * @example
 * // With variants
 * ```html
 * <div style="display: flex; flex-direction: column; gap: 1rem;">
 *   <lc-progress-bar value="25" variant="default"></lc-progress-bar>
 *   <lc-progress-bar value="50" variant="success"></lc-progress-bar>
 *   <lc-progress-bar value="75" variant="warning"></lc-progress-bar>
 *   <lc-progress-bar value="90" variant="danger"></lc-progress-bar>
 *   <lc-progress-bar value="100" variant="info"></lc-progress-bar>
 * </div>
 * ```
 *
 * @example
 * // With striped and animated
 * ```html
 * <div style="display: flex; flex-direction: column; gap: 1rem;">
 *   <lc-progress-bar value="60" striped></lc-progress-bar>
 *   <lc-progress-bar value="60" striped animated></lc-progress-bar>
 * </div>
 * ```
 *
 * @example
 * // Dynamic progress with binding
 * ```js
 * html`<lc-progress-bar
 *   .value=${this.progress}
 *   variant="success"
 *   showLabel
 *   animated
 * ></lc-progress-bar>`
 * ```
 *
 * @example
 * // Complete example with all features
 * ```html
 * <lc-progress-bar
 *   value="85"
 *   max="100"
 *   variant="success"
 *   size="lg"
 *   showLabel
 *   striped
 *   animated
 * ></lc-progress-bar>
 * ```
 */
