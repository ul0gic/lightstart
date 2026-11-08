import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import View from "@lightstart/light";
import toast from "./toast.js";
import { toasts } from "./toasts.js";

View.define("lc-toast", toast);

const sleep = (/** @type {number} */ ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** @typedef {HTMLElement & { $requestUpdate: () => Promise<unknown> }} Toast */

/** @type {Element[]} */
const mounted = [];

const mount = async () => {
  const el = /** @type {Toast} */ (document.createElement("lc-toast"));
  document.body.append(el);
  mounted.push(el);
  await sleep(0);
  return el;
};

/** @param {Toast} el */
const shown = async (el) => {
  await el.$requestUpdate();
  return [...el.querySelectorAll(".toast")];
};

describe("@lightstart/light - lc-toast", () => {
  afterEach(() => {
    toasts.hideAll();
    for (const el of mounted.splice(0)) el.remove();
  });

  it("waits while the pointer is over a toast, and goes once what was left runs out", async () => {
    const el = await mount();
    toasts.show({ message: "Saved", duration: 200 });
    const [item] = await shown(el);
    await sleep(100);
    item.dispatchEvent(new MouseEvent("mouseenter"));
    await sleep(250);
    assert.equal((await shown(el)).length, 1, "hovered, it outlasts its duration");

    item.dispatchEvent(new MouseEvent("mouseleave"));
    await sleep(40);
    assert.equal((await shown(el)).length, 1, "it is not taken off at once");
    await sleep(120);
    assert.equal((await shown(el)).length, 0);
  });

  it("waits while focus is inside a toast, moving between its buttons, and goes once focus leaves", async () => {
    const el = await mount();
    const outside = document.createElement("button");
    document.body.append(outside);
    mounted.push(outside);
    toasts.show({ title: "Ana asked to join", duration: 150, onTap: () => {} });
    const [item] = await shown(el);
    const tap = /** @type {HTMLElement} */ (item.querySelector("[part~=lc-toast-tap]"));
    const close = /** @type {HTMLElement} */ (item.querySelector("[part~=lc-toast-close]"));

    tap.focus();
    await sleep(100);
    close.focus();
    await sleep(150);
    assert.equal((await shown(el)).length, 1, "focus moving within the toast keeps it");

    outside.focus();
    await sleep(200);
    assert.equal((await shown(el)).length, 0);
  });

  it("announces an error or warning as an alert and every other variant as a status", async () => {
    const el = await mount();
    for (const variant of ["error", "warning", "success", "info", "default"]) toasts.show({ message: variant, variant });
    const roles = (await shown(el)).map((item) => [
      item.textContent?.trim(),
      item.getAttribute("role"),
      item.getAttribute("aria-live"),
    ]);
    assert.deepEqual(roles, [
      ["error", "alert", "assertive"],
      ["warning", "alert", "assertive"],
      ["success", "status", "polite"],
      ["info", "status", "polite"],
      ["default", "status", "polite"],
    ]);
  });

  it("keeps a hovered toast in place when the one before it goes", async () => {
    const el = await mount();
    toasts.show({ message: "First", duration: 60 });
    toasts.show({ message: "Second", duration: 200 });
    const [, second] = await shown(el);
    second.dispatchEvent(new MouseEvent("mouseenter"));
    await sleep(250);
    const left = await shown(el);
    assert.equal(left.length, 1);
    assert.equal(left[0], second, "the hovered toast is the same element");

    second.dispatchEvent(new MouseEvent("mouseleave"));
    await sleep(250);
    assert.equal((await shown(el)).length, 0);
  });
});
