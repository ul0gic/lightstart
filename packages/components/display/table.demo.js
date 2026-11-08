import { html } from "@lightstart/light/html";

const columns = [
  { name: "name", label: "Name" },
  { name: "city", label: "City" },
  { name: "going", label: "Going" },
];
const rows = [
  { name: "Meetup Rio", city: "Rio de Janeiro", going: 132 },
  { name: "JS Sampa", city: "Sao Paulo", going: 98 },
  { name: "Belo Code", city: "Belo Horizonte", going: 47 },
];

/** @param {Record<string, unknown>} row */
const isSelected = (row) => row.name === "JS Sampa";

/**
 * @param {Record<string, unknown>} row
 * @param {Event} e
 */
const SELECT = (row, e) => {
  const table = /** @type {(HTMLElement & { isSelected: unknown }) | null} */ (/** @type {Element} */ (e.target).closest("lc-table"));
  if (table) table.isSelected = (/** @type {Record<string, unknown>} */ r) => r === row;
};

export default {
  description: "Rows and columns with a sticky header, and an empty state when there are none.",
  preview: () => html`<lc-table .columns=${columns} .rows=${rows}></lc-table>`,
  previewWidth: 640,
  examples: [
    {
      title: "Basic",
      render: () => html`
        <lc-table .columns=${columns} .rows=${rows}></lc-table>
      `,
    },
    {
      title: "Sortable",
      description: "A header's button sorts by its column; a row picks on a click, or on Enter or Space once Tab reaches it.",
      render: () => html`
        <lc-table .columns=${columns} .rows=${rows} sortable sort-by="going" sort-dir="desc" .selectRow=${SELECT} .isSelected=${isSelected}></lc-table>
      `,
    },
    {
      title: "Empty",
      render: () => html`
        <lc-table .columns=${columns} .rows=${[]} empty-message="No events yet"></lc-table>
      `,
    },
  ],
};
