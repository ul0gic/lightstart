/**
 * Empty State Component
 *
 * @component
 * @category feedback
 * @tag lc-empty-state
 *
 * Placeholder shown when a list or section has no content yet: an optional icon
 * or illustration, a heading, a description, and a default slot for a
 * call-to-action (drop a `<lc-button>` in).
 *
 * @slot art - Optional illustration above the title; drawn instead of the icon
 * @slot - Optional call-to-action (e.g. a button)
 *
 * @example
 * ```html
 * <lc-empty-state icon="image" title="No media yet" description="Start with a template above.">
 *   <lc-button primary>New media</lc-button>
 * </lc-empty-state>
 * ```
 *
 * @example With art and a heading level
 * ```html
 * <lc-empty-state title="No files" heading-level="3">
 *   <svg slot="art" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24" fill="currentColor" /></svg>
 * </lc-empty-state>
 * ```
 *
 * @part root - The outer container
 * @part art - The illustration wrapper, holding the `art` slot or the icon
 * @part icon - The icon wrapper
 * @part title - The title heading, `<h2>` unless `heading-level` names 1 to 6
 * @part description - The description text
 * @part actions - The call-to-action slot wrapper
 */
import { element, html, nothing } from "@lightstart/light/html";
import T from "@lightstart/light/types";
import { defineComponent } from "@lightstart/light";

const ICON_SIZE = { sm: 22, md: 30, lg: 40 };

export default defineComponent({
  tag: "lc-empty-state",
  style: true,

  props: {
    icon: "",
    title: "",
    headingLevel: 2,
    description: "",
    size: T.string({ defaultValue: "md", enum: ["sm", "md", "lg"] }),
  },

  render() {
    const level = [1, 2, 3, 4, 5, 6].includes(this.headingLevel) ? this.headingLevel : 2;
    return html`
      <div part="lc-empty-state-root" class="empty-state empty-state-${this.size}">
        <div part="lc-empty-state-art" class="empty-state-art"><slot name="art">${this.icon
          ? html`<div part="lc-empty-state-icon" class="empty-state-icon"><lc-icon name=${this.icon} size=${ICON_SIZE[/** @type {keyof typeof ICON_SIZE} */ (this.size)] || ICON_SIZE.md}></lc-icon></div>`
          : nothing}</slot></div>
        ${this.title ? element(`h${level}`, { part: "lc-empty-state-title", class: "empty-state-title" }, this.title) : nothing}
        ${this.description ? html`<div part="lc-empty-state-description" class="empty-state-description">${this.description}</div>` : nothing}
        <div part="lc-empty-state-actions" class="empty-state-actions"><slot></slot></div>
      </div>
    `;
  },
});
