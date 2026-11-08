import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";

const { default: progressBarDef } = await import("./progress-bar.js");

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/** @param {string[]} names */
const loadStyles = async (...names) => {
  const css = (await Promise.all(names.map(async (name) =>
    (await fetch(new URL(`./${name}.css`, import.meta.url))).text()))).join("\n");
  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);
  await tick();
};

/** @type {Element[]} */
const mounted = [];

/** @param {Record<string, unknown>} [props] */
const mount = async (props = {}) => {
  const el = Object.assign(document.createElement("lc-progress-bar"), props);
  document.body.append(el);
  mounted.push(el);
  await tick();
  await el.$requestUpdate();
  return el;
};

/** @param {Element} el */
const barOf = (el) => /** @type {HTMLElement} */ (el.querySelector('[role="progressbar"]'));

/** @param {Element} el */
const fillOf = (el) => /** @type {HTMLElement} */ (el.querySelector(".progress-fill"));

describe("@lightstart/light - lc-progress-bar", () => {
  before(async () => {
    if (!customElements.get("lc-progress-bar")) View.define("lc-progress-bar", progressBarDef);
    await loadStyles("progress-bar");
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("without a label, the bar keeps its values and fill and is named Progress", async () => {
    const el = await mount({ value: 30, max: 60, showLabel: true });
    const bar = barOf(el);
    assert.equal(bar.getAttribute("aria-label"), "Progress");
    assert.equal(bar.getAttribute("aria-valuenow"), "30");
    assert.equal(bar.getAttribute("aria-valuemin"), "0");
    assert.equal(bar.getAttribute("aria-valuemax"), "60");
    assert.equal(fillOf(el).getAttribute("style"), "width: 50%");
    assert.equal(el.querySelector(".progress-label").textContent, "50%");
  });

  it("a label names the bar and is not drawn", async () => {
    const el = await mount({ value: 40, label: "Uploading photos" });
    assert.equal(barOf(el).getAttribute("aria-label"), "Uploading photos");
    assert.ok(!el.textContent.includes("Uploading photos"), "the name is not drawn");
  });

  it("indeterminate drops the values and the percentage and moves the fill", async () => {
    const el = await mount({ value: 40, showLabel: true, indeterminate: true, label: "Loading" });
    const bar = barOf(el);
    assert.equal(bar.getAttribute("aria-label"), "Loading");
    for (const name of ["aria-valuenow", "aria-valuemin", "aria-valuemax"])
      assert.equal(bar.hasAttribute(name), false, `${name} is gone`);
    assert.equal(fillOf(el).hasAttribute("style"), false);
    assert.equal(el.querySelector(".progress-label"), null);
    const fill = getComputedStyle(fillOf(el));
    assert.equal(fill.animationName, "progress-bar-indeterminate");
    const width = fillOf(el).getBoundingClientRect().width / bar.getBoundingClientRect().width;
    assert.ok(width > 0.3 && width < 0.5, `the fill is a segment, ${width} of the bar`);
  });

  it("leaving indeterminate brings the values back", async () => {
    const el = await mount({ value: 25, indeterminate: true });
    el.indeterminate = false;
    await el.$requestUpdate();
    assert.equal(barOf(el).getAttribute("aria-valuenow"), "25");
    assert.equal(fillOf(el).getAttribute("style"), "width: 25%");
  });
});
