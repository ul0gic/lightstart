/**
 * `<lc-clipboard>`: a copy the clipboard accepts says so, and one it cannot
 * take (no Clipboard API on plain HTTP, or a refused write) leaves the text
 * selected in a read-only field and says how to copy it. The clipboard is
 * stubbed: a test page has no permission to write the real one.
 */
import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import View from "@lightstart/light";
import buttonDef from "@lightstart/components/display/button.js";
import linkDef from "@lightstart/components/display/link.js";
import clipboardDef from "@lightstart/components/utility/clipboard.js";

const define = (tag, definition) => {
  if (!customElements.get(tag)) View.define(tag, definition);
};
const settle = () => new Promise((resolve) => setTimeout(resolve, 20));

define("lc-link", linkDef);
define("lc-button", buttonDef);
define("lc-clipboard", clipboardDef);

const realClipboard = navigator.clipboard;
/** @param {unknown} value */
const stubClipboard = (value) => Object.defineProperty(navigator, "clipboard", { configurable: true, value });

/** @typedef {HTMLElement & { text: string, copied?: boolean, $requestUpdate: () => Promise<void> }} Clipboard */

/** @type {Clipboard[]} */
const mounted = [];

const mount = async () => {
  const el = /** @type {Clipboard} */ (document.createElement("lc-clipboard"));
  el.text = "pnpm add @lightstart/light";
  document.body.append(el);
  mounted.push(el);
  await el.$requestUpdate();
  return el;
};

/** @param {Clipboard} el */
const press = async (el) => {
  /** @type {HTMLButtonElement} */ (el.querySelector(".clipboard-button button")).click();
  await settle();
};

/** @param {Clipboard} el */
const status = (el) => el.querySelector("[role=status]")?.textContent?.trim();

describe("lc-clipboard", () => {
  afterEach(() => {
    for (const el of mounted.splice(0)) el.remove();
    stubClipboard(realClipboard);
  });

  it("has an empty status region before anything happens", async () => {
    const el = await mount();
    assert.equal(status(el), "");
    assert.equal(el.querySelector(".clipboard-field"), null);
  });

  it("copies, emits copy, and announces it", async () => {
    /** @type {string[]} */
    const written = [];
    stubClipboard({ writeText: async (/** @type {string} */ text) => { written.push(text); } });
    const el = await mount();
    /** @type {unknown[]} */
    const copies = [];
    el.addEventListener("copy", (/** @type {CustomEvent} */ e) => copies.push(e.detail));
    await press(el);
    assert.deepEqual(written, [el.text]);
    assert.equal(el.copied, true);
    assert.equal(copies.length, 1);
    assert.equal(status(el), "Copied");
    assert.equal(el.querySelector(".clipboard-field"), null);
  });

  for (const [why, clipboard] of [
    ["no Clipboard API", undefined],
    ["a refused write", { writeText: () => Promise.reject(new DOMException("Write permission denied.", "NotAllowedError")) }],
  ])
    it(`selects the text for a copy by hand on ${why}, and says so`, async () => {
      stubClipboard(clipboard);
      const el = await mount();
      let copies = 0;
      el.addEventListener("copy", () => copies++);
      await press(el);
      const field = /** @type {HTMLInputElement} */ (el.querySelector(".clipboard-field"));
      assert.ok(field, "a field holds the text");
      assert.equal(field.readOnly, true);
      assert.equal(field.getAttribute("aria-label"), "Text to copy");
      assert.equal(field.value, el.text);
      assert.equal(document.activeElement, field);
      assert.equal(field.selectionStart, 0);
      assert.equal(field.selectionEnd, el.text.length);
      assert.match(status(el), /^Couldn't copy\. The text is selected; press (Ctrl|⌘)\+C to copy it\.$/);
      assert.ok(!el.copied, "nothing claims a copy");
      assert.equal(copies, 0);
    });

  it("puts the field away on Escape and hands focus back to the button", async () => {
    stubClipboard(undefined);
    const el = await mount();
    await press(el);
    el.querySelector(".clipboard-field").dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await settle();
    assert.equal(el.querySelector(".clipboard-field"), null);
    assert.equal(document.activeElement, el.querySelector(".clipboard-button button"));
    assert.equal(status(el), "");
  });

  it("puts the field away when focus leaves it", async () => {
    stubClipboard(undefined);
    const el = await mount();
    await press(el);
    el.querySelector(".clipboard-field").blur();
    await settle();
    assert.equal(el.querySelector(".clipboard-field"), null);
  });

  it("takes a copy by hand from the field as the copy, and keeps the browser's copy event inside", async () => {
    stubClipboard(undefined);
    const el = await mount();
    /** @type {Event[]} */
    const seen = [];
    /** @type {Event[]} */
    const outside = [];
    el.addEventListener("copy", (e) => seen.push(e));
    document.body.addEventListener("copy", (e) => outside.push(e));
    await press(el);
    const field = /** @type {HTMLInputElement} */ (el.querySelector(".clipboard-field"));
    const native = new ClipboardEvent("copy", { bubbles: true, cancelable: true });
    field.dispatchEvent(native);
    await settle();
    assert.equal(native.defaultPrevented, false, "the browser still copies the selection");
    assert.equal(outside.length, 0);
    assert.equal(seen.length, 1);
    assert.ok(seen[0] instanceof CustomEvent);
    assert.deepEqual(/** @type {CustomEvent} */ (seen[0]).detail, { text: el.text });
    assert.equal(el.copied, true);
    assert.equal(status(el), "Copied");
    assert.equal(el.querySelector(".clipboard-field"), null);
    assert.equal(document.activeElement, el.querySelector(".clipboard-button button"));
  });
});
