import { html, nothing } from "@lightstart/light/html";
import { defineComponent } from "@lightstart/light";
import { withClickOutside } from "@lightstart/components/mixins/click-outside.js";
import { withOverlay } from "@lightstart/components/mixins/overlay.js";
import { groupDocs, matchDocs } from "@lightstart/components/form/search-match.js";
import { nextIndex } from "../utils/roving.js";
import { uniqueId } from "../utils/id.js";
import T from "@lightstart/light/types";
import { lcText } from "../utils/text.js";
import { navigation } from "@lightstart/light/navigation";

/** @import { Prop, SearchDoc } from "../types.js" */
/** @import { TemplateValue } from "@lightstart/light/html" */

export default defineComponent({
  mixins: [withOverlay(), withClickOutside()],
  tag: "lc-search",
  style: true,
  props: {
    placeholder: "",
    label: "",
    errorMessage: T.string(),
    query: "",
    open: false,
    active: -1,
    limit: 8,
    remote: false,
    loading: false,
    docs: /** @type {Prop<SearchDoc[]>} */ (T.array({ defaultValue: [], attribute: false })),
    suggestions: /** @type {Prop<SearchDoc[]>} */ (T.array({ defaultValue: [], attribute: false })),
    groups: /** @type {Prop<string[]>} */ (T.array({ defaultValue: [] })),
    collapsible: false,
    expanded: false,
    inline: false,
    autofocus: false,
    iconPosition: T.string({ defaultValue: "left", enum: ["left", "right"] }),
    leading: /** @type {Prop<(() => TemplateValue) | null>} */ (T.object({ attribute: false, defaultValue: null, hasChanged: () => false })),
    trailing: /** @type {Prop<(() => TemplateValue) | null>} */ (T.object({ attribute: false, defaultValue: null, hasChanged: () => false })),
    renderResult: /** @type {Prop<((doc: SearchDoc) => TemplateValue) | null>} */ (T.object({ attribute: false, defaultValue: null, hasChanged: () => false })),
    _expanding: T.boolean({ reactive: false, defaultValue: false }),
    _id: T.string({ reactive: false, defaultValue: "" }),
  },
  events: {
    "search-select": T.object(),
    "search-input": T.string(),
    "search-expand": T.object({ expanded: T.boolean() }),
  },

  connected() {
    this._id ||= uniqueId("lc-search-");
  },

  firstUpdated() {
    this.addEventListener("focusout", () => this._onFocusOut());
    if (this.autofocus) this.focusInput();
  },

  _typed() {
    return (this.query || "").trim();
  },

  _shown() {
    if (!this._typed()) return this.suggestions.slice(0, this.limit);
    return this.remote
      ? this.docs.slice(0, this.limit)
      : matchDocs(this.docs, this.query, this.limit);
  },

  _grouped() {
    return groupDocs(this._shown(), this.groups);
  },

  _flat() {
    return this._grouped().flatMap((g) => g.docs);
  },

  _worthOpening() {
    if (this.inline && !this.collapsible) return this.active >= 0;
    return !!this._typed() || this.suggestions.length > 0;
  },

  _showPanel() {
    if (this.inline) return !!this._typed() || this._flat().length > 0;
    return this.open && (this._flat().length > 0 || (!!this._typed() && !this.loading));
  },

  focusInput() {
    /** @type {HTMLInputElement | null} */ (this.querySelector("input"))?.focus();
  },

  async expand() {
    if (this.expanded) return;
    this._expanding = true;
    this.expanded = true;
    this.open = this.suggestions.length > 0;
    this.$emit("search-expand", { expanded: true });
    await this.$requestUpdate();
    this.focusInput();
    this._expanding = false;
  },

  collapse() {
    if (!this.expanded) return;
    this.expanded = false;
    this.open = false;
    this.active = -1;
    this.$emit("search-expand", { expanded: false });
  },

  _clear() {
    if (!this.query) return this.collapse();
    this.query = "";
    this.active = -1;
    this.open = this.suggestions.length > 0;
    this.$emit("search-input", this.query);
    this.focusInput();
  },

  /** @param {SearchDoc} doc */
  _select(doc) {
    this.open = false;
    this.active = -1;
    this.$emit("search-select", doc);
    if (!this.collapsible || !doc.href) return;
    this.query = "";
    this.collapse();
  },

  /** @param {Event} e */
  _onInput(e) {
    e.stopPropagation();
    this.query = /** @type {HTMLInputElement} */ (e.target).value;
    this.active = -1;
    this.open = this._worthOpening();
    this.$emit("search-input", this.query);
  },

  _onFocus() {
    this.open = this._worthOpening();
  },

  _onFocusOut() {
    if (!this.collapsible || !this.expanded || this._expanding) return;
    setTimeout(() => {
      if (!this.isConnected || !this.expanded || this._expanding || this._typed()) return;
      if (this.contains(this.ownerDocument.activeElement)) return;
      this.collapse();
    }, 0);
  },

  /** @param {KeyboardEvent} e */
  _onKeydown(e) {
    const flat = this._flat();
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const moved = nextIndex(e.key, this.active, flat.length);
      if (moved !== null) this.active = moved;
      if (e.key === "ArrowDown" || this.inline) this.open = this._worthOpening();
    } else if (e.key === "Enter") {
      const doc = flat[this.active] || flat[0];
      if (!doc) return;
      this._select(doc);
      if (doc.href) navigation.go(doc.href);
    } else if (e.key === "Escape" && this._escape()) e.preventDefault();
  },

  /** @returns {boolean} whether there was anything for Escape to close */
  _escape() {
    if (this.inline) {
      this.open = false;
      if (this.active >= 0) {
        this.active = -1;
        return true;
      }
    } else if (this.open) {
      this.open = false;
      return true;
    }
    if (!this.collapsible || !this.expanded) return false;
    this.collapse();
    return true;
  },

  onEscape() {
    this._escape();
  },

  onClickOutside() {
    if (this.inline) return;
    if (this.open) this.open = false;
    if (this.collapsible && this.expanded && !this._typed()) this.collapse();
  },

  /**
   * @param {SearchDoc} doc
   * @param {number} index
   */
  _renderResult(doc, index) {
    const body = this.renderResult
      ? this.renderResult(doc)
      : html`
        <span class="search-result-text">
          <span class="search-result-title">${doc.title}</span>
          ${doc.hint ? html`<span class="search-result-hint">${doc.hint}</span>` : ""}
        </span>
      `;
    const classes = `search-result ${index === this.active ? "active" : ""}`;
    const id = `${this._id}-option-${index}`;
    const selected = index === this.active ? "true" : "false";
    return doc.href
      ? html`
        <a
          id=${id}
          role="option"
          aria-selected=${selected}
          class=${classes}
          href=${navigation.href(String(doc.href))}
          @click=${() => this._select(doc)}
        >${body}</a>
      `
      : html`
        <button
          id=${id}
          role="option"
          aria-selected=${selected}
          type="button"
          class=${classes}
          @click=${() => this._select(doc)}
        >${body}</button>
      `;
  },

  _trigger() {
    return html`
      <button
        type="button"
        class="search-trigger"
        part="lc-search-trigger"
        aria-expanded="false"
        aria-label=${this.placeholder || lcText("lc-search", "expand")}
        @click=${() => this.expand()}
      >
        <lc-icon name="search"></lc-icon>
      </button>
    `;
  },

  _field() {
    const grouped = this._grouped();
    const shown = this._showPanel();
    const listbox = `${this._id}-listbox`;
    const placeholder = this.placeholder || lcText("lc-search", "placeholder");
    let index = -1;
    return html`
      <div class="search-wrapper" part="lc-search-field">
        <lc-icon name="search" class="search-icon"></lc-icon>
        <input
          id="${this._id}-input"
          type="search"
          class="search-input"
          .value=${this.query}
          placeholder=${placeholder}
          autocomplete="off"
          role="combobox"
          aria-controls=${listbox}
          aria-expanded=${shown ? "true" : "false"}
          aria-activedescendant=${shown && this.active >= 0 && this.active < this._flat().length ? `${this._id}-option-${this.active}` : nothing}
          aria-invalid=${this.errorMessage ? "true" : nothing}
          aria-describedby=${this.errorMessage ? `${this._id}-error` : nothing}
          @input=${(e) => this._onInput(e)}
          @focus=${() => this._onFocus()}
          @keydown=${(/** @type {KeyboardEvent} */ e) => this._onKeydown(e)}
        />
        ${this.collapsible
          ? html`
            <button
              type="button"
              class="search-clear"
              part="lc-search-clear"
              aria-label=${lcText("lc-search", this.query ? "clear" : "collapse")}
              @click=${() => this._clear()}
            >
              <lc-icon name="x"></lc-icon>
            </button>
          `
          : nothing}
        ${shown
          ? html`
            <div
              id=${listbox}
              class="search-dropdown"
              role=${grouped.length ? "listbox" : nothing}
              aria-labelledby=${grouped.length && this.label ? `${this._id}-label` : nothing}
              aria-label=${grouped.length && !this.label ? placeholder : nothing}
              aria-busy=${this.loading ? "true" : nothing}
            >
              ${grouped.length === 0
                ? this.loading ? nothing : html`<div class="search-empty">${lcText("lc-search", "noResults")}</div>`
                : grouped.map(
                    (g) => html`
                      <div class="search-group-label">${g.group}</div>
                      ${g.docs.map((/** @type {SearchDoc} */ doc) => {
                        index += 1;
                        return this._renderResult(doc, index);
                      })}
                    `,
                  )}
            </div>
          `
          : nothing}
      </div>
    `;
  },

  render() {
    const collapsed = this.collapsible && !this.expanded;
    const body = collapsed ? this._trigger() : this._field();
    const label = this.label && !collapsed
      ? html`<lc-label id="${this._id}-label" for="${this._id}-input" text=${this.label}></lc-label>`
      : nothing;
    const error = this.errorMessage ? html`<span class="search-error" id="${this._id}-error" role="alert">${this.errorMessage}</span>` : nothing;
    if (!this.leading && !this.trailing) return html`${label}${body}${error}`;
    return html`
      ${label}
      <lc-join class="search-join" @click=${collapsed ? () => this.expand() : null}>
        ${this.leading ? html`<div class="search-aside" part="lc-search-leading"><div class="search-aside-body">${this.leading()}</div></div>` : nothing}
        ${body}
        ${this.trailing ? html`<div class="search-aside" part="lc-search-trailing"><div class="search-aside-body">${this.trailing()}</div></div>` : nothing}
      </lc-join>
      ${error}
    `;
  },
});

