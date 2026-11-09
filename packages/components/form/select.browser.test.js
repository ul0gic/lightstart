import assert from "node:assert/strict";
import { after, before, describe, it } from "node:test";
import View from "@lightstart/light";
import selectDef from "./select.js";
import tagDef from "../display/tag.js";

const waitFor = async (predicate, label, timeout = 5000) => {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (predicate()) return;
    await new Promise((r) => setTimeout(r, 20));
  }
  throw new Error(`timed out waiting for ${label}`);
};

describe("lc-select inside a reset", () => {
  let el;

  before(async () => {
    if (!customElements.get("lc-select")) View.define("lc-select", selectDef);
    const sheet = document.createElement("link");
    sheet.rel = "stylesheet";
    sheet.href = new URL("./select.css", import.meta.url).href;
    const loaded = new Promise((resolve) => { sheet.onload = resolve; sheet.onerror = resolve; });
    document.head.append(sheet);
    await loaded;
    const reset = document.createElement("style");
    reset.textContent = "button, textarea, select { background: inherit; }";
    document.head.append(reset);
    el = document.createElement("lc-select");
    el.options = [{ value: "a", label: "A" }, { value: "b", label: "B" }];
    el.value = "a";
    el.style.cssText = "--lc-select-border-radius:9999px;--lc-select-background:rgb(255, 255, 255)";
    document.body.appendChild(el);
  });

  after(() => el.remove());

  it("keeps the control transparent, so a rounded wrapper stays rounded", async () => {
    await waitFor(() => el.querySelector(".select-wrapper select"), "the control");
    const wrapper = el.querySelector(".select-wrapper");
    const control = el.querySelector("select");
    assert.equal(getComputedStyle(wrapper).borderRadius, "9999px");
    assert.equal(getComputedStyle(wrapper).backgroundColor, "rgb(255, 255, 255)");
    assert.equal(getComputedStyle(control).backgroundColor, "rgba(0, 0, 0, 0)", "the control does not paint the wrapper's corners square");
  });
});

describe("lc-select typed into, many at once: the picks as tags", () => {
  let el;
  /** @type {unknown[]} */
  let changes;

  const field = () => /** @type {HTMLInputElement | null} */ (el.querySelector(".select-tags-input"));
  const type = (text) => {
    const input = /** @type {HTMLInputElement} */ (field());
    input.focus();
    input.value = text;
    input.dispatchEvent(new Event("input", { bubbles: true }));
  };
  const key = (name) => field()?.dispatchEvent(new KeyboardEvent("keydown", { key: name, bubbles: true }));
  const shown = () => [...el.querySelectorAll(".select-dropdown .select-option")].map((o) => /** @type {HTMLElement} */ (o).dataset.value);
  const tags = () => [...el.querySelectorAll(".select-tag")].map((t) => /** @type {HTMLElement} */ (t).dataset.value);

  before(async () => {
    if (!customElements.get("lc-tag")) View.define("lc-tag", tagDef);
    changes = [];
    el = document.createElement("lc-select");
    el.multiple = true;
    el.searchable = true;
    el.max = 2;
    el.label = "Languages";
    el.options = [
      { value: "af", label: "Afrikaans" },
      { value: "en", label: "English", leading: "E" },
      { value: "fr", label: "French", leading: "F" },
      { value: "fy", label: "Frisian" },
    ];
    el.addEventListener("change", (/** @type {CustomEvent} */ e) => changes.push(e.detail.value));
    document.body.appendChild(el);
    await waitFor(() => field(), "the field to type into");
  });

  after(() => el.remove());

  it("lists what starts with the letters first, and Enter makes the first a tag", async () => {
    type("fr");
    await waitFor(() => shown().length === 3, "three matches");
    assert.deepEqual(shown(), ["fr", "fy", "af"], "a word that starts with it comes before one that only contains it");
    key("Enter");
    await waitFor(() => tags().length === 1, "the tag");
    assert.deepEqual(tags(), ["fr"]);
    assert.deepEqual(el.value, ["fr"]);
    assert.deepEqual(changes.at(-1), ["fr"]);
    assert.equal(field()?.value, "", "the field empties for the next one");
    assert.equal(el.querySelector('.select-tag[data-value="fr"] .select-leading')?.textContent, "F", "the tag carries its mark");
    assert.equal(el.querySelector(".select-count")?.textContent, "1 of 2");
  });

  it("takes no more than max, and the field goes once it is full", async () => {
    type("eng");
    await waitFor(() => shown()[0] === "en", "English");
    key("Enter");
    await waitFor(() => tags().length === 2, "the second tag");
    assert.equal(field(), null);
    assert.equal(el.querySelector(".select-count")?.textContent, "2 of 2");
  });

  it("an x takes a tag off, and so does Backspace in an empty field", async () => {
    const close = el.querySelector('.select-tag[data-value="fr"]')?.querySelector("[part~=lc-tag-close]");
    /** @type {HTMLElement} */ (close).click();
    await waitFor(() => tags().length === 1, "one tag left");
    assert.deepEqual(el.value, ["en"]);
    await waitFor(() => field(), "the field back");
    key("Backspace");
    await waitFor(() => tags().length === 0, "no tags");
    assert.deepEqual(el.value, []);
  });
});

