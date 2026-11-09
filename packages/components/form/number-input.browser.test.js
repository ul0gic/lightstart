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

describe("lc-number-input error message", () => {
  /** @type {HTMLElement[]} */
  const mounted = [];

  before(() => {
    define("lc-label", labelDef);
    define("lc-number-input", numberInputDef);
  });

  after(() => {
    for (const node of mounted) node.remove();
  });

  /** @param {Record<string, string>} attrs */
  const mount = async (attrs) => {
    const node = document.createElement("lc-number-input");
    for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, value);
    document.body.appendChild(node);
    mounted.push(node);
    await rendered(node);
    return node;
  };

  it("draws the message under the field and names it to the field", async () => {
    const node = await mount({ "error-message": "At least one guest." });
    const message = node.querySelector(".input-error");
    assert.equal(message.textContent, "At least one guest.");
    const input = node.querySelector("input");
    assert.equal(input.getAttribute("aria-invalid"), "true");
    assert.equal(document.getElementById(input.getAttribute("aria-describedby")), message, "aria-describedby resolves to the message");
  });

  it("clearing the message removes it and both attributes", async () => {
    const node = await mount({ "error-message": "At least one guest." });
    node.errorMessage = "";
    await rendered(node);
    assert.equal(node.querySelector(".input-error"), null);
    const input = node.querySelector("input");
    assert.equal(input.hasAttribute("aria-invalid"), false);
    assert.equal(input.hasAttribute("aria-describedby"), false);
    node.errorMessage = "Too many.";
    await rendered(node);
    assert.equal(node.querySelector(".input-error").textContent, "Too many.");
    assert.equal(node.getAttribute("error-message"), "Too many.", "the property reflects, so the error style follows it");
  });

  it("a message carrying markup shows its characters", async () => {
    const node = await mount({ "error-message": "<b>x</b>" });
    const message = node.querySelector(".input-error");
    assert.equal(message.textContent, "<b>x</b>");
    assert.equal(message.querySelector("b"), null);
  });
});

describe("lc-number-input named by aria-label", () => {
  /** @type {HTMLElement[]} */
  const mounted = [];

  before(() => {
    define("lc-label", labelDef);
    define("lc-number-input", numberInputDef);
  });

  after(() => {
    for (const node of mounted) node.remove();
  });

  /** @param {Record<string, string>} attrs */
  const mount = async (attrs) => {
    const node = document.createElement("lc-number-input");
    for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, value);
    document.body.appendChild(node);
    mounted.push(node);
    await rendered(node);
    return node;
  };

  it("names the stepper's buttons by it and draws no label", async () => {
    const node = await mount({ stepper: "", "aria-label": "Servings", value: "2" });
    assert.equal(node.querySelector(".stepper-label"), null);
    const [lower, raise] = node.querySelectorAll(".stepper-button");
    assert.equal(lower.getAttribute("aria-label"), "Lower Servings");
    assert.equal(raise.getAttribute("aria-label"), "Raise Servings");
    assert.equal(node.querySelector(".stepper-read").getAttribute("aria-label"), "Edit Servings");
  });

  it("names the field and its spinner buttons by it and draws no label", async () => {
    const node = await mount({ "aria-label": "Servings", value: "2" });
    assert.equal(node.querySelector("lc-label"), null);
    assert.equal(node.querySelector("input").getAttribute("aria-label"), "Servings");
    assert.equal(node.querySelector(".number-input-button.increment").getAttribute("aria-label"), "Raise Servings");
    assert.equal(node.querySelector(".number-input-button.decrement").getAttribute("aria-label"), "Lower Servings");
  });

  it("wins the name over a drawn label, as on lc-link", async () => {
    const node = await mount({ stepper: "", label: "Shown", "aria-label": "Spoken" });
    assert.equal(node.querySelector(".stepper-label").textContent, "Shown");
    assert.equal(node.querySelector(".stepper-button").getAttribute("aria-label"), "Lower Spoken");
  });

  it("an empty aria-label leaves the label to name it", async () => {
    const node = await mount({ label: "Quantity", "aria-label": "" });
    assert.equal(node.querySelector("input").hasAttribute("aria-label"), false);
    assert.equal(node.querySelector(".number-input-button.increment").getAttribute("aria-label"), "Raise Quantity");
  });
});
