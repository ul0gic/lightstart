import assert from "node:assert/strict";
import { afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";

const { default: tableDef } = await import("./table.js");

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/** @type {Element[]} */
const mounted = [];

describe("@lightstart/light - lc-table", () => {
  before(() => {
    if (!customElements.get("lc-table")) View.define("lc-table", tableDef);
  });

  afterEach(() => { for (const el of mounted.splice(0)) el.remove(); });

  it("draws a column's render, hands a clicked row over, and marks the row isSelected names", async () => {
    const el = /** @type {HTMLElement & Record<string, unknown> & { $requestUpdate: () => Promise<unknown> }} */ (document.createElement("lc-table"));
    /** @type {unknown[]} */
    const picked = [];
    el.columns = [{ name: "Name" }, { name: "Amount", render: (/** @type {unknown} */ _v, /** @type {{ cents: number }} */ row) => `R$ ${row.cents / 100}` }];
    el.rows = [{ id: "a", Name: "Ana", cents: 4900 }, { id: "b", Name: "Bia", cents: 2900 }];
    el.selectRow = (/** @type {{ id: string }} */ row) => picked.push(row.id);
    el.isSelected = (/** @type {{ id: string }} */ row) => row.id === "b";
    document.body.append(el);
    mounted.push(el);
    await tick();
    await el.$requestUpdate();
    const rows = [...el.querySelectorAll("tbody tr")];
    assert.deepEqual(rows.map((tr) => [...tr.querySelectorAll("td")].map((td) => td.textContent?.trim())), [["Ana", "R$ 49"], ["Bia", "R$ 29"]]);
    assert.deepEqual(rows.map((tr) => tr.classList.contains("is-selected")), [false, true]);
    /** @type {HTMLElement} */ (rows[0]).click();
    assert.deepEqual(picked, ["a"]);
  });

  it("heads a column with its label and fills it from the field it names", async () => {
    const el = /** @type {HTMLElement & Record<string, unknown> & { $requestUpdate: () => Promise<unknown> }} */ (document.createElement("lc-table"));
    el.columns = [{ name: "ip", label: "IP Address" }, { name: "hits" }];
    el.rows = [{ ip: "10.0.0.1", hits: 3 }];
    document.body.append(el);
    mounted.push(el);
    await tick();
    await el.$requestUpdate();
    assert.deepEqual([...el.querySelectorAll("thead th")].map((th) => th.textContent?.trim()), ["IP Address", "hits"]);
    assert.deepEqual([...el.querySelectorAll("tbody td")].map((td) => td.textContent?.trim()), ["10.0.0.1", "3"]);
  });

  it("leaves the header of a column with no name empty", async () => {
    const el = /** @type {HTMLElement & Record<string, unknown> & { $requestUpdate: () => Promise<unknown> }} */ (document.createElement("lc-table"));
    el.columns = [{ name: "Name" }, { name: "", render: () => "Active" }];
    el.rows = [{ id: "a", Name: "Ana" }];
    document.body.append(el);
    mounted.push(el);
    await tick();
    await el.$requestUpdate();
    assert.deepEqual([...el.querySelectorAll("thead th")].map((th) => th.textContent?.trim()), ["Name", ""]);
  });

  it("sorts from a button in each sortable header, named by its label, and marks only the sorted column", async () => {
    const el = /** @type {HTMLElement & Record<string, unknown> & { $requestUpdate: () => Promise<unknown> }} */ (document.createElement("lc-table"));
    /** @type {unknown[]} */
    const sorts = [];
    el.columns = [{ name: "name", label: "Name" }, { name: "going", label: "Going" }, { name: "city", label: "City", sortable: false }];
    el.rows = [{ name: "Ana", going: 3, city: "Rio" }];
    el.sortable = true;
    el.addEventListener("sort", (e) => sorts.push(/** @type {CustomEvent} */ (e).detail));
    document.body.append(el);
    mounted.push(el);
    await tick();
    await el.$requestUpdate();
    const heads = [...el.querySelectorAll("thead th")];
    const buttons = heads.map((th) => th.querySelector("button.lc-table-sort-button"));
    assert.deepEqual(buttons.map((b) => b?.getAttribute("type") ?? null), ["button", "button", null]);
    assert.deepEqual(buttons.map((b) => b?.textContent?.trim() ?? null), ["Name", "Going", null]);
    assert.deepEqual(buttons.map((b) => b?.querySelector("lc-icon")?.getAttribute("aria-hidden") ?? null), ["true", "true", null]);
    assert.equal(heads[2]?.textContent?.trim(), "City");
    assert.deepEqual(heads.map((th) => th.getAttribute("aria-sort")), [null, null, null]);

    /** @type {HTMLButtonElement} */ (buttons[1]).click();
    await el.$requestUpdate();
    assert.deepEqual([el.sortBy, el.sortDir], ["going", "asc"]);
    assert.deepEqual([...el.querySelectorAll("thead th")].map((th) => th.getAttribute("aria-sort")), [null, "ascending", null]);

    /** @type {HTMLButtonElement} */ (el.querySelectorAll("thead button")[1]).click();
    await el.$requestUpdate();
    assert.deepEqual([...el.querySelectorAll("thead th")].map((th) => th.getAttribute("aria-sort")), [null, "descending", null]);

    /** @type {HTMLButtonElement} */ (el.querySelectorAll("thead button")[0]).click();
    await el.$requestUpdate();
    assert.deepEqual([...el.querySelectorAll("thead th")].map((th) => th.getAttribute("aria-sort")), ["ascending", null, null]);
    assert.deepEqual(sorts, [{ sortBy: "going", sortDir: "asc" }, { sortBy: "going", sortDir: "desc" }, { sortBy: "name", sortDir: "asc" }]);
  });

  it("lets Tab reach a row with selectRow and hands it over on Enter or Space", async () => {
    const el = /** @type {HTMLElement & Record<string, unknown> & { $requestUpdate: () => Promise<unknown> }} */ (document.createElement("lc-table"));
    /** @type {string[]} */
    const picked = [];
    el.columns = [{ name: "Name" }, { name: "site" }];
    el.rows = [{ id: "a", Name: "Ana", site: "https://example.com" }, { id: "b", Name: "Bia", site: "" }];
    el.selectRow = (/** @type {{ id: string }} */ row, /** @type {Event} */ e) => picked.push(`${row.id}:${e.type}`);
    document.body.append(el);
    mounted.push(el);
    await tick();
    await el.$requestUpdate();
    const rows = /** @type {HTMLElement[]} */ ([...el.querySelectorAll("tbody tr")]);
    assert.deepEqual(rows.map((tr) => tr.getAttribute("tabindex")), ["0", "0"]);
    assert.deepEqual(rows.map((tr) => [tr.getAttribute("role"), tr.getAttribute("aria-selected")]), [[null, null], [null, null]]);

    const enter = new KeyboardEvent("keydown", { key: "Enter", bubbles: true, cancelable: true });
    rows[1]?.dispatchEvent(enter);
    const space = new KeyboardEvent("keydown", { key: " ", bubbles: true, cancelable: true });
    rows[0]?.dispatchEvent(space);
    rows[0]?.dispatchEvent(new KeyboardEvent("keydown", { key: "a", bubbles: true, cancelable: true }));
    assert.deepEqual(picked, ["b:keydown", "a:keydown"]);
    assert.deepEqual([enter.defaultPrevented, space.defaultPrevented], [true, true]);

    const fromLink = new KeyboardEvent("keydown", { key: "Enter", bubbles: true, cancelable: true });
    rows[0]?.querySelector("a")?.dispatchEvent(fromLink);
    assert.deepEqual([picked.length, fromLink.defaultPrevented], [2, false]);
  });

  it("leaves rows out of the tab order when there is no selectRow", async () => {
    const el = /** @type {HTMLElement & Record<string, unknown> & { $requestUpdate: () => Promise<unknown> }} */ (document.createElement("lc-table"));
    el.columns = [{ name: "Name" }];
    el.rows = [{ Name: "Ana" }];
    document.body.append(el);
    mounted.push(el);
    await tick();
    await el.$requestUpdate();
    assert.equal(el.querySelector("tbody tr")?.hasAttribute("tabindex"), false);
  });
});
