import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";
import textareaDef from "./textarea.js";

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/** @type {Element[]} */
const mounted = [];

/** @param {Record<string, string>} [attrs] */
const mount = async (attrs = {}) => {
  const el = /** @type {HTMLElement & { $requestUpdate: () => Promise<unknown> }} */ (document.createElement("lc-textarea"));
  for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
  document.body.append(el);
  mounted.push(el);
  await tick();
  await el.$requestUpdate();
  return /** @type {HTMLTextAreaElement} */ (el.querySelector("textarea"));
};

describe("lc-textarea", () => {
  before(() => {
    if (!customElements.get("lc-textarea")) View.define("lc-textarea", textareaDef);
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("hands maxlength and minlength to its field, so the browser enforces them", async () => {
    const field = await mount({ maxlength: "200", minlength: "10" });
    assert.equal(field.maxLength, 200);
    assert.equal(field.minLength, 10);
  });

  it("hands autocomplete and autocapitalize to its field", async () => {
    const field = await mount({ autocomplete: "street-address", autocapitalize: "sentences" });
    assert.equal(field.getAttribute("autocomplete"), "street-address");
    assert.equal(field.getAttribute("autocapitalize"), "sentences");
  });

  it("sets no limit and no autofill hint when none is given", async () => {
    const field = await mount();
    for (const name of ["maxlength", "minlength", "autocomplete", "autocapitalize"]) assert.equal(field.hasAttribute(name), false, name);
  });
});