/**
 * Search Component
 *
 * @component
 * @category form
 * @tag lc-search
 *
 * An input with a grouped-results dropdown combobox. Callers pass a flat
 * `docs` array of `{ id, group, title, hint?, href? }`; matching is a simple
 * case-insensitive includes over title+hint, capped per group by `limit`.
 * `groups` optionally orders the group sections, `suggestions` are the docs
 * shown before anything is typed, and `renderResult` draws a row's body when
 * title and hint are not enough. Results with `href` render as real anchors;
 * every choice emits `search-select` with the chosen doc, and typing emits
 * `search-input` with the query. Arrow keys and Enter navigate; Escape and
 * clicking outside close the dropdown.
 *
 * The field is an ARIA combobox and the results a listbox of options, the
 * active one followed by `aria-activedescendant` while focus stays in the
 * field. `label` draws a visible label that names both; without one the
 * placeholder names the list. `errorMessage` draws a message under the field
 * and names it to the field, which is then `aria-invalid`, as `lc-input` does.
 *
 * With `remote` the host does the matching: `docs` are its results for the
 * query, kept in the order given (still grouped by `group`) and capped at
 * `limit` overall, and a `search-input` listener is where to fetch the next set.
 * While `loading` is set the list keeps the results it has, draws no empty
 * body, and carries `aria-busy`; a dropdown with nothing yet to show stays shut.
 *
 * `leading` and `trailing` put content beside the field, at which point the
 * component wraps itself in a `lc-join` and the three read as one control.
 * With `collapsible` the field starts as an icon and opens on click, and the
 * panes beside it fold away to give it the room; `iconPosition` moves the
 * magnifier to the other end.
 *
 * @example
 * // Basic grouped search
 * ```js
 * html`<lc-search
 *   placeholder="Search docs..."
 *   .docs=${[
 *     { id: "1", group: "Guides", title: "Getting Started", href: "/guides/start" },
 *     { id: "2", group: "Guides", title: "Routing", hint: "URL patterns", href: "/guides/routing" },
 *     { id: "3", group: "API", title: "defineComponent", href: "/api/define-component" },
 *   ]}
 * ></lc-search>`
 * ```
 *
 * @example
 * // A wordmark joined to a search that opens on tap
 * ```js
 * html`<lc-search
 *   collapsible
 *   .leading=${() => html`<a href="/">meetup<span class="text-primary">.rio</span></a>`}
 *   .docs=${docs}
 *   .suggestions=${recent}
 *   @search-expand=${(e) => closeThePanelBelow(e.detail.expanded)}
 * ></lc-search>`
 * ```
 *
 * @example
 * // Event-driven selection (no hrefs)
 * ```js
 * html`<lc-search
 *   .docs=${commands.map((c) => ({ id: c.id, group: "Commands", title: c.label }))}
 *   @search-select=${(e) => runCommand(e.detail.id)}
 *   @search-input=${(e) => track(e.detail)}
 * ></lc-search>`
 * ```
 *
 * @example
 * // Results the server ranked, kept as it sent them
 * ```js
 * html`<lc-search
 *   remote
 *   .docs=${results}
 *   @search-input=${async (e) => {
 *     e.target.loading = true;
 *     e.target.docs = await fetchResults(e.detail);
 *     e.target.loading = false;
 *   }}
 * ></lc-search>`
 * ```
 *
 * @example
 * // Explicit group order, per-group cap, and rows the host draws
 * ```js
 * html`<lc-search
 *   .docs=${docs}
 *   .groups=${["Places", "Events", "Guides"]}
 *   .renderResult=${(doc) => html`<img src=${doc.image} alt="" /><span>${doc.title}</span>`}
 *   limit="4"
 * ></lc-search>`
 * ```
 */
