import { html } from "@lightstart/light/html";

const docs = [
  { id: "1", title: "Button", group: "Display", description: "A clickable action" },
  { id: "2", title: "Badge", group: "Display", description: "A short status" },
  { id: "3", title: "Input", group: "Form", description: "A single-line value" },
  { id: "4", title: "Select", group: "Form", description: "A dropdown of options" },
];

const places = [
  { id: "p1", title: "Pão de Açúcar", group: "Places", hint: "Urca" },
  { id: "p2", title: "Jardim Botânico", group: "Places", hint: "Gávea" },
  { id: "p3", title: "Parque Lage", group: "Places", hint: "Jardim Botânico" },
  { id: "p4", title: "Confeitaria Colombo", group: "Places", hint: "Centro" },
];

/** @param {string} text */
const fold = (text) => text.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

/** @param {Event & { detail: string }} e */
const lookUp = (e) => {
  const query = fold(e.detail.trim());
  /** @type {HTMLElement & { docs: typeof places }} */ (e.target).docs = query
    ? places.filter((p) => fold(`${p.title} ${p.hint}`).includes(query))
    : [];
};

/** @type {ReturnType<typeof setTimeout> | undefined} */
let pending;

/** @param {Event & { detail: string }} e */
const lookUpSlowly = (e) => {
  const search = /** @type {HTMLElement & { loading: boolean }} */ (e.target);
  search.loading = true;
  clearTimeout(pending);
  pending = setTimeout(() => {
    lookUp(e);
    search.loading = false;
  }, 600);
};

export default {
  description: "A search box that opens a result list under it, grouped and keyboard-navigable.",
  preview: () => html`
    <lc-flex direction="column" gap="xs">
      <lc-search placeholder="Search components" .docs=${docs}></lc-search>
      <lc-card padding="sm">
        <lc-menu>
          <li role="menuitem"><a href="#">Button</a></li>
          <li role="menuitem"><a href="#">Badge</a></li>
        </lc-menu>
      </lc-card>
    </lc-flex>
  `,
  examples: [
    {
      title: "Over a document set",
      render: () => html`
        <lc-search placeholder="Search components" .docs=${docs}></lc-search>
      `,
    },
    {
      title: "Grouped results",
      render: () => html`
        <lc-search placeholder="Search" .docs=${docs} .groups=${["Display", "Form"]} open></lc-search>
      `,
    },
    {
      title: "Remote: the host does the matching, so typing acucar finds Pão de Açúcar",
      render: () => html`
        <lc-search label="Places in Rio" placeholder="Search places" remote inline @search-input=${lookUp}></lc-search>
      `,
    },
    {
      title: "Remote and still looking: no empty body until the answer arrives",
      render: () => html`
        <lc-search label="Places" placeholder="Search places" remote inline @search-input=${lookUpSlowly}></lc-search>
      `,
    },
    {
      title: "As a form field with an error: the message is named to the field",
      render: () => html`
        <lc-search label="Component" placeholder="Search components" .docs=${docs} error-message="Choose a component."></lc-search>
      `,
    },
  ],
};
