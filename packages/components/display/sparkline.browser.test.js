import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";

const { default: chartDef } = await import("./sparkline.js");

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/** @type {Element[]} */
const mounted = [];

/** @param {Record<string, unknown>} props */
const mount = async (props) => {
  const el = /** @type {any} */ (document.createElement("lc-sparkline"));
  Object.assign(el, props);
  document.body.append(el);
  mounted.push(el);
  await tick();
  await el.$requestUpdate();
  return el;
};

const PROPS = { data: [3, 8, 5] };

describe("@lightstart/light - lc-sparkline area", () => {
  before(async () => {
    if (!customElements.get("lc-sparkline")) View.define("lc-sparkline", chartDef);
    const css = await (await fetch(new URL("./sparkline.css", import.meta.url))).text();
    const style = document.createElement("style");
    style.textContent = css;
    document.head.append(style);
    document.documentElement.style.setProperty("--color-primary", "rgb(0, 0, 255)");
    await tick();
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("fills the area with a vertical gradient from the line colour to nothing", async () => {
    const el = await mount({ ...PROPS, showArea: true });
    const gradient = el.querySelector("linearGradient");
    assert.ok(gradient, "the gradient is drawn");
    assert.equal(gradient.getAttribute("y2"), "1");
    const area = el.querySelector('path[fill^="url("]');
    assert.equal(area.getAttribute("fill"), `url(#${gradient.id})`);
    const [top, bottom] = [...gradient.querySelectorAll("stop")].map((stop) => getComputedStyle(stop));
    assert.equal(top.stopColor, "rgb(0, 0, 255)");
    assert.equal(Number(top.stopOpacity), 0.28);
    assert.equal(Number(bottom.stopOpacity), 0);
  });

  it("gives each instance its own gradient id", async () => {
    const first = await mount({ ...PROPS, showArea: true });
    const second = await mount({ ...PROPS, showArea: true });
    const ids = [first, second].map((el) => el.querySelector("linearGradient").id);
    assert.notEqual(ids[0], ids[1]);
    await first.$requestUpdate();
    assert.equal(first.querySelector("linearGradient").id, ids[0], "and keeps it across renders");
  });

  it("draws no gradient without showArea", async () => {
    const el = await mount(PROPS);
    assert.equal(el.querySelector("linearGradient"), null);
  });

  it("is an image named after its kind or its label, followed by a sentence only a screen reader sees", async () => {
    const el = await mount(PROPS);
    const svg = el.querySelector("svg");
    assert.equal(svg.getAttribute("role"), "img");
    assert.equal(svg.getAttribute("aria-label"), "Sparkline");
    const summary = el.querySelector(".sparkline-summary");
    assert.equal(summary.textContent, "From 3 to 5, 3 points");
    const box = summary.getBoundingClientRect();
    assert.ok(box.width <= 1 && box.height <= 1, "and takes no room");
    const single = await mount({ data: [7], label: "Visits" });
    assert.equal(single.querySelector("svg").getAttribute("aria-label"), "Visits");
    assert.equal(single.querySelector(".sparkline-summary").textContent, "1 point: 7");
  });
});
