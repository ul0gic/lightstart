import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";

const { default: imageDef } = await import("./image.js");

const PIXEL = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3Crect width='3' height='2' fill='gray'/%3E%3C/svg%3E";

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));
/** @param {() => unknown} fn */
const until = async (fn, ms = 3000) => {
  const start = Date.now();
  while (Date.now() - start < ms) {
    if (fn()) return true;
    await tick();
  }
  return false;
};

/** @type {Element[]} */
const mounted = [];

/** @param {Record<string, string>} [attrs] */
const mount = async (attrs = {}) => {
  const el = /** @type {HTMLElement & { src: string, $requestUpdate: () => Promise<unknown> }} */ (document.createElement("lc-image"));
  for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
  document.body.prepend(el);
  mounted.push(el);
  await tick();
  await el.$requestUpdate();
  return el;
};

/** @param {Element} el */
const placeholderOf = (el) => el.querySelector('img[aria-hidden="true"]');

describe("@lightstart/light - lc-image", () => {
  before(() => {
    if (!customElements.get("lc-image")) View.define("lc-image", imageDef);
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("draws a real img that loads lazily and is named by alt, and asks nothing of a style-src policy", async () => {
    const src = `/lc-image-pixel-${Date.now()}.gif`;
    const el = await mount({ src, alt: "A single pixel" });
    const img = el.querySelector("img");
    assert.equal(img?.getAttribute("src"), src);
    assert.equal(img?.getAttribute("alt"), "A single pixel");
    assert.equal(img?.getAttribute("loading"), "lazy");
    assert.equal(img?.getAttribute("decoding"), "async");
    await tick();
    assert.equal(document.getElementById("lc-image-styles"), null, "no style element is injected");
    const fetched = performance.getEntriesByType("resource").filter((e) => e.name.endsWith(src)).map((e) => /** @type {PerformanceResourceTiming} */ (e).initiatorType);
    assert.ok(!fetched.includes("fetch"), "the picture is never fetched by script");
  });

  it("with no alt the picture is decorative, and with no src there is nothing to draw", async () => {
    const plain = await mount({ src: PIXEL });
    assert.equal(plain.querySelector("img")?.getAttribute("alt"), "");
    const empty = await mount();
    assert.equal(empty.querySelector("img"), null);
  });

  it("keeps the placeholder while the picture cannot load, drops it once one does, and shows it again for a new source", async () => {
    const el = await mount({ src: `/lc-image-missing-${Date.now()}.png`, placeholder: PLACEHOLDER, alt: "Missing" });
    const ph = placeholderOf(el);
    assert.equal(ph?.getAttribute("src"), PLACEHOLDER);
    assert.equal(ph?.getAttribute("alt"), "");
    assert.ok(await until(() => { const img = el.querySelector("img:not([aria-hidden])"); return img?.complete && img.naturalWidth === 0; }), "the missing picture failed");
    await tick();
    assert.ok(placeholderOf(el), "a failed picture keeps its placeholder");

    el.src = PIXEL;
    assert.ok(await until(() => placeholderOf(el) === null), "the placeholder goes once the picture has loaded");
    assert.equal(el.querySelector("img")?.getAttribute("src"), PIXEL);

    el.src = `/lc-image-missing-${Date.now()}-b.png`;
    await el.$requestUpdate();
    assert.ok(placeholderOf(el), "a new source starts from the placeholder again");
  });
});
