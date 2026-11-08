import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";

const { default: modalDef } = await import("./modal.js");

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/** @type {Element[]} */
const mounted = [];

/** @param {string} inner @param {string} [caption] */
const mount = async (inner, caption) => {
  const modal = /** @type {HTMLElement & { showModal(): void, $requestUpdate(): Promise<void> }} */ (
    document.createElement("lc-modal")
  );
  if (caption) modal.setAttribute("caption", caption);
  modal.innerHTML = inner;
  document.body.append(modal);
  mounted.push(modal);
  await tick();
  await modal.$requestUpdate();
  modal.showModal();
  await modal.$requestUpdate();
  return modal;
};

/** @param {Element} modal */
const nameOf = (modal) => {
  const dialog = /** @type {HTMLDialogElement} */ (modal.querySelector("dialog"));
  const id = dialog.getAttribute("aria-labelledby");
  return { dialog, id, target: id ? document.getElementById(id) : null };
};

describe("@lightstart/light - lc-modal", () => {
  before(() => View.define("lc-modal", modalDef));

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("is named by its slotted header, without the close button", async () => {
    const modal = await mount(`<h2 slot="header">Edit beer</h2><p>Body</p>`);
    const { dialog, target } = nameOf(modal);

    assert.equal(dialog.open, true);
    assert.ok(target, "aria-labelledby resolves to an element");
    assert.equal(target.textContent?.trim(), "Edit beer");
    assert.equal(target.contains(modal.querySelector(".modal-close-button")), false);
  });

  it("gives two modals distinct names", async () => {
    const first = await mount(`<h2 slot="header">Edit beer</h2>`);
    const second = await mount(`<h2 slot="header">Delete beer</h2>`);
    const a = nameOf(first);
    const b = nameOf(second);

    assert.notEqual(a.id, b.id);
    assert.equal(a.target?.textContent?.trim(), "Edit beer");
    assert.equal(b.target?.textContent?.trim(), "Delete beer");
  });

  it("is named by its caption when it has no header", async () => {
    const modal = await mount(`<p>Body</p>`, "Saturday, 7 November");
    const { target } = nameOf(modal);

    assert.ok(target, "aria-labelledby resolves to an element");
    assert.equal(target.getAttribute("part"), "lc-modal-caption");
    assert.equal(target.textContent?.trim(), "Saturday, 7 November");
  });

  it("prefers the header over the caption", async () => {
    const modal = await mount(`<h2 slot="header">Edit beer</h2>`, "Saturday");
    assert.equal(nameOf(modal).target?.textContent?.trim(), "Edit beer");
  });

  it("is named by its caption when the header has no text", async () => {
    const modal = await mount(`<lc-button slot="header" iconOnly icon="trash-2" ghost></lc-button><p>Body</p>`, "Saturday, 7 November");
    const { target } = nameOf(modal);

    assert.equal(target?.getAttribute("part"), "lc-modal-caption");
    assert.equal(target?.textContent?.trim(), "Saturday, 7 November");
  });

  it("carries no aria-labelledby with neither a header nor a caption", async () => {
    const modal = await mount(`<p>Body</p>`);
    assert.equal(nameOf(modal).dialog.hasAttribute("aria-labelledby"), false);
  });
});
