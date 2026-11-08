/**
 * `<lc-number-input>` with no value. The prop defaults to `null` rather than
 * `0`, so this pins the three places that shape shows: an empty control
 * renders empty (not "0" and not "Invalid"), the form value it publishes is
 * the empty string, and nudging from null starts at zero.
 */
import assert from "node:assert/strict";
import { after, before, describe, it } from "node:test";
import View from "@lightstart/light";
import numberInputDef from "@lightstart/components/form/number-input.js";
import labelDef from "@lightstart/components/form/label.js";

const define = (tag, definition) => {
  if (!customElements.get(tag)) View.define(tag, definition);
};

const rendered = (el) => el.$requestUpdate() ?? Promise.resolve();

describe("lc-number-input with no value", () => {
  let el;

  before(async () => {
    define("lc-label", labelDef);
    define("lc-number-input", numberInputDef);
    el = document.createElement("lc-number-input");
    document.body.appendChild(el);
    await rendered(el);
  });

  after(() => el.remove());

  it("starts at null and renders an empty input", () => {
    assert.equal(el.value, null);
    const input = el.querySelector("input");
    assert.ok(input, "the control renders an input");
    assert.equal(input.value, "");
  });

  it("submits an empty hidden value while it has none", async () => {
    el.name = "quantity";
    await rendered(el);
    const hidden = /** @type {HTMLInputElement} */ (el.querySelector('input[type="hidden"]'));
    assert.equal(hidden.name, "quantity");
    assert.equal(hidden.value, "");
  });

  it("nudges from null as if it were zero", async () => {
    el.step = 5;
    el.increment();
    await rendered(el);
    assert.equal(el.value, 5);
    assert.equal(el.querySelector("input").value, "5");
  });

  it("goes back to null when the input is cleared", async () => {
    const input = el.querySelector("input");
    input.value = "";
    input.dispatchEvent(new Event("change", { bubbles: true }));
    await rendered(el);
    assert.equal(el.value, null);
    assert.equal(el.querySelector("input").value, "");
  });
});

describe("lc-number-input with a label", () => {
  let el;

  before(async () => {
    define("lc-label", labelDef);
    define("lc-number-input", numberInputDef);
    el = document.createElement("lc-number-input");
    el.setAttribute("label", "Quantity");
    el.setAttribute("step", "5");
    el.setAttribute("value", "10");
    document.body.appendChild(el);
    await rendered(el);
    await rendered(el.querySelector("lc-label"));
  });

  after(() => el.remove());

  it("names the field with its label", () => {
    const input = el.querySelector("input");
    assert.equal(input.labels.length, 1, "the lc-label's for points at the field");
    assert.equal(input.labels[0].textContent.trim(), "Quantity");
  });

  it("names the two spinner buttons with the stepper's words and keeps them out of the tab order", () => {
    const raise = el.querySelector(".number-input-button.increment");
    const lower = el.querySelector(".number-input-button.decrement");
    assert.equal(raise.getAttribute("aria-label"), "Raise Quantity");
    assert.equal(lower.getAttribute("aria-label"), "Lower Quantity");
    assert.equal(raise.tabIndex, -1);
    assert.equal(lower.tabIndex, -1);
  });

  it("steps by step from the field, as ArrowUp and ArrowDown do", async () => {
    const input = el.querySelector("input");
    assert.equal(input.step, "5", "the field carries step, which the arrow keys step by");
    input.stepUp();
    input.dispatchEvent(new Event("input", { bubbles: true }));
    await rendered(el);
    assert.equal(el.value, 15);
    input.stepDown();
    input.stepDown();
    input.dispatchEvent(new Event("input", { bubbles: true }));
    await rendered(el);
    assert.equal(el.value, 5);
  });
});
