import { element, html } from "@lightstart/light/html";

const settable = (/** @type {number} */ value, /** @type {Record<string, unknown>} */ bindings = {}) => {
  /** @type {{ value: number } | null} */
  let rating = null;
  return element("lc-rating", {
    ...bindings,
    value: String(value),
    ".change": (/** @type {number} */ n) => {
      if (rating) rating.value = n;
    },
    ref: (/** @type {unknown} */ el) => {
      rating = /** @type {{ value: number } | null} */ (el);
    },
  });
};

export default {
  description: "A star rating, readable or editable.",
  preview: () => html`
    <lc-rating value="4"></lc-rating>
  `,
  examples: [
    {
      title: "Read and set",
      render: () => html`
        <lc-flex direction="column" gap="sm">
          <lc-rating value="4"></lc-rating>
          <lc-rating value="3" max="10"></lc-rating>
        </lc-flex>
      `,
    },
    {
      title: "Set from the keyboard: Tab to the stars, then the arrow keys or Space",
      render: () => html`
        ${settable(3)}
      `,
    },
    {
      title: "Labelled and clearable: click the rated star, or press Backspace, to unrate",
      render: () => html`
        ${settable(2, { label: "Your rating", "?clearable": true })}
      `,
    },
    {
      title: "Read only: one picture named by its value",
      render: () => html`
        <lc-rating value="4" readonly></lc-rating>
      `,
    },
  ],
};
