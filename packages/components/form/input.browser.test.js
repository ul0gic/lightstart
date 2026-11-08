import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";

const { default: inputDef } = await import("./input.js");

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/** @type {Element[]} */
const mounted = [];

/** @param {Record<string, string>} [attrs] */
const mount = async (attrs = {}) => {
  const el = /** @type {HTMLElement & { value: string, $requestUpdate: () => Promise<unknown> }} */ (document.createElement("lc-input"));
  for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
  document.body.append(el);
  mounted.push(el);
  await tick();
  await el.$requestUpdate();
  return el;
};

/** @param {Element} el */
const field = (el) => /** @type {HTMLInputElement} */ (el.querySelector("input.input"));

/** @param {Element} el @param {string} text */
const type = (el, text) => {
  field(el).value = text;
  field(el).dispatchEvent(new Event("input", { bubbles: true }));
};

describe("@lightstart/light - lc-input", () => {
  before(() => {
    if (!customElements.get("lc-input")) View.define("lc-input", inputDef);
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("draws a prefix inside the field and keeps it out of the value", async () => {
    const el = await mount({ prefix: "@" });
    assert.equal(el.querySelector(".input-prefix")?.textContent, "@");
    type(el, "alanleal");
    assert.equal(el.value, "alanleal");
    const plain = await mount();
    assert.equal(plain.querySelector(".input-prefix"), null, "no prefix, no wrapper");
  });

  it("reports what is typed and emits input with it", async () => {
    const el = await mount({ placeholder: "Add a rule" });
    /** @type {string[]} */
    const seen = [];
    el.addEventListener("input", (e) => seen.push(/** @type {CustomEvent<{ value: string }>} */ (e).detail.value));
    type(el, "Quote prices in BRL.");
    assert.equal(el.value, "Quote prices in BRL.");
    assert.deepEqual(seen, ["Quote prices in BRL."]);
  });

  it("clears the field when the owner resets the value it typed", async () => {
    const el = await mount();
    type(el, "Name the place.");
    await el.$requestUpdate();
    el.value = "";
    await el.$requestUpdate();
    assert.equal(field(el).value, "", "a property binding reaches a field the user has typed in, an attribute would not");
    el.value = "Again";
    await el.$requestUpdate();
    assert.equal(field(el).value, "Again");
  });
});

describe("@lightstart/light - lc-input focusInput", () => {
  before(() => {
    if (!customElements.get("lc-input")) View.define("lc-input", inputDef);
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("puts the caret in its field when a page shortcut asks, and what is typed lands there", async () => {
    const el = /** @type {HTMLElement & { value: string, focusInput(): void }} */ (await mount({ placeholder: "Search docs..." }));
    /** @param {KeyboardEvent} e */
    const shortcut = (e) => {
      if (e.key === "/") el.focusInput();
    };
    document.addEventListener("keydown", shortcut);
    document.body.dispatchEvent(new KeyboardEvent("keydown", { key: "/", bubbles: true }));
    document.removeEventListener("keydown", shortcut);
    assert.equal(document.activeElement, field(el));
    document.execCommand("insertText", false, "button");
    assert.equal(field(el).value, "button");
    assert.equal(el.value, "button");
  });
});

describe("@lightstart/light - lc-input full width", () => {
  before(() => {
    if (!customElements.get("lc-input")) View.define("lc-input", inputDef);
    const sheet = document.createElement("link");
    sheet.rel = "stylesheet";
    sheet.href = new URL("./input.css", import.meta.url).href;
    document.head.append(sheet);
    return new Promise((resolve) => { sheet.onload = () => resolve(undefined); sheet.onerror = () => resolve(undefined); });
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  /** @param {number} width @param {(el: HTMLElement & { fullWidth: boolean }) => void} [setup] */
  const mountIn = async (width, setup) => {
    const el = /** @type {HTMLElement & { fullWidth: boolean, $requestUpdate: () => Promise<unknown> }} */ (document.createElement("lc-input"));
    setup?.(el);
    const host = document.createElement("div");
    host.style.width = `${width}px`;
    host.append(el);
    document.body.append(host);
    mounted.push(host);
    await tick();
    await el.$requestUpdate();
    return el;
  };

  it("fills its container when fullWidth is set", async () => {
    const el = await mountIn(600, (el) => { el.fullWidth = true; });
    assert.ok(el.hasAttribute("full-width"), "the prop reflects as full-width");
    assert.ok(Math.abs(el.getBoundingClientRect().width - 600) <= 1, `measured ${el.getBoundingClientRect().width}`);
  });

  it("fills its container from the full-width attribute", async () => {
    const el = await mountIn(600, (el) => el.setAttribute("full-width", ""));
    assert.equal(el.fullWidth, true);
    assert.ok(Math.abs(el.getBoundingClientRect().width - 600) <= 1, `measured ${el.getBoundingClientRect().width}`);
  });

  it("keeps its own width without it", async () => {
    const el = await mountIn(600);
    const wide = await mountIn(1000);
    assert.equal(getComputedStyle(el).display, "inline-block");
    assert.ok(el.getBoundingClientRect().width < 600, `measured ${el.getBoundingClientRect().width}`);
    assert.equal(el.getBoundingClientRect().width, wide.getBoundingClientRect().width, "its width follows its content, not the container");
  });
});

describe("@lightstart/light - lc-input error message", () => {
  before(() => {
    if (!customElements.get("lc-input")) View.define("lc-input", inputDef);
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("draws the message under the field and names it to the field", async () => {
    const el = await mount({ label: "Email", "error-message": "Enter an email address." });
    const message = /** @type {HTMLElement} */ (el.querySelector(".input-error"));
    assert.equal(message.textContent, "Enter an email address.");
    assert.equal(field(el).getAttribute("aria-invalid"), "true");
    const describedBy = /** @type {string} */ (field(el).getAttribute("aria-describedby"));
    assert.equal(document.getElementById(describedBy), message, "aria-describedby resolves to the message");
  });

  it("clearing the message removes it and both attributes", async () => {
    const el = /** @type {HTMLElement & { errorMessage: string, $requestUpdate: () => Promise<unknown> }} */ (await mount({ "error-message": "Enter an email address." }));
    el.errorMessage = "";
    await el.$requestUpdate();
    assert.equal(el.querySelector(".input-error"), null);
    assert.equal(field(el).hasAttribute("aria-invalid"), false);
    assert.equal(field(el).hasAttribute("aria-describedby"), false);
    el.errorMessage = "Taken.";
    await el.$requestUpdate();
    assert.equal(el.querySelector(".input-error")?.textContent, "Taken.");
    assert.equal(el.getAttribute("error-message"), "Taken.", "the property reflects, so the error style follows it");
  });

  it("a message carrying markup shows its characters", async () => {
    const el = await mount({ "error-message": "<b>x</b>" });
    const message = /** @type {HTMLElement} */ (el.querySelector(".input-error"));
    assert.equal(message.textContent, "<b>x</b>");
    assert.equal(message.querySelector("b"), null);
  });

  it("a prefixed field keeps the message outside its wrapper", async () => {
    const el = await mount({ prefix: "@", "error-message": "Taken." });
    assert.equal(el.querySelector(".input-affixed .input-error"), null);
    assert.equal(el.querySelector(".input-affixed")?.nextElementSibling, el.querySelector(".input-error"));
  });
});
