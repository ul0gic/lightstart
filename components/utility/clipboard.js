import { html } from "@bootstrapp/light/html";
import T from "@bootstrapp/light/types";
import { defineComponent } from "@bootstrapp/light";
import { env } from "@bootstrapp/light/env";
import { lcText } from "../utils/text.js";
import { parseShortcut, shortcutKeys } from "../utils/shortcut.js";

const TAG = "lc-clipboard";

/**
 * Clipboard Component
 *
 * @component
 * @category utility
 * @tag lc-clipboard
 *
 * A button that copies a text and says so for a moment. Where the page may
 * not write the clipboard (plain HTTP, or a refused permission), it shows the
 * text selected in a read-only field instead, for the person to copy by hand.
 *
 * @example
 * ```html
 * <lc-clipboard text="npm install @bootstrapp/light"></lc-clipboard>
 * <lc-clipboard text="<lc-button></lc-button>" icon-only></lc-clipboard>
 * ```
 */
export default defineComponent({
  tag: "lc-clipboard",
  icons: ["copy", "check"],
  style: true,
  props: {
    text: "",
    label: "",
    copiedLabel: "",
    iconOnly: T.boolean(),
    size: T.string({ defaultValue: "sm", enum: ["xs", "sm", "md"] }),
    timeout: 1400,
    copied: T.boolean(),
    _manual: T.boolean({ attribute: false, defaultValue: false }),
    _timer: T.number({ defaultValue: 0, reactive: false }),
  },
  events: {
    copy: T.object(),
  },
  async _copy() {
    const written = navigator.clipboard?.writeText
      ? await navigator.clipboard.writeText(this.text).then(() => true, () => false)
      : false;
    if (!written) {
      this._manual = true;
      return;
    }
    this._copied();
  },
  _copied() {
    this.copied = true;
    this.$emit("copy", { text: this.text });
    clearTimeout(this._timer);
    this._timer = window.setTimeout(() => {
      this.copied = false;
    }, this.timeout);
  },
  /** @param {{ changedProps: Map<string, unknown> }} arg */
  updated({ changedProps }) {
    if (!changedProps.has("_manual") || !this._manual) return;
    const field = /** @type {HTMLInputElement | null} */ (this.querySelector(".clipboard-field"));
    if (field) { field.focus(); field.select(); }
  },
  /** @param {KeyboardEvent} e */
  _fieldKeydown(e) {
    if (e.key !== "Escape") return;
    e.preventDefault();
    this._closeField();
  },
  /** @param {ClipboardEvent} e */
  _fieldCopy(e) {
    e.stopPropagation();
    this._copied();
    window.setTimeout(() => this._closeField());
  },
  _closeField() {
    /** @type {HTMLElement | null} */ (this.querySelector(".clipboard-button button"))?.focus();
    this._manual = false;
  },
  disconnected() {
    clearTimeout(this._timer);
  },
  render() {
    const label = this.copied ? this.copiedLabel || lcText(TAG, "copied") : this.label || lcText(TAG, "copy");
    const status = this._manual
      ? lcText(TAG, "manual", { keys: shortcutKeys(parseShortcut("mod+c"), env.os).join("+") })
      : this.copied ? label : "";
    return html`
      <lc-button
        class="clipboard-button"
        ghost
        size=${this.size}
        icon=${this.copied ? "check" : "copy"}
        ?icon-only=${this.iconOnly}
        title=${label}
        aria-label=${label}
        @click=${this._copy}
      >${this.iconOnly ? "" : label}</lc-button>
      ${this._manual
        ? html`<input
            class="clipboard-field"
            readonly
            aria-label=${lcText(TAG, "field")}
            .value=${this.text}
            @keydown=${this._fieldKeydown}
            @copy=${this._fieldCopy}
            @blur=${() => { this._manual = false; }}
          />`
        : ""}
      <span class="clipboard-status" role="status">${status}</span>
    `;
  },
});
