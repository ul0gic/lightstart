import { html } from "@lightstart/light/html";

const fields = [
  { name: "title", label: "Title", type: "text", required: true },
  { name: "kind", label: "Kind", type: "select", options: ["Talk", "Workshop", "Social"] },
  { name: "capacity", label: "Capacity", type: "number", min: 0 },
  { name: "online", label: "Online", type: "checkbox" },
  { name: "url", label: "Stream URL", type: "url", visibleIf: "online" },
];
const data = { title: "Lightning talks", kind: "Talk", capacity: 60, online: true, url: "" };
const speakers = [
  {
    name: "speakers",
    label: "Speakers",
    type: "array",
    itemFields: [
      { name: "name", label: "Name", type: "text" },
      { name: "topic", label: "Topic", type: "text" },
    ],
  },
];
const helped = [
  { name: "title", label: "Title", type: "text", required: true, help: "Shown on the schedule, so keep it short." },
  { name: "kind", label: "Kind", type: "select", options: ["Talk", "Workshop", "Social"], help: "Workshops get a longer slot." },
];
const lineup = { speakers: [{ name: "Ada", topic: "Signals" }, { name: "Grace", topic: "Compilers" }, { name: "Linus", topic: "Patches" }] };

export default {
  description: "Takes a field list and draws it: which control each field gets, how it validates, whether it is even on screen.",
  preview: () => html`
    <lc-form .fields=${fields} .data=${data}></lc-form>
  `,
  previewWidth: 640,
  examples: [
    {
      title: "A field list",
      description: "The form decides which control each field gets; the view never dispatches on a type.",
      render: () => html`
        <lc-form .fields=${fields} .data=${data}>
          <lc-button primary type="submit">Save</lc-button>
        </lc-form>
      `,
    },
    {
      title: "Stacked",
      render: () => html`
        <lc-form .fields=${fields} .data=${data} layout="stacked"></lc-form>
      `,
    },
    {
      title: "With errors",
      render: () => html`
        <lc-form .fields=${fields} .data=${{}} .errors=${{ title: "A title is required" }}></lc-form>
      `,
    },
    {
      title: "With help text",
      description: "A field's `help` is drawn under its control and named to it, so a screen reader reads it with the field.",
      render: () => html`
        <lc-form .fields=${helped} .data=${{}}></lc-form>
      `,
    },
    {
      title: "A list",
      description: "An array field draws one row per entry, each with buttons to move it or remove it, named by its position.",
      render: () => html`
        <lc-form .fields=${speakers} .data=${lineup}></lc-form>
      `,
    },
  ],
};
