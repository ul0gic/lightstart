import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";

const { default: ratingDef } = await import("./rating.js");
const { default: labelDef } = await import("./label.js");

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/** @type {Element[]} */
const mounted = [];

/** @typedef {HTMLElement & { value: number, max: number, readonly: boolean, disabled: boolean, clearable: boolean, label: string, step: number, change: ((n: number) => void) | null, $requestUpdate: () => Promise<unknown> }} Rating */

/** @param {Record<string, unknown>} [props] */
const mount = async (props = {}) => {
  const el = /** @type {Rating} */ (document.createElement("lc-rating"));
  Object.assign(el, props);
  document.body.append(el);
  mounted.push(el);
  await tick();
  await el.$requestUpdate();
  await tick();
  return el;
};

/** @param {Element} el */
const stars = (el) => /** @type {HTMLButtonElement[]} */ ([...el.querySelectorAll("[role=radio]")]);

/** @param {Element} star @param {string} key */
const press = (star, key) => star.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }));

/** @param {Rating} el */
const record = async (el) => {
  /** @type {number[]} */
  const asked = [];
  el.change = (n) => asked.push(n);
  await el.$requestUpdate();
  return asked;
};

describe("@lightstart/light - lc-rating", () => {
  before(() => {
    if (!customElements.get("lc-rating")) View.define("lc-rating", ratingDef);
    if (!customElements.get("lc-label")) View.define("lc-label", labelDef);
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("is a radio group of named stars, the rated one checked and the only tab stop", async () => {
    const el = await mount({ value: 3 });
    const group = el.querySelector("[role=radiogroup]");
    assert.equal(group?.getAttribute("aria-label"), "Rating");
    const radios = stars(el);
    assert.deepEqual(radios.map((r) => r.getAttribute("aria-label")), ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]);
    assert.deepEqual(radios.map((r) => r.getAttribute("aria-checked")), ["false", "false", "true", "false", "false"]);
    assert.deepEqual(radios.map((r) => r.tabIndex), [-1, -1, 0, -1, -1]);
    assert.ok(radios.every((r) => r.querySelector("lc-icon")?.getAttribute("aria-hidden") === "true"));
  });

  it("puts the tab stop on the first star when nothing is rated, and takes the group's name from label", async () => {
    const el = await mount({ label: "Your rating" });
    assert.equal(document.getElementById(el.querySelector("[role=radiogroup]")?.getAttribute("aria-labelledby") ?? "")?.textContent?.trim(), "Your rating");
    assert.deepEqual(stars(el).map((r) => r.tabIndex), [0, -1, -1, -1, -1]);
    assert.ok(stars(el).every((r) => r.getAttribute("aria-checked") === "false"));
  });

  it("asks for the next or previous star on the arrow keys, wrapping at both ends, and follows it with focus", async () => {
    const el = await mount({ value: 3 });
    const asked = await record(el);
    press(stars(el)[2], "ArrowRight");
    assert.equal(document.activeElement, stars(el)[3]);
    press(stars(el)[3], "ArrowDown");
    assert.equal(document.activeElement, stars(el)[4]);
    press(stars(el)[4], "ArrowRight");
    assert.equal(document.activeElement, stars(el)[0]);
    press(stars(el)[0], "ArrowLeft");
    assert.equal(document.activeElement, stars(el)[4]);
    press(stars(el)[4], "ArrowUp");
    assert.equal(document.activeElement, stars(el)[3]);
    assert.deepEqual(asked, [4, 5, 1, 5, 4]);
    assert.equal(el.value, 3, "the host sets the value, not the rating");
  });

  it("asks for the focused star on Space, and on a click as before", async () => {
    const el = await mount({ value: 1 });
    const asked = await record(el);
    const space = new KeyboardEvent("keydown", { key: " ", bubbles: true, cancelable: true });
    stars(el)[3].dispatchEvent(space);
    assert.ok(space.defaultPrevented);
    stars(el)[1].click();
    press(stars(el)[1], "Tab");
    assert.deepEqual(asked, [4, 2]);
  });

  it("asks for nothing when disabled", async () => {
    const el = await mount({ value: 2, disabled: true });
    const asked = await record(el);
    press(stars(el)[1], "ArrowRight");
    press(stars(el)[1], " ");
    stars(el)[1].click();
    assert.deepEqual(asked, []);
    assert.ok(stars(el).every((r) => r.disabled));
  });

  it("reads as one picture named by its value when readonly, out of the tab order", async () => {
    const el = await mount({ value: 4, readonly: true });
    const asked = await record(el);
    const picture = el.querySelector("[role=img]");
    assert.equal(picture?.getAttribute("aria-label"), "4 of 5 stars");
    assert.equal(el.querySelector("[role=radiogroup], [role=radio], button, [tabindex]"), null);
    const icons = [...el.querySelectorAll("lc-icon")];
    assert.equal(icons.length, 5);
    assert.ok(icons.every((icon) => icon.getAttribute("aria-hidden") === "true"));
    assert.equal(icons.filter((icon) => icon.classList.contains("star-filled")).length, 4);
    /** @type {HTMLElement} */ (icons[0]).click();
    assert.deepEqual(asked, []);
  });

  it("draws its label and is named by it, in place of the default name", async () => {
    const el = await mount({ value: 2, label: "Your rating" });
    const label = /** @type {HTMLElement} */ (el.querySelector("lc-label"));
    assert.equal(label.textContent?.trim(), "Your rating");
    assert.ok(label.getBoundingClientRect().height > 0, "the label is drawn");
    const group = el.querySelector("[role=radiogroup]");
    assert.equal(group?.getAttribute("aria-labelledby"), label.id);
    assert.equal(group?.hasAttribute("aria-label"), false);
    const plain = await mount({ value: 2 });
    assert.equal(plain.querySelector("lc-label"), null);
    assert.equal(plain.querySelector("[role=radiogroup]")?.hasAttribute("aria-labelledby"), false);
  });

  it("asks for 0 on the rated star's click, Backspace or Delete when clearable", async () => {
    const el = await mount({ value: 3, clearable: true });
    const asked = await record(el);
    stars(el)[2].click();
    stars(el)[1].click();
    press(stars(el)[2], "Backspace");
    press(stars(el)[2], "Delete");
    assert.deepEqual(asked, [0, 2, 0, 0]);
  });

  it("keeps the rated star's click and ignores Backspace and Delete when not clearable", async () => {
    const el = await mount({ value: 3 });
    const asked = await record(el);
    stars(el)[2].click();
    press(stars(el)[2], "Backspace");
    press(stars(el)[2], "Delete");
    assert.deepEqual(asked, [3]);
  });

  it("rates in half stars at step 0.5: two radios a star, the arrows moving half a star and wrapping", async () => {
    const el = await mount({ value: 3.5, step: 0.5 });
    const radios = stars(el);
    assert.equal(radios.length, 10);
    assert.equal(el.querySelectorAll("[role=radiogroup]").length, 1);
    assert.deepEqual(radios.slice(0, 3).map((r) => r.getAttribute("aria-label")), ["0.5 stars", "1 star", "1.5 stars"]);
    assert.equal(radios[6].getAttribute("aria-label"), "3.5 stars");
    assert.deepEqual(radios.map((r) => r.tabIndex), [-1, -1, -1, -1, -1, -1, 0, -1, -1, -1]);
    assert.deepEqual(radios.map((r) => r.getAttribute("aria-checked") === "true"), radios.map((_, i) => i === 6));
    assert.equal(el.querySelectorAll(".star-filled").length, 7);
    const left = radios[6].getBoundingClientRect();
    const right = radios[7].getBoundingClientRect();
    assert.ok(left.right <= right.left + 0.5 && left.width > 0, "a star's lower half sits on its left");
    const asked = await record(el);
    press(stars(el)[6], "ArrowRight");
    assert.equal(document.activeElement, stars(el)[7]);
    press(stars(el)[7], "ArrowLeft");
    press(stars(el)[6], "ArrowLeft");
    press(stars(el)[5], " ");
    press(stars(el)[0], "ArrowLeft");
    assert.equal(document.activeElement, stars(el)[9]);
    stars(el)[2].click();
    assert.deepEqual(asked, [4, 3.5, 3, 3, 5, 1.5]);
  });

  it("jumps to the first and last value on Home and End, at either step", async () => {
    for (const [step, last] of [[1, 5], [0.5, 5]]) {
      const el = await mount({ value: 2, step });
      const asked = await record(el);
      const at = step === 1 ? 1 : 3;
      press(stars(el)[at], "End");
      assert.equal(document.activeElement, stars(el).at(-1));
      press(stars(el).at(-1) ?? stars(el)[0], "Home");
      assert.equal(document.activeElement, stars(el)[0]);
      assert.deepEqual(asked, [last, step]);
    }
  });

  it("rounds to the nearest step and clears from a half when clearable", async () => {
    const whole = await mount({ value: 3.5 });
    assert.equal(stars(whole)[3].getAttribute("aria-checked"), "true");
    const half = await mount({ value: 3.3, step: 0.5, clearable: true });
    assert.equal(stars(half)[6].getAttribute("aria-checked"), "true");
    const asked = await record(half);
    stars(half)[6].click();
    press(stars(half)[6], "Backspace");
    assert.deepEqual(asked, [0, 0]);
  });

  it("reads a half rating as half a star and names it by its value when readonly", async () => {
    const el = await mount({ value: 3.5, step: 0.5, readonly: true });
    assert.equal(el.querySelector("[role=img]")?.getAttribute("aria-label"), "3.5 of 5 stars");
    assert.equal(el.querySelector("[role=radio], button, [tabindex]"), null);
    const pairs = [...el.querySelectorAll(".lc-rating__pair")];
    assert.equal(pairs.length, 5);
    assert.deepEqual(pairs.map((p) => p.querySelectorAll(".star-filled").length), [2, 2, 2, 1, 0]);
    const width = (/** @type {Element} */ p) => p.getBoundingClientRect().width;
    const icon = /** @type {Element} */ (pairs[0].querySelector("lc-icon"));
    assert.ok(Math.abs(width(pairs[3]) - icon.getBoundingClientRect().width) < 1, "a pair is one star wide");
  });
});
