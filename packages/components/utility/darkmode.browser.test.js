import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";
import { colorScheme } from "@lightstart/light/theme/color-scheme.js";

const { default: darkmodeDef } = await import("./darkmode.js");
const { default: switchDef } = await import("../form/switch.js");

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/** @typedef {HTMLElement & { label?: string, compact?: boolean, $requestUpdate: () => Promise<void> }} Darkmode */

/** @type {Darkmode[]} */
const mounted = [];

/** @param {Record<string, unknown>} [props] */
const mount = async (props = {}) => {
  const el = /** @type {Darkmode} */ (document.createElement("lc-darkmode"));
  Object.assign(el, props);
  document.body.append(el);
  mounted.push(el);
  await tick();
  await el.$requestUpdate();
  await tick();
  return el;
};

/** @param {Element} el */
const nativeSwitch = (el) => /** @type {HTMLInputElement} */ (el.querySelector("lc-switch input[type=checkbox]"));

describe("@lightstart/light - lc-darkmode", () => {
  before(() => {
    if (!customElements.get("lc-switch")) View.define("lc-switch", switchDef);
    if (!customElements.get("lc-darkmode")) View.define("lc-darkmode", darkmodeDef);
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    colorScheme.choose(false);
    localStorage.removeItem("darkmode");
    await tick();
  });

  it("names the switch with the words it draws, read once", async () => {
    const el = await mount();
    const shown = el.querySelector(".darkmode-label");
    assert.equal(shown?.textContent?.trim(), "Dark mode");
    assert.equal(shown?.getAttribute("aria-hidden"), "true");
    assert.equal(nativeSwitch(el).labels?.[0]?.textContent?.trim(), "Dark mode");

    const named = await mount({ label: "Night theme" });
    assert.equal(named.querySelector(".darkmode-label")?.textContent?.trim(), "Night theme");
    assert.equal(nativeSwitch(named).labels?.[0]?.textContent?.trim(), "Night theme");
  });

  it("names the compact button with the same words", async () => {
    const el = await mount({ compact: true });
    assert.equal(el.querySelector("button")?.getAttribute("aria-label"), "Dark mode");
  });

  it("turns dark on and off from the switch", async () => {
    colorScheme.choose(false);
    const el = await mount();
    nativeSwitch(el).click();
    await tick();
    assert.equal(colorScheme.dark.value, true);
    assert.equal(document.documentElement.classList.contains("dark"), true);
    nativeSwitch(el).click();
    await tick();
    assert.equal(colorScheme.dark.value, false);
    assert.equal(document.documentElement.classList.contains("dark"), false);
  });
});