describe("lc-select with its list open: one Tab stop", () => {
  for (const [name, props] of [["searchable", {}], ["tags", { multiple: true }]])
    it(`${name}: the scrolling list is not a Tab stop, and focus stays on the field`, async () => {
      const el = document.createElement("lc-select");
      Object.assign(el, { label: "Language", searchable: true, options: Array.from({ length: 30 }, (_, i) => ({ value: `v${i}`, label: `Option ${i}` })), ...props });
      document.body.appendChild(el);
      await waitFor(() => el.querySelector(".select-search-input"), "the field");
      const field = el.querySelector(".select-search-input");
      field.focus();
      await waitFor(() => el.querySelector(".select-dropdown"), "the list");
      const list = el.querySelector(".select-dropdown");
      assert.ok(list.scrollHeight > list.clientHeight, "the list scrolls, which Chromium makes a Tab stop unless told otherwise");
      assert.equal(list.getAttribute("tabindex"), "-1");
      assert.equal(document.activeElement, field);
      el.remove();
    });
});

describe("lc-select with a long list: the highlighted option stays visible", () => {
  for (const [name, props] of [["searchable", {}], ["tags", { multiple: true }]])
    it(`${name}: ArrowDown to the last option scrolls it into the list`, async () => {
      const el = document.createElement("lc-select");
      Object.assign(el, { label: "Language", searchable: true, options: Array.from({ length: 30 }, (_, i) => ({ value: `v${i}`, label: `Option ${i}` })), ...props });
      document.body.appendChild(el);
      await waitFor(() => el.querySelector(".select-search-input"), "the field");
      const field = el.querySelector(".select-search-input");
      field.focus();
      await waitFor(() => el.querySelector(".select-dropdown"), "the list");
      for (let i = 0; i < 30; i++) field.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
      await waitFor(() => el.querySelector(".highlighted")?.textContent.trim() === "Option 29", "the last option highlighted");
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      const list = el.querySelector(".select-dropdown").getBoundingClientRect();
      const row = el.querySelector(".highlighted").getBoundingClientRect();
      assert.ok(row.top >= list.top - 1 && row.bottom <= list.bottom + 1, `row ${row.top}-${row.bottom} lies within list ${list.top}-${list.bottom}`);
      el.remove();
    });
});

describe("lc-select typed into: a combobox over a listbox", () => {
  for (const [name, props] of [["searchable", {}], ["tags", { multiple: true }]])
    it(`${name}: the field names its list, follows the highlight, and closes when focus leaves`, async () => {
      const after = document.createElement("button");
      const el = document.createElement("lc-select");
      Object.assign(el, { label: "Language", searchable: true, value: props.multiple ? ["v1"] : "v1", options: Array.from({ length: 5 }, (_, i) => ({ value: `v${i}`, label: `Option ${i}` })), ...props });
      document.body.append(el, after);
      await waitFor(() => el.querySelector(".select-search-input"), "the field");
      const field = el.querySelector(".select-search-input");
      assert.equal(field.getAttribute("role"), "combobox");
      assert.equal(field.getAttribute("aria-expanded"), "false");
      assert.equal(field.hasAttribute("aria-controls"), false, "a closed field points at no list");

      field.focus();
      await waitFor(() => el.querySelector(".select-dropdown"), "the list");
      const list = el.querySelector(".select-dropdown");
      assert.equal(list.getAttribute("role"), "listbox");
      assert.equal(list.getAttribute("aria-label"), "Language");
      assert.equal(field.getAttribute("aria-expanded"), "true");
      assert.equal(field.getAttribute("aria-controls"), list.id);
      const options = [...list.querySelectorAll('[role="option"]')];
      assert.equal(options.length, 5);
      assert.equal(new Set(options.map((option) => option.id)).size, 5, "every option has its own id");
      assert.deepEqual(options.map((option) => option.getAttribute("aria-selected")), ["false", "true", "false", "false", "false"]);

      field.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
      await waitFor(() => el.querySelector(".highlighted"), "a highlighted option");
      assert.equal(field.getAttribute("aria-activedescendant"), el.querySelector(".highlighted").id);

      after.focus();
      await waitFor(() => !el.querySelector(".select-dropdown"), "the list to close when focus leaves");
      assert.equal(field.getAttribute("aria-expanded"), "false");
      assert.equal(field.hasAttribute("aria-activedescendant"), false);
      el.remove();
      after.remove();
    });

  it("no match: the list says so and is no listbox of options", async () => {
    const el = document.createElement("lc-select");
    Object.assign(el, { label: "Language", searchable: true, options: [{ value: "a", label: "Alpha" }] });
    document.body.appendChild(el);
    await waitFor(() => el.querySelector(".select-search-input"), "the field");
    const field = el.querySelector(".select-search-input");
    field.focus();
    field.value = "zzz";
    field.dispatchEvent(new InputEvent("input", { bubbles: true }));
    await waitFor(() => el.querySelector(".select-no-results"), "the no-results row");
    assert.equal(el.querySelector(".select-dropdown").hasAttribute("role"), false);
    assert.equal(el.querySelectorAll('[role="option"]').length, 0);
    assert.equal(field.hasAttribute("aria-activedescendant"), false);
    el.remove();
  });
});
