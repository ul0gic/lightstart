import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";

const { default: emptyStateDef } = await import("./empty-state.js");

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

/**
 * @param {Record<string, string>} attrs
 * @param {string} [inner]
 */
const mount = async (attrs, inner = "") => {
  const el = document.createElement("lc-empty-state");
  for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
  el.innerHTML = inner;
  document.body.append(el);
  mounted.push(el);
  await tick();
  await el.$requestUpdate();
  return el;
};

/** @param {Element} el */
const titleOf = (el) => /** @type {HTMLElement} */ (el.querySelector("[part~=lc-empty-state-title]"));

/** @param {Element} el */
const artOf = (el) => /** @type {HTMLElement} */ (el.querySelector("[part~=lc-empty-state-art]"));

const ART = '<svg slot="art" width="40" height="30" aria-hidden="true"><rect width="40" height="30"></rect></svg>';

describe("@lightstart/light - lc-empty-state", () => {
  before(async () => {
    if (!customElements.get("lc-empty-state")) View.define("lc-empty-state", emptyStateDef);
    await loadStyles("empty-state");
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("renders the title as an h2 by default", async () => {
    const title = titleOf(await mount({ title: "Nothing here" }));
    assert.equal(title.localName, "h2");
    assert.equal(title.textContent, "Nothing here");
    assert.ok(title.classList.contains("empty-state-title"));
  });

  it("heading-level picks the heading, and a level outside 1 to 6 falls back to h2", async () => {
    assert.equal(titleOf(await mount({ title: "Nothing here", "heading-level": "3" })).localName, "h3");
    assert.equal(titleOf(await mount({ title: "Nothing here", "heading-level": "6" })).localName, "h6");
    assert.equal(titleOf(await mount({ title: "Nothing here", "heading-level": "7" })).localName, "h2");
    assert.equal(titleOf(await mount({ title: "Nothing here", "heading-level": "0" })).localName, "h2");
    const el = await mount({ title: "Nothing here" });
    el.setAttribute("heading-level", "4");
    await el.$requestUpdate();
    assert.equal(titleOf(el).localName, "h4");
    assert.equal(el.querySelectorAll("[part~=lc-empty-state-title]").length, 1);
  });

  it("the title's font family reads --lc-empty-state-title-font-family", async () => {
    const el = await mount({ title: "Nothing here", style: "--lc-empty-state-title-font-family: monospace" });
    assert.equal(getComputedStyle(titleOf(el)).fontFamily, "monospace");
  });

  it("without art, the icon draws in the art wrapper as before", async () => {
    const el = await mount({ title: "Nothing here", icon: "inbox" });
    const icon = el.querySelector("[part~=lc-empty-state-icon]");
    assert.ok(icon);
    assert.equal(icon.querySelector("lc-icon")?.getAttribute("name"), "inbox");
    assert.ok(artOf(el).contains(icon));
    assert.notEqual(getComputedStyle(artOf(el)).display, "none");
  });

  it("slotted art replaces the icon and comes before the title", async () => {
    const el = await mount({ title: "Nothing here", icon: "inbox" }, ART);
    const svg = /** @type {Element} */ (el.querySelector("svg"));
    assert.equal(el.querySelector("[part~=lc-empty-state-icon]"), null);
    assert.ok(artOf(el).contains(svg));
    assert.ok(svg.compareDocumentPosition(titleOf(el)) & Node.DOCUMENT_POSITION_FOLLOWING);
    assert.ok(svg.getBoundingClientRect().bottom <= titleOf(el).getBoundingClientRect().top);
  });

  it("with neither art nor icon, the art wrapper takes no space", async () => {
    const el = await mount({ title: "Nothing here" });
    assert.equal(getComputedStyle(artOf(el)).display, "none");
  });

  it("the default slot still fills the actions wrapper", async () => {
    const el = await mount({ title: "Nothing here" }, `${ART}<button>Start</button>`);
    const button = /** @type {Element} */ (el.querySelector("button"));
    assert.ok(el.querySelector("[part~=lc-empty-state-actions]")?.contains(button));
  });
});
