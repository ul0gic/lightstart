import assert from "node:assert/strict";
import { after, afterEach, before, describe, it } from "node:test";
import View from "@lightstart/light";
import { html } from "@lightstart/light/html";
import searchDef from "./search.js";
import joinDef from "./join.js";
import labelDef from "./label.js";

const tick = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

const loadSheet = (href) => new Promise((resolve) => {
  const sheet = document.createElement("link");
  sheet.rel = "stylesheet";
  sheet.href = href;
  sheet.onload = resolve;
  sheet.onerror = resolve;
  document.head.append(sheet);
});

const DOCS = [
  { id: "1", group: "Places", title: "Arpoador", hint: "Ipanema", href: "/places/arpoador" },
  { id: "2", group: "Places", title: "Arcos da Lapa", href: "/places/arcos" },
  { id: "3", group: "Events", title: "Baile na Lapa", href: "/events/baile" },
];

const RECENT = [{ id: "r1", group: "Recent", title: "arpoador" }];

const FROM_SERVER = [
  { id: "s1", group: "Places", title: "Arpoador" },
  { id: "s2", group: "Places", title: "Lapa" },
  { id: "s3", group: "Places", title: "Urca" },
  { id: "s4", group: "Places", title: "Leme" },
  { id: "s5", group: "Places", title: "Gávea" },
];

/** @param {Element} el */
const titles = (el) => [...el.querySelectorAll(".search-result-title")].map((/** @type {Element} */ n) => n.textContent);

/** @type {Element[]} */
const mounted = [];

const mount = async (props = {}) => {
  const el = /** @type {any} */ (document.createElement("lc-search"));
  for (const [key, value] of Object.entries(props))
    if (typeof value === "boolean") el.toggleAttribute(key, value);
    else el[key] = value;
  el.docs = props.docs ?? DOCS;
  document.body.append(el);
  mounted.push(el);
  await tick();
  await el.$requestUpdate();
  return el;
};

/** @param {any} el @param {string} value */
const type = async (el, value) => {
  const input = el.querySelector("input");
  input.value = value;
  input.dispatchEvent(new Event("input", { bubbles: true }));
  await el.$requestUpdate();
};

/** @param {any} el @param {string} key */
const press = async (el, key) => {
  el.querySelector("input").dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true }));
  await el.$requestUpdate();
};

/**
 * A result is a real link; on this page nothing routes, so the click would leave
 * the runner. The host's router intercepts anchors in an app; this stands in.
 * @param {Event} e
 */
const keepThePage = (e) => {
  if (/** @type {Element} */ (e.target).closest?.("a[href]")) e.preventDefault();
};

