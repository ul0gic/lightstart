import { html } from "@bootstrapp/light/html";
import T from "@bootstrapp/light/types";
import { defineComponent } from "@bootstrapp/light";

export default defineComponent({
  tag: "lc-image",
  props: {
    src: T.string(),
    alt: "",
    placeholder: "",
    _loaded: T.boolean({ attribute: false, defaultValue: false }),
  },
  style: true,

  /** @param {{ changedProps: Map<string, unknown> }} arg */
  willUpdate({ changedProps }) {
    if (changedProps.has("src")) this._loaded = false;
  },

  render() {
    return html`
      ${this.src
        ? html`<img src="${this.src}" alt="${this.alt}" loading="lazy" decoding="async" @load=${() => { this._loaded = true; }} />`
        : ""
      }
      ${this.placeholder && !this._loaded
        ? html`<img class="placeholder" src="${this.placeholder}" alt="" aria-hidden="true" />`
        : ""
      }
      <slot></slot>
    `;
  },
});

/**
 * Image Component
 *
 * @component
 * @category display
 * @tag lc-image
 *
 * A picture filling the box the host is given, cropped to cover it and
 * clipped to the host's `border-radius`. It is a real `<img>`, so it loads
 * lazily, asks nothing of a `style-src` policy, and is named by `alt`; with
 * no `alt` it is decorative (`alt=""`). `placeholder` is drawn over it until
 * it loads, then removed, and stays if it never does: a small `data:` or
 * `blob:` URL (a blurred thumbnail, a flat colour) that is there at once.
 * Children draw over the picture.
 *
 * @example Basic
 * ```html
 * <lc-image src="/photos/harbour.jpg" alt="The harbour at dusk" style="display: block; width: 320px; height: 180px"></lc-image>
 * ```
 *
 * @example Placeholder
 * ```html
 * <lc-image src="/photos/harbour.jpg" alt="The harbour at dusk" placeholder="data:image/jpeg;base64,..." style="display: block; width: 320px; height: 180px"></lc-image>
 * ```
 *
 * @example Circle
 * ```html
 * <lc-image src="/photos/portrait.jpg" alt="Portrait" style="display: block; width: 96px; height: 96px; border-radius: 50%"></lc-image>
 * ```
 */
