import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";

const { default: switchDef } = await import("./switch.js");

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/** @typedef {HTMLElement & { checked: boolean, hint: string | null, $requestUpdate: () => Promise<unknown> }} Switch */

/** @type {Element[]} */
const mounted = [];

/** @param {Record<string, string>} [attrs] */
const mount = async (attrs = {}) => {
  const el = /** @type {Switch} */ (document.createElement("lc-switch"));
  for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
  document.body.append(el);
  mounted.push(el);
  await tick();
  await el.$requestUpdate();
  return el;
};

/** @param {Element} el */
const control = (el) => /** @type {HTMLInputElement} */ (el.querySelector("input.switch-native"));

/** @param {Element} el */
const describedBy = (el) => (control(el).getAttribute("aria-describedby") ?? "").split(" ").map((id) => document.getElementById(id));

describe("@lightstart/light - lc-switch hint", () => {
  before(() => {
    if (!customElements.get("lc-switch")) View.define("lc-switch", switchDef);
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("draws the hint after the label and names it to the switch", async () => {
    const el = await mount({ label: "Email updates", hint: "Once a week." });
    const hint = /** @type {HTMLElement} */ (el.querySelector(".switch-hint"));
    assert.equal(hint.textContent, "Once a week.");
    assert.deepEqual(describedBy(el), [hint]);
    assert.equal(el.querySelector("label .switch-hint"), null, "the hint stays out of the label, so out of the name");
    assert.equal(el.querySelector("label")?.textContent?.trim(), "Email updates");
  });

  it("two switches with hints name their own", async () => {
    const one = await mount({ label: "One", hint: "First." });
    const two = await mount({ label: "Two", hint: "Second." });
    assert.notEqual(control(one).getAttribute("aria-describedby"), control(two).getAttribute("aria-describedby"));
    assert.equal(describedBy(two)[0]?.textContent, "Second.");
  });

  it("clearing the hint removes it and the description", async () => {
    const el = await mount({ label: "Email updates", hint: "Once a week." });
    el.hint = "";
    await el.$requestUpdate();
    assert.equal(el.querySelector(".switch-hint"), null);
    assert.equal(control(el).hasAttribute("aria-describedby"), false);
  });

  it("a hint carrying markup shows its characters", async () => {
    const el = await mount({ hint: "<b>x</b>" });
    const hint = /** @type {HTMLElement} */ (el.querySelector(".switch-hint"));
    assert.equal(hint.textContent, "<b>x</b>");
    assert.equal(hint.querySelector("b"), null);
  });

  it("without a hint, or with an empty one, the switch has no hint and no description", async () => {
    for (const attrs of [{ label: "Email updates" }, { label: "Email updates", hint: "" }]) {
      const el = await mount(attrs);
      assert.equal(el.querySelector(".switch-hint"), null);
      assert.equal(control(el).hasAttribute("aria-describedby"), false);
    }
  });

  it("toggling a hinted switch still reports its state", async () => {
    const el = await mount({ label: "Email updates", hint: "Once a week." });
    /** @type {boolean[]} */
    const seen = [];
    el.addEventListener("change", (e) => seen.push(/** @type {CustomEvent<{ checked: boolean }>} */ (e).detail.checked));
    control(el).click();
    await tick();
    assert.equal(el.checked, true);
    assert.deepEqual(seen, [true]);
  });
});