describe("@lightstart/light - lc-search", () => {
  before(async () => {
    document.addEventListener("click", keepThePage, true);
    if (!customElements.get("lc-join")) View.define("lc-join", joinDef);
    if (!customElements.get("lc-label")) View.define("lc-label", labelDef);
    if (!customElements.get("lc-search")) View.define("lc-search", searchDef);
    await loadSheet(new URL("./join.css", import.meta.url).href);
    await loadSheet(new URL("./search.css", import.meta.url).href);
  });

  afterEach(async () => {
    for (const el of mounted.splice(0)) el.remove();
    await tick();
  });

  after(() => {
    document.body.innerHTML = "";
    document.removeEventListener("click", keepThePage, true);
  });

  it("stays a plain field when nothing is put beside it", async () => {
    const el = await mount();

    assert.equal(el.querySelector("lc-join"), null, "no join without a pane to join");
    assert.ok(el.querySelector("input"), "the field is there");
  });

  it("takes an empty query attribute, or a null query, as nothing typed", async () => {
    const errors = [];
    const onError = (/** @type {ErrorEvent} */ e) => errors.push(e.message);
    window.addEventListener("error", onError);
    const el = await mount({ collapsible: true });
    el.setAttribute("query", "");
    await el.$requestUpdate();
    await el.expand();
    await type(el, "arpo");
    assert.equal(el.querySelectorAll("[role=option]").length, 1, "typing still searches");

    el.query = null;
    await el.$requestUpdate();
    el.onClickOutside();
    await el.$requestUpdate();
    await tick();
    window.removeEventListener("error", onError);

    assert.deepEqual(errors, []);
    assert.equal(el.expanded, false, "an empty field folds away as it would with an empty string");
  });

  it("joins the field to whatever the host puts beside it", async () => {
    const el = await mount({ leading: () => "meetup.rio" });
    const join = el.querySelector("lc-join");

    assert.ok(join, "leading content makes it a join");
    assert.match(join.querySelector(".search-aside-body").textContent, /meetup\.rio/);
    assert.equal(join.children[0].className, "search-aside", "the pane leads");
    assert.ok(join.children[1].classList.contains("search-wrapper"), "the field follows it");
  });

  it("centres a pane's content on the field beside it, not on its baseline", async () => {
    const el = await mount({
      collapsible: true,
      leading: () => html`<a href="/" style="font-size:13px;line-height:1.2">meetup.rio</a>`,
    });
    el.style.cssText = "line-height:1.5;font-size:16px;--lc-search-height:50px";
    await el.$requestUpdate();

    const mid = (/** @type {Element} */ node) => {
      const box = node.getBoundingClientRect();
      return Math.round(box.top + box.height / 2);
    };
    assert.equal(mid(el.querySelector(".search-aside-body a")), mid(el.querySelector(".search-trigger")),
      "an inline pane sits on the line box's baseline unless the pane centres it");
  });

  it("gives a pane's glyphs room, descenders included", async () => {
    const el = await mount({
      collapsible: true,
      leading: () => html`<a href="/" style="font-size:15px;font-weight:900">meetup.rio</a>`,
    });
    el.style.cssText = "line-height:1;--lc-search-height:50px";
    await el.$requestUpdate();

    const body = /** @type {HTMLElement} */ (el.querySelector(".search-aside-body"));
    const a = /** @type {HTMLElement} */ (el.querySelector(".search-aside-body a"));
    const cs = getComputedStyle(a);
    const ctx = /** @type {CanvasRenderingContext2D} */ (document.createElement("canvas").getContext("2d"));
    ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const m = ctx.measureText(a.textContent || "");
    const ink = m.actualBoundingBoxAscent + m.actualBoundingBoxDescent;

    assert.ok(body.clientHeight >= ink,
      `the pane clips its own text: ${ink.toFixed(1)}px of ink in a ${body.clientHeight}px box that hides its overflow`);
  });

  it("puts a trailing pane after the field", async () => {
    const el = await mount({ trailing: () => "Go" });
    const join = el.querySelector("lc-join");

    assert.ok(join.children[0].classList.contains("search-wrapper"), "the field leads");
    assert.match(join.children[1].textContent, /Go/);
  });

  it("is an icon until it is asked to open", async () => {
    const el = await mount({ collapsible: true, leading: () => "meetup.rio" });

    assert.ok(el.querySelector(".search-trigger"), "collapsed, it is a button");
    assert.equal(el.querySelector("input"), null, "and there is no field to type into");

    el.querySelector(".search-trigger").click();
    await el.$requestUpdate();

    assert.ok(el.querySelector("input"), "clicking it opens the field");
    assert.equal(el.querySelector(".search-trigger"), null, "and the button is gone");
    assert.equal(el.getAttribute("expanded"), "", "the state reaches the host attribute");
    assert.equal(el.ownerDocument.activeElement, el.querySelector("input"), "with the caret already in it");
  });

  it("survives the focus it loses when the icon it was tapped on goes away", async () => {
    const el = await mount({ collapsible: true, leading: () => "brand" });
    const trigger = /** @type {HTMLElement} */ (el.querySelector(".search-trigger"));

    trigger.focus();
    trigger.click();
    await tick(50);
    await el.$requestUpdate();
    await tick(50);

    assert.equal(el.expanded, true, "a real tap focuses the button, and removing it must not read as leaving the field");
    assert.ok(el.querySelector("input"), "the field is there to type into");
  });

  it("opens from anywhere on the collapsed control, not just the magnifier", async () => {
    const el = await mount({ collapsible: true, leading: () => html`<span data-brand>meetup.rio</span>` });

    /** @type {HTMLElement} */ (el.querySelector("[data-brand]")).click();
    await el.$requestUpdate();

    assert.equal(el.expanded, true, "a tap on the pane opens the field, the same as a tap on the icon");
    assert.ok(el.querySelector("input"));
  });

  it("reports the expansion so the host can make room", async () => {
    const el = await mount({ collapsible: true });
    /** @type {boolean[]} */
    const seen = [];
    el.addEventListener("search-expand", (/** @type {any} */ e) => seen.push(e.detail.expanded));

    await el.expand();
    el.collapse();

    assert.deepEqual(seen, [true, false]);
  });

  it("folds the pane away while the field is open, and brings it back", async () => {
    const el = await mount({ collapsible: true, leading: () => "meetup.rio" });
    const aside = el.querySelector(".search-aside");
    const width = () => aside.getBoundingClientRect().width;

    assert.ok(width() > 0, "the wordmark is on screen while collapsed");

    await el.expand();
    await tick(400);
    assert.equal(Math.round(width()), 0, "and yields its room to the field");

    el.collapse();
    await el.$requestUpdate();
    await tick(400);
    assert.ok(width() > 0, "and comes back");
  });

  it("takes Escape twice: the results, then the field itself", async () => {
    const el = await mount({ collapsible: true });
    await el.expand();
    await type(el, "arpo");
    assert.equal(el.open, true, "typing opens the results");

    await press(el, "Escape");
    assert.equal(el.open, false, "the first Escape closes them");
    assert.equal(el.expanded, true, "and leaves the field open");

    await press(el, "Escape");
    assert.equal(el.expanded, false, "the second collapses it");
  });

  it("takes both Escapes even when they land in the same task", async () => {
    const el = await mount({ collapsible: true });
    await el.expand();
    await type(el, "arpo");

    const input = el.querySelector("input");
    input.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    input.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await el.$requestUpdate();

    assert.equal(el.expanded, false, "the overlay stack holds Escape while the results are up, so the policy lives in one place");
  });

  it("clears before it collapses", async () => {
    const el = await mount({ collapsible: true });
    await el.expand();
    await type(el, "arpo");

    el.querySelector(".search-clear").click();
    await el.$requestUpdate();
    assert.equal(el.query, "", "the first press empties the field");
    assert.equal(el.expanded, true, "and leaves it open");

    el.querySelector(".search-clear").click();
    await el.$requestUpdate();
    assert.equal(el.expanded, false, "the second closes it");
  });

  it("closes itself once a result takes the reader somewhere", async () => {
    const el = await mount({ collapsible: true, suggestions: RECENT });
    await el.expand();
    await type(el, "arpo");

    el.querySelector(".search-result").click();
    await el.$requestUpdate();
    assert.equal(el.expanded, false, "a result with an href is a departure, so the field closes behind it");
    assert.equal(el.query, "", "and the next tap on the icon starts clean");

    await el.expand();
    await el.$requestUpdate();
    const suggestion = el.querySelector(".search-result");
    assert.equal(suggestion.tagName, "BUTTON", "an empty field offers the suggestions, which carry no href");

    suggestion.click();
    await el.$requestUpdate();
    assert.equal(el.expanded, true, "a suggestion is not a departure, so the field stays open to keep typing");
  });

  it("shows what was searched before anything is typed", async () => {
    const el = await mount({ collapsible: true, suggestions: RECENT });
    await el.expand();

    assert.match(el.querySelector(".search-group-label").textContent, /Recent/);
    assert.equal(el.querySelectorAll(".search-result").length, 1);

    await type(el, "lapa");
    assert.deepEqual(
      [...el.querySelectorAll(".search-result-title")].map((/** @type {Element} */ n) => n.textContent),
      ["Arcos da Lapa", "Baile na Lapa"],
      "and the matches replace them once there is a query",
    );
  });

  it("lets the host draw the row without giving up the anchor", async () => {
    const el = await mount({ renderResult: (/** @type {any} */ doc) => `[${doc.title}]` });
    el.query = "arpo";
    el.open = true;
    await el.$requestUpdate();

    const row = el.querySelector(".search-result");
    assert.equal(row.tagName, "A", "a doc with an href is still a real link");
    assert.equal(row.getAttribute("href"), "/places/arpoador", "carrying the app's base path, as lc-link does");
    assert.equal(row.textContent.trim(), "[Arpoador]", "and the host owns what is inside it");
  });

  it("says so in the reader's language when nothing matches", async () => {
    const el = await mount();
    await type(el, "zzzz");

    assert.equal(el.querySelector(".search-empty").textContent.trim(), "No results");
  });

  it("waits inline without saying nothing matched, then shows what the host sent", async () => {
    const el = await mount({ remote: true, inline: true, docs: [] });
    el.addEventListener("search-input", () => { el.loading = true; });
    await type(el, "zq");
    const panel = el.querySelector(".search-dropdown");

    assert.equal(el.querySelector(".search-empty"), null, "no empty body yet");
    assert.equal(panel.getAttribute("aria-busy"), "true");

    el.docs = FROM_SERVER;
    el.loading = false;
    await el.$requestUpdate();
    assert.deepEqual(titles(el), FROM_SERVER.map((d) => d.title));
    assert.equal(el.querySelector("[role=listbox]").hasAttribute("aria-busy"), false);

    el.loading = true;
    el.docs = [];
    await el.$requestUpdate();
    el.loading = false;
    await el.$requestUpdate();
    assert.equal(el.querySelector(".search-empty").textContent.trim(), "No results", "an answer of nothing says so");
  });

  it("keeps its popup shut while the host is loading and nothing is up yet", async () => {
    const el = await mount({ remote: true, docs: [] });
    el.addEventListener("search-input", () => { el.loading = true; });
    const input = el.querySelector("input");
    input.focus();
    await type(el, "zq");

    assert.equal(el.querySelector(".search-dropdown"), null, "no empty box under the field");
    assert.equal(input.getAttribute("aria-expanded"), "false");

    el.docs = FROM_SERVER;
    await el.$requestUpdate();
    assert.equal(input.getAttribute("aria-expanded"), "true", "results open it");
    assert.equal(el.querySelector("[role=listbox]").getAttribute("aria-busy"), "true", "still busy while loading");

    el.loading = false;
    await el.$requestUpdate();
    assert.equal(el.querySelector("[role=listbox]").hasAttribute("aria-busy"), false);
    assert.deepEqual(titles(el), FROM_SERVER.map((d) => d.title));
  });

  it("opens its popup on the answer that nothing matched once loading clears", async () => {
    const el = await mount({ remote: true, docs: [] });
    el.addEventListener("search-input", () => { el.loading = true; });
    const input = el.querySelector("input");
    input.focus();
    await type(el, "zq");
    assert.equal(input.getAttribute("aria-expanded"), "false");

    el.loading = false;
    await el.$requestUpdate();
    assert.equal(input.getAttribute("aria-expanded"), "true");
    assert.equal(el.querySelector(".search-empty").textContent.trim(), "No results");
  });

  it("keeps the results it has while the next set loads", async () => {
    const el = await mount({ remote: true, docs: FROM_SERVER });
    await type(el, "a");
    el.loading = true;
    await el.$requestUpdate();

    assert.deepEqual(titles(el), FROM_SERVER.map((d) => d.title));
    assert.equal(el.querySelector("[role=listbox]").getAttribute("aria-busy"), "true");
  });

  it("lets the results be wider than the field they hang from", async () => {
    const el = await mount({});
    el.style.cssText = "width:200px;--lc-search-dropdown-min-width:360px";
    await type(el, "arpo");

    const panel = el.querySelector(".search-dropdown").getBoundingClientRect();
    assert.ok(panel.width >= 360, `a narrow field can still show a readable row: ${Math.round(panel.width)}px`);
    assert.equal(Math.round(panel.left), Math.round(el.getBoundingClientRect().left),
      "and it still hangs from the field's leading edge");
  });

  it("shows a remote host's results as it sent them, even ones the query does not spell", async () => {
    const el = await mount({ remote: true, docs: [] });
    /** @type {string[]} */
    const queries = [];
    el.addEventListener("search-input", (/** @type {CustomEvent<string>} */ e) => {
      queries.push(e.detail);
      el.docs = FROM_SERVER;
    });

    el.querySelector("input").focus();
    await type(el, "z");
    await type(el, "zq");

    assert.deepEqual(queries, ["z", "zq"], "every keystroke asks the host");
    assert.deepEqual(titles(el), FROM_SERVER.map((d) => d.title), "and its answer is drawn whole and in order");
  });

  it("walks, picks and closes a remote list with the keys the default one takes", async () => {
    const el = await mount({ remote: true, docs: FROM_SERVER });
    /** @type {string[]} */
    const picked = [];
    el.addEventListener("search-select", (/** @type {CustomEvent<{ id: string }>} */ e) => picked.push(e.detail.id));
    await type(el, "zq");

    await press(el, "ArrowDown");
    await press(el, "ArrowDown");
    assert.equal(el.querySelector(".search-result.active").textContent.trim(), "Lapa", "two steps down is the second result");

    await press(el, "Enter");
    assert.deepEqual(picked, ["s2"], "Enter picks the result it is on");
    assert.equal(el.open, false, "and closes the list");

    await type(el, "zqx");
    assert.equal(el.open, true);
    await press(el, "Escape");
    assert.equal(el.open, false, "Escape closes it too");
  });

  it("caps a remote list at the limit, across groups", async () => {
    const el = await mount({ remote: true, limit: 3, docs: [...FROM_SERVER, { id: "s6", group: "Events", title: "Baile" }] });
    await type(el, "zq");

    assert.deepEqual(titles(el), ["Arpoador", "Lapa", "Urca"]);
  });

  it("still matches for itself when it is not remote", async () => {
    const el = await mount({ docs: FROM_SERVER });
    await type(el, "zq");

    assert.deepEqual(titles(el), [], "the default mode filters what it is given");
    assert.equal(el.querySelector(".search-empty").textContent.trim(), "No results");
  });

  it("is a combobox over a named listbox, its label naming both", async () => {
    const el = await mount({ label: "Places in Rio" });
    await type(el, "a");
    const input = el.querySelector("input");
    const list = el.querySelector("[role=listbox]");

    assert.equal(input.getAttribute("role"), "combobox");
    assert.equal(input.labels[0].textContent.trim(), "Places in Rio", "the visible label names the field");
    assert.equal(input.getAttribute("aria-controls"), list.id, "the field points at its list");
    assert.equal(input.getAttribute("aria-expanded"), "true");
    assert.equal(document.getElementById(list.getAttribute("aria-labelledby")).textContent.trim(), "Places in Rio",
      "and the list carries the same name");
    assert.deepEqual([...list.querySelectorAll(".search-result")].map((/** @type {Element} */ n) => n.getAttribute("role")),
      ["option", "option", "option"], "every result is an option");
  });

  it("follows the arrow keys with aria-activedescendant", async () => {
    const el = await mount({ docs: FROM_SERVER });
    /** @type {string[]} */
    const picked = [];
    el.addEventListener("search-select", (/** @type {CustomEvent<{ id: string }>} */ e) => picked.push(e.detail.id));
    await type(el, "a");
    const input = el.querySelector("input");
    const options = [...el.querySelectorAll("[role=option]")];
    const selected = () => options.filter((/** @type {Element} */ o) => o.getAttribute("aria-selected") === "true").map((/** @type {Element} */ o) => o.id);

    assert.equal(input.hasAttribute("aria-activedescendant"), false, "nothing is active before a key");

    await press(el, "ArrowDown");
    await press(el, "ArrowDown");
    assert.equal(input.getAttribute("aria-activedescendant"), options[1].id);
    assert.deepEqual(selected(), [options[1].id], "the active option is the one selected");

    await press(el, "ArrowUp");
    assert.equal(input.getAttribute("aria-activedescendant"), options[0].id);
    assert.deepEqual(selected(), [options[0].id]);

    await press(el, "Enter");
    assert.deepEqual(picked, ["s1"], "Enter picks the option the field points at");
    assert.equal(input.getAttribute("aria-expanded"), "false", "and the list is gone");
    assert.equal(input.hasAttribute("aria-activedescendant"), false, "with nothing left to point at");
  });

  it("keeps a result with an href a real link while it is an option", async () => {
    const el = await mount();
    await type(el, "arpo");
    const option = el.querySelector("[role=option]");

    assert.equal(option.tagName, "A");
    assert.equal(option.getAttribute("href"), "/places/arpoador");
  });

  it("names the list by its placeholder when there is no label", async () => {
    const el = await mount({ placeholder: "Search places" });
    await type(el, "a");

    assert.equal(el.querySelector("[role=listbox]").getAttribute("aria-label"), "Search places");
  });

  it("is no listbox when nothing matches", async () => {
    const el = await mount();
    await type(el, "zzzz");

    assert.equal(el.querySelector("[role=listbox]"), null, "an empty listbox is not one");
    assert.ok(el.querySelector(".search-empty"), "the message still shows");
  });

  it("gives every instance its own ids", async () => {
    const one = await mount();
    const two = await mount();
    await type(one, "a");
    await type(two, "a");

    assert.notEqual(one.querySelector("[role=listbox]").id, two.querySelector("[role=listbox]").id);
    assert.notEqual(one.querySelector("[role=option]").id, two.querySelector("[role=option]").id);
  });

  it("lays inline results in the flow, pushing what follows down", async () => {
    const el = await mount({ inline: true });
    const next = document.createElement("p");
    el.after(next);
    mounted.push(next);
    const top = next.getBoundingClientRect().top;
    await type(el, "a");
    const panel = el.querySelector(".search-dropdown");

    assert.equal(getComputedStyle(panel).position, "static");
    assert.equal(getComputedStyle(panel).boxShadow, "none");
    assert.ok(next.getBoundingClientRect().top >= panel.getBoundingClientRect().bottom, "the next block starts below the results");
    assert.ok(next.getBoundingClientRect().top > top, "the results took room in the flow");
  });

  it("keeps the magnifier in the field while inline results sit under it", async () => {
    const el = await mount({ inline: true });
    await type(el, "a");
    const field = el.querySelector(".search-input").getBoundingClientRect();
    const icon = el.querySelector(".search-icon").getBoundingClientRect();

    assert.ok(el.querySelectorAll("[role=option]").length > 1, "several results are up");
    assert.ok(Math.abs(icon.top + icon.height / 2 - (field.top + field.height / 2)) < 1, "the icon is centred on the field, not on the field and its results");
  });

  it("lets Escape drop the active option inline, keeping the query and the results", async () => {
    const el = await mount({ inline: true });
    const input = el.querySelector("input");
    input.focus();
    await type(el, "a");
    await press(el, "ArrowDown");
    assert.ok(input.getAttribute("aria-activedescendant"), "an option is active");

    await press(el, "Escape");
    assert.equal(input.hasAttribute("aria-activedescendant"), false, "no option is active");
    assert.equal(el.querySelectorAll('[role=option][aria-selected="true"]').length, 0, "and none reads as selected");
    assert.equal(input.value, "a", "the query stays");
    assert.ok(el.querySelectorAll("[role=option]").length > 1, "and so do the results");
    assert.equal(document.activeElement, input, "focus stays in the field");
  });

  it("takes Escape twice inline: the active option, then the field itself", async () => {
    const el = await mount({ inline: true, collapsible: true });
    await el.expand();
    await type(el, "arpo");
    await press(el, "ArrowDown");

    await press(el, "Escape");
    assert.equal(el.active, -1, "the first Escape drops the active option");
    assert.equal(el.expanded, true, "and leaves the field open");

    await press(el, "Escape");
    assert.equal(el.expanded, false, "the second collapses it");
    assert.equal(el.query, "arpo", "and neither clears the query");
  });

  it("moves the magnifier to the other end on request", async () => {
    const el = await mount({ iconPosition: "right" });
    const box = el.getBoundingClientRect();
    const icon = el.querySelector(".search-icon").getBoundingClientRect();

    assert.ok(icon.left > box.left + box.width / 2, "the icon sits in the right half");
  });
});
