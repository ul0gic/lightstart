import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";

const { default: alertDialogDef } = await import("./alert-dialog.js");

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/** @type {Element[]} */
const mounted = [];

/** @param {Record<string, string>} attrs */
const mount = async (attrs) => {
  const host = /** @type {HTMLElement & { show(): void, $requestUpdate(): Promise<void> }} */ (
    document.createElement("lc-alert-dialog")
  );
  for (const [name, value] of Object.entries(attrs)) host.setAttribute(name, value);
  document.body.append(host);
  mounted.push(host);
  await tick();
  await host.$requestUpdate();
  host.show();
  await host.$requestUpdate();
  return { host, dialog: /** @type {HTMLDialogElement} */ (host.querySelector("dialog")) };
};

/** @param {HTMLDialogElement} dialog @param {string} attr */
const textOf = (dialog, attr) => {
  const id = dialog.getAttribute(attr);
  return id ? document.getElementById(id)?.textContent?.trim() : undefined;
};

describe("@lightstart/light - lc-alert-dialog", () => {
  before(() => View.define("lc-alert-dialog", alertDialogDef));

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("is an alertdialog named by its title and described by its message", async () => {
    const { dialog } = await mount({ title: "Delete this file?", message: "This cannot be undone." });

    assert.equal(dialog.open, true);
    assert.equal(dialog.getAttribute("role"), "alertdialog");
    assert.equal(textOf(dialog, "aria-labelledby"), "Delete this file?");
    assert.equal(textOf(dialog, "aria-describedby"), "This cannot be undone.");
  });

  it("is named by its message when it has no title", async () => {
    const { dialog } = await mount({ message: "This cannot be undone." });

    assert.equal(textOf(dialog, "aria-labelledby"), "This cannot be undone.");
    assert.equal(dialog.hasAttribute("aria-describedby"), false);
  });

  it("gives two dialogs distinct names", async () => {
    const a = await mount({ title: "First", message: "One" });
    const b = await mount({ title: "Second", message: "Two" });

    assert.notEqual(a.dialog.getAttribute("aria-labelledby"), b.dialog.getAttribute("aria-labelledby"));
    assert.equal(textOf(b.dialog, "aria-labelledby"), "Second");
  });

  it("focuses the cancel button on open when it is shown", async () => {
    const { host } = await mount({ title: "Leave?", "show-cancel": "" });
    assert.equal(document.activeElement, host.querySelector(".cancel"));
  });

  it("focuses the confirm button on open when there is no cancel", async () => {
    const { host } = await mount({ title: "Saved" });
    assert.equal(document.activeElement, host.querySelector(".confirm"));
  });

  it("draws a danger confirm without a status icon for confirm-variant danger", async () => {
    const { host } = await mount({ title: "Delete?", "confirm-variant": "danger", "show-cancel": "" });

    assert.equal(host.querySelector(".confirm")?.classList.contains("danger"), true);
    assert.equal(host.querySelector(".alert-dialog-icon"), null);
  });

  it("keeps variant error's icon and confirm, and adds danger only when asked", async () => {
    const error = await mount({ title: "Delete?", variant: "error" });
    assert.equal(error.host.querySelector(".alert-dialog-icon lc-icon")?.getAttribute("name"), "circle-x");
    assert.equal(error.host.querySelector(".confirm")?.classList.contains("danger"), false);

    const both = await mount({ title: "Delete?", variant: "error", "confirm-variant": "danger" });
    assert.equal(both.host.querySelector(".alert-dialog-icon lc-icon")?.getAttribute("name"), "circle-x");
    assert.equal(both.host.querySelector(".confirm")?.classList.contains("danger"), true);
  });
});
