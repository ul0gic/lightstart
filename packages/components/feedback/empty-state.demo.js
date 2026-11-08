import { html } from "@lightstart/light/html";

export default {
  description: "What to show when there is nothing yet, and what to do about it.",
  preview: () => html`
    <lc-empty-state size="sm" icon="inbox" title="Inbox clear"></lc-empty-state>
  `,
  examples: [
    {
      title: "Nothing yet",
      render: () => html`
        <lc-empty-state
          icon="calendar-x"
          title="No events this month"
          description="Events you save will show up here."
        ></lc-empty-state>
      `,
    },
    {
      title: "With an action",
      render: () => html`
        <lc-empty-state icon="inbox" title="Your inbox is clear" description="Nothing needs you right now.">
          <lc-button primary size="sm">Browse events</lc-button>
        </lc-empty-state>
      `,
    },
    {
      title: "With art",
      render: () => html`
        <lc-empty-state title="No files here" description="Drop files in to share them with your team.">
          <svg slot="art" width="96" height="72" viewBox="0 0 96 72" aria-hidden="true">
            <rect x="8" y="16" width="80" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="2" opacity="0.4"></rect>
            <path d="M8 24h32l6-8h-32z" fill="currentColor" opacity="0.15"></path>
            <circle cx="48" cy="40" r="10" fill="currentColor" opacity="0.25"></circle>
          </svg>
          <lc-button size="sm">Upload files</lc-button>
        </lc-empty-state>
      `,
    },
    {
      title: "Heading level",
      render: () => html`
        <lc-empty-state icon="search" title="No matches" heading-level="3" description="Try a shorter search."></lc-empty-state>
      `,
    },
    {
      title: "Sizes",
      render: () => html`
        <lc-flex direction="column" gap="lg">
          <lc-empty-state size="sm" icon="search" title="No matches"></lc-empty-state>
          <lc-empty-state size="md" icon="search" title="No matches"></lc-empty-state>
        </lc-flex>
      `,
    },
  ],
};
