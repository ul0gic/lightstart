import { html } from "@lightstart/light/html";

const doc = `## Getting started

Install the package and write the tag. There is **no import step**.

- Components load themselves
- Styles come from the theme
- \`bootstrapp check\` keeps the conventions

> A framework sized like a library.`;

const guide = `## Routes

Every app declares its route table in a root \`routes.js\`:

\`\`\`javascript
export default defineRoutes({
  "/": { name: "home", title: "Home", component: "app-home" },
});
\`\`\`

## Views

A view renders and dispatches; state lives in a controller.`;

const comment = `Press <kbd>Enter</kbd> to send. The [guide](https://example.com/guide) has more, and [this link](javascript:void(0)) is drawn as text.`;

export default {
  description: "Markdown rendered to HTML, styled by the theme's prose rules.",
  preview: () => html`<lc-markdown .content=${doc}></lc-markdown>`,
  previewWidth: 640,
  examples: [
    {
      title: "Rendered",
      render: () => html`
        <lc-markdown .content=${doc}></lc-markdown>
      `,
    },
    {
      title: "Headings with anchors, fences as code blocks",
      description: "Every heading gets an id; `anchors` shows a link to it on hover. A fenced block renders through lc-code-block.",
      render: () => html`
        <lc-markdown anchors .content=${guide}></lc-markdown>
      `,
    },
    {
      title: "Untrusted content",
      description: "Set `untrusted` for markdown the page did not write, such as a reader's comment: HTML in it is drawn as text, and a link keeps its URL only when it stays on the site or goes to http, https, mailto or tel.",
      render: () => html`
        <lc-markdown untrusted .content=${comment}></lc-markdown>
      `,
    },
  ],
};
