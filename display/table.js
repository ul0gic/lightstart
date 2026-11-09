import { html, nothing } from "@lightstart/light/html";
import T from "@lightstart/light/types";
import { defineComponent } from "@lightstart/light";
import { withResize } from "@lightstart/components/mixins/resize.js";
import { lcText } from "../utils/text.js";
import { columnName } from "../utils/table-rows.js";

/** @import { Prop, Renderable, TableColumn, TableRow, TableRowSelect, TableRowSelected } from "../types.js" */

/** @type {Record<string, (content: Renderable) => Renderable>} */
const TypesRenderers = {
  boolean: (content) => (content ? html`<lc-icon name="check"></lc-icon>` : null),
};

/**
 * @param {Renderable} v
 * @returns {v is string}
 */
const isUrl = (v) => typeof v === "string" && /^https?:\/\//.test(v);

const colName = columnName;
/** @param {string | TableColumn} column */
const colAlign = (column) => (typeof column === "object" ? column.align : null);

/**
 * @param {Renderable} value
 * @param {string | TableColumn} column
 * @param {TableRow} row
 * @returns {Renderable}
 */
const renderCell = (value, column, row) => {
  if (typeof column === "object" && typeof column.render === "function")
    return column.render(value, row);
  const columnType = typeof column === "string" ? "string" : column.type ?? "string";
  const typed = TypesRenderers[columnType];
  if (typed) return typed.call(null, value) ?? value;
  if (isUrl(value))
    return html`<a class="lc-table-link" href=${value} target="_blank" rel="noopener noreferrer" @click=${(e) => e.stopPropagation()}>${value}</a>`;
  return value;
};

export default defineComponent({
  mixins: [withResize("_syncOverflow")],
  tag: "lc-table",
  style: true,
  dataQuery: true,
  props: {
    columns: /** @type {Prop<(string | TableColumn)[]>} */ (T.array({ defaultValue: [] })),
    rows: /** @type {Prop<TableRow[]>} */ (T.array({ defaultValue: [] })),
    selectRow: /** @type {Prop<TableRowSelect | null>} */ (T.function()),
    isSelected: /** @type {Prop<TableRowSelected | null>} */ (T.function()),
    sortable: false,
    sortBy: T.string(),
    sortDir: "asc",
    emptyMessage: "",
    label: T.string(),
    _overflow: T.boolean({ attribute: false, defaultValue: false }),
  },
  updated() {
    this._syncOverflow();
  },
  _syncOverflow() {
    const scroll = this.querySelector(".lc-table-scroll");
    if (!scroll) return;
    this._overflow = scroll.scrollWidth > scroll.clientWidth + 1 || scroll.scrollHeight > scroll.clientHeight + 1;
  },
  /** @param {string} name */
  handleSort(name) {
    this.sortDir = this.sortBy === name && this.sortDir === "asc" ? "desc" : "asc";
    this.sortBy = name;
    this.dispatchEvent(
      new CustomEvent("sort", {
        detail: { sortBy: this.sortBy, sortDir: this.sortDir },
        bubbles: true,
        composed: true,
      }),
    );
  },
  /** @param {string | TableColumn} column */
  renderHead(column) {
    const name = colName(column);
    const label = typeof column === "string" ? column : column.label || column.name || "";
    const sortable = this.sortable && (typeof column === "object" ? column.sortable !== false : true);
    const ariaSort = sortable && this.sortBy === name
      ? this.sortDir === "desc" ? "descending" : "ascending"
      : nothing;
    return html`
      <th align=${colAlign(column) ?? null} aria-sort=${ariaSort}
        @click=${sortable ? () => this.handleSort(name) : null}>
        ${sortable
          ? html`<button type="button" class="lc-table-sort-button">${label}<lc-icon class="lc-table-sort" name="chevron-up" size="14" aria-hidden="true"></lc-icon></button>`
          : label}
      </th>`;
  },
  render() {
    const hasRows = this.rows.length > 0;
    return html`
      <div class="lc-table-scroll" tabindex=${this._overflow ? "0" : nothing} role=${this._overflow ? "region" : nothing}
        aria-label=${this._overflow ? this.label || lcText("lc-table", "region") : nothing}>
        <table>
          <thead>
            <tr>${this.columns.map((column) => this.renderHead(column))}</tr>
          </thead>
          <tbody>
            ${this.rows.map((row) => {
              const selectRow = this.selectRow;
              return html`
                <tr class=${[selectRow ? "clickable" : "", this.isSelected?.(row) ? "is-selected" : ""].filter(Boolean).join(" ")}
                  tabindex=${selectRow ? "0" : nothing}
                  @click=${selectRow ? (e) => selectRow(row, e) : null}
                  @keydown=${selectRow
                    ? (/** @type {KeyboardEvent} */ e) => {
                        if (e.target !== e.currentTarget || (e.key !== "Enter" && e.key !== " ")) return;
                        e.preventDefault();
                        selectRow(row, e);
                      }
                    : null}>
                  ${this.columns.map(
                    (column) => html`<td align=${colAlign(column) ?? null}>${renderCell(row[colName(column)], column, row)}</td>`,
                  )}
                </tr>`;
            })}
          </tbody>
        </table>
      </div>
      ${hasRows ? "" : html`<div class="lc-table-empty">${this.emptyMessage || lcText("lc-table", "noData")}</div>`}
    `;
  },
});
