import { html } from "@lightstart/light/html";
import { colorScheme } from "@lightstart/light/theme/color-scheme.js";

/** @param {CustomEvent<{ value: string }>} e */
const pickScheme = (e) => {
  if (e.detail.value === "Match device") colorScheme.follow();
  else colorScheme.choose(e.detail.value === "Dark");
};

export default {
  description: "The light and dark toggle, following the system until a reader decides.",
  preview: () => html`
    <lc-flex gap="md" align="center">
      <lc-darkmode></lc-darkmode>
      <lc-darkmode compact></lc-darkmode>
    </lc-flex>
  `,
  examples: [
    {
      title: "The toggle",
      render: () => html`
        <lc-flex gap="md" align="center">
          <lc-darkmode></lc-darkmode>
          <lc-darkmode compact></lc-darkmode>
        </lc-flex>
      `,
    },
    {
      title: "As a nav item",
      render: () => html`
        <lc-darkmode nav-item></lc-darkmode>
      `,
    },
    {
      title: "Light, dark or the device",
      description: "colorScheme.follow() forgets the choice and follows the system again.",
      render: () => html`
        <lc-segmented
          .options=${["Light", "Dark", "Match device"]}
          value=${colorScheme.followsSystem ? "Match device" : colorScheme.dark.value ? "Dark" : "Light"}
          @change=${pickScheme}
        ></lc-segmented>
      `,
    },
  ],
};
