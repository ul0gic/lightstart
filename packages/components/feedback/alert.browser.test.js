import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";

const { default: alertDef } = await import("./alert.js");

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/** @type {Element[]} */
const mounted = [];

/** @param {Record<string, string>} [attrs] */
const mount = async (attrs = {}) => {
  const el = /** @type {HTMLElement & { variant: string, $requestUpdate: () => Promise<unknown> }} */ (document.createElement("lc-alert"));
  for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
  el.textContent = "Message";
  document.body.append(el);
  mounted.push(el);
  await tick();
  await el.$requestUpdate();
  return el;
};

/** @param {Element} el */
const roleOf = (el) => el.querySelector('[part="lc-alert-alert"]')?.getAttribute("role");

describe("@lightstart/light - lc-alert", () => {
  before(() => {
    if (!customElements.get("lc-alert")) View.define("lc-alert", alertDef);
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("announces an error or warning as an alert and every other variant as a status", async () => {
    const variants = ["error", "warning", "success", "info", "note", "tip", "default"];
    const roles = [];
    for (const variant of variants) roles.push([variant, roleOf(await mount({ variant }))]);
    roles.push(["unset", roleOf(await mount())]);
    assert.deepEqual(roles, [
      ["error", "alert"],
      ["warning", "alert"],
      ["success", "status"],
      ["info", "status"],
      ["note", "status"],
      ["tip", "status"],
      ["default", "status"],
      ["unset", "status"],
    ]);
  });

  it("follows the variant when it changes", async () => {
    const el = await mount({ variant: "info" });
    el.variant = "error";
    await el.$requestUpdate();
    assert.equal(roleOf(el), "alert");
    el.variant = "success";
    await el.$requestUpdate();
    assert.equal(roleOf(el), "status");
  });
});
