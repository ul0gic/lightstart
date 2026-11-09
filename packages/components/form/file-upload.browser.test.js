import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";

const { default: fileUploadDef } = await import("./file-upload.js");

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/** @type {Element[]} */
const mounted = [];

/** @typedef {HTMLElement & { value: unknown, files: File[], error: string, $requestUpdate: () => Promise<unknown> }} FileUpload */

/** @param {Record<string, string>} [attrs] */
const mount = async (attrs = {}) => {
  const el = /** @type {FileUpload} */ (document.createElement("lc-file-upload"));
  el.setAttribute("variant", "dropzone");
  for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
  document.body.append(el);
  mounted.push(el);
  await tick();
  await el.$requestUpdate();
  return el;
};

/** @param {Array<[string, string, string?]>} files */
const transfer = (files) => {
  const data = new DataTransfer();
  for (const [name, type, body = "x"] of files) data.items.add(new File([body], name, { type }));
  return data;
};

/** @param {FileUpload} el @param {Array<[string, string, string?]>} files */
const drop = async (el, files) => {
  el.querySelector(".file-dropzone")?.dispatchEvent(new DragEvent("drop", { dataTransfer: transfer(files), bubbles: true, cancelable: true }));
  await el.$requestUpdate();
};

/** @param {FileUpload} el @param {Array<[string, string]>} files */
const pick = async (el, files) => {
  const input = /** @type {HTMLInputElement} */ (el.querySelector("input[type=file]"));
  input.files = transfer(files).files;
  input.dispatchEvent(new Event("change", { bubbles: true }));
  await el.$requestUpdate();
};

/** @param {FileUpload} el */
const errors = (el) => {
  /** @type {string[]} */
  const seen = [];
  el.addEventListener("error", (e) => seen.push(/** @type {CustomEvent} */ (e).detail.error));
  return seen;
};

/** @param {Element} el @param {string} selector */
const texts = (el, selector) => [...el.querySelectorAll(selector)].map((node) => node.textContent?.replace(/\s+/g, " ").trim());

describe("@lightstart/light - lc-file-upload", () => {
  before(() => {
    if (!customElements.get("lc-file-upload")) View.define("lc-file-upload", fileUploadDef);
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  it("draws the locale words, and no longer prints accept as the hint", async () => {
    const el = await mount({ accept: "image/*", "max-size": "5242880" });
    assert.deepEqual(texts(el, ".file-dropzone-text"), ["Click to upload or drag and drop"]);
    assert.deepEqual(texts(el, ".file-dropzone-hint"), ["Max size: 5.0 MB"]);
  });

  it("refuses a dropped file accept does not match, and takes one it does", async () => {
    const el = await mount({ accept: ".pdf,image/*,text/csv" });
    const seen = errors(el);
    await drop(el, [["notes.txt", "text/plain"]]);
    assert.equal(el.value, null);
    assert.deepEqual(seen, ["File notes.txt is not an accepted type"]);
    assert.deepEqual(texts(el, ".file-upload-error"), ["File notes.txt is not an accepted type"]);

    for (const [name, type] of [["REPORT.PDF", ""], ["photo.png", "image/png"], ["table.csv", "text/csv"]]) {
      await drop(el, [[name, type]]);
      assert.deepEqual(el.files.map((file) => file.name), [name]);
      assert.equal(el.error, "");
    }
  });

  it("refuses a picked file the same way, since the picker can be told to show all files", async () => {
    const el = await mount({ accept: ".pdf,.docx", multiple: "" });
    await pick(el, [["a.pdf", "application/pdf"], ["b.png", "image/png"]]);
    assert.deepEqual(el.files, []);
    assert.equal(el.error, "File b.png is not an accepted type");
    await pick(el, [["a.pdf", "application/pdf"], ["b.DOCX", ""]]);
    assert.deepEqual(el.files.map((file) => file.name), ["a.pdf", "b.DOCX"]);
  });

  it("names each file's remove button by the file", async () => {
    const el = await mount({ multiple: "" });
    await drop(el, [["a.txt", "text/plain"], ["b.txt", "text/plain"]]);
    assert.deepEqual([...el.querySelectorAll(".file-remove")].map((button) => button.getAttribute("aria-label")), ["Remove a.txt", "Remove b.txt"]);
  });

  it("sends one change per pick and per drop, its own, with the value", async () => {
    const el = await mount({ multiple: "" });
    /** @type {Event[]} */
    const seen = [];
    el.addEventListener("change", (e) => seen.push(e));
    await pick(el, [["a.txt", "text/plain"]]);
    await drop(el, [["b.txt", "text/plain"]]);
    assert.equal(seen.length, 2);
    for (const e of seen) {
      assert.ok(e instanceof CustomEvent);
      assert.equal(e.target, el);
    }
    assert.deepEqual(/** @type {CustomEvent} */ (seen[0]).detail.files.map((/** @type {File} */ file) => file.name), ["a.txt"]);
    assert.deepEqual(/** @type {CustomEvent} */ (seen[1]).detail.files.map((/** @type {File} */ file) => file.name), ["a.txt", "b.txt"]);
  });

  it("takes any file when accept is empty, and words its other errors from the locale file", async () => {
    const el = await mount({ "max-size": "2" });
    await drop(el, [["a.bin", "application/octet-stream"], ["b.bin", ""]]);
    assert.equal(el.error, "Only one file is allowed");
    await drop(el, [["a.bin", "application/octet-stream"]]);
    assert.deepEqual(el.files.map((file) => file.name), ["a.bin"]);
    await drop(el, [["b.bin", "", "xyz"]]);
    assert.equal(el.error, "File b.bin exceeds maximum size of 2.0 B");
    assert.deepEqual(el.files.map((file) => file.name), ["a.bin"]);
  });
});
