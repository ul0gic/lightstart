import { unsafeHTML } from "@lightstart/light/html";
import T from "@lightstart/light/types";
import { defineComponent } from "@lightstart/light";
import { createSlugger } from "../utils/slug.js";
/** @import { MarkdownHeading, MarkedLike, Prop } from "../types.js" */

/** @param {string} text */
const escapeAttribute = (text) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const LINK_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);

/** @param {string} href */
const isLinkSafe = (href) => {
  const link = document.createElement("a");
  link.href = href;
  return LINK_PROTOCOLS.has(link.protocol);
};

/**
 * What one parse collects. `marked` is one module-wide instance and `parse`
 * is synchronous, so the component points this at its own record before
 * parsing and the renderers write into it.
 * @type {{ slug: (text: string) => string, headings: MarkdownHeading[], anchors: boolean, untrusted: boolean }}
 */
let current = { slug: createSlugger(), headings: [], anchors: false, untrusted: false };

const renderer = {
  /**
   * @this {{ parser: { parseInline: (tokens: unknown[]) => string } }}
   * @param {string | { depth: number, tokens: unknown[], text: string }} token a token from marked 5 on; before, the text, with the level and raw text after it
   * @param {number} [level]
   * @param {string} [raw]
   */
  heading(token, level, raw) {
    const depth = typeof token === "object" ? token.depth : (level ?? 1);
    const inner = typeof token === "object" ? this.parser.parseInline(token.tokens) : token;
    const text = typeof token === "object" ? token.text : (raw ?? token);
    const id = current.slug(text);
    current.headings.push({ id, text, level: depth });
    const anchor = current.anchors ? `<a class="anchor" href="#${id}" aria-label="${escapeAttribute(text)}">#</a>` : "";
    return `<h${depth} id="${id}">${inner}${anchor}</h${depth}>\n`;
  },
  /**
   * @param {string | { text: string, lang?: string }} token a token from marked 5 on; before, the code, with the info string after it
   * @param {string} [info]
   */
  code(token, info) {
    const text = typeof token === "object" ? token.text : token;
    const lang = typeof token === "object" ? token.lang : info;
    const language = (lang || "").split(/\s/)[0];
    return `<lc-code-block language="${escapeAttribute(language)}" code="${escapeAttribute(text)}"></lc-code-block>\n`;
  },
  /** @param {string | { text: string }} token a token from marked 5 on; before, the HTML */
  html(token) {
    const text = typeof token === "object" ? token.text : token;
    return current.untrusted ? escapeAttribute(text) : text;
  },
  /**
   * @this {{ parser: { parseInline: (tokens: unknown[]) => string } }}
   * @param {string | { href: string, title?: string | null, tokens: unknown[] }} token a token from marked 5 on; before, the URL, with the title and the drawn text after it
   * @param {string | null} [title]
   * @param {string} [text]
   * @returns {string | false} `false` hands the link to marked
   */
  link(token, title, text) {
    if (!current.untrusted) return false;
    const href = typeof token === "object" ? token.href : token;
    const label = typeof token === "object" ? this.parser.parseInline(token.tokens) : (text ?? "");
    if (!isLinkSafe(href)) return label;
    const tip = typeof token === "object" ? token.title : title;
    return `<a href="${escapeAttribute(href)}"${tip ? ` title="${escapeAttribute(tip)}"` : ""}>${label}</a>`;
  },
};

const MARKED = "marked";

/** @type {{ load: () => Promise<{ marked: MarkedLike }> }} */
const source = { load: () => import(MARKED) };

/**
 * Say where `marked` comes from. By default it is the bare `marked`
 * specifier, which the page's importmap resolves; with a bundler, pass
 * `load: () => import("marked")` so it sees the dependency.
 * @param {{ load: () => Promise<{ marked: MarkedLike }> }} options
 */
export const configureMarkdown = (options) => {
  Object.assign(source, options);
};

/** @type {Promise<MarkedLike> | null} */
let _markedPromise = null;
const loadMarked = () => {
  if (_markedPromise) return _markedPromise;
  _markedPromise = source.load().then(({ marked }) => {
    marked.use({
      renderer,
      extensions: [
        {
          name: "wikiLink",
          level: "inline",
          /** @param {string} src */
          start(src) {
            return src.match(/\[\[/)?.index;
          },
          /** @param {string} src */
          tokenizer(src) {
            const match = src.match(/^\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/);
            if (match)
              return {
                type: "wikiLink",
                raw: match[0],
                name: match[1].trim(),
                display: (match[2] || match[1]).trim(),
              };
          },
          /** @param {{ name: string, display: string }} token */
          renderer(token) {
            const escaped = token.name.replace(/"/g, "&quot;");
            return `<a class="wiki-link" data-name="${escaped}">${current.untrusted ? escapeAttribute(token.display) : token.display}</a>`;
          },
        },
      ],
    });
    return marked;
  });
  return _markedPromise;
};

export default defineComponent({
  tag: "lc-markdown",
  style: true,
  props: {
    content: T.string(),
    anchors: T.boolean(),
    untrusted: T.boolean(),
    onWikiLink: T.function(),
    _marked: /** @type {Prop<MarkedLike | null>} */ (T.object({ attribute: false })),
    _headings: /** @type {Prop<MarkdownHeading[]>} */ (T.array({ attribute: false, defaultValue: [], reactive: false })),
    _announced: T.string({ defaultValue: "", reactive: false }),
  },
  events: {
    "markdown-rendered": T.object(),
  },

  connected() {
    const onWikiClick = /** @type {EventListener} */ ((e) => {
      const link = /** @type {HTMLElement | null} */ ((/** @type {HTMLElement} */ (e.target)).closest(".wiki-link"));
      if (link && this.onWikiLink) {
        e.preventDefault();
        this.onWikiLink(link.dataset.name);
      }
    });
    this.addEventListener("click", onWikiClick);
    this.$own(() => this.removeEventListener("click", onWikiClick));
    loadMarked().then((marked) => { this._marked = marked; });
  },

  updated() {
    if (!this._marked) return;
    const key = `${this.anchors}:${this.content || ""}`;
    if (key === this._announced) return;
    this._announced = key;
    this.$emit("markdown-rendered", { headings: this._headings });
  },

  render() {
    if (!this._marked) return "";
    current = { slug: createSlugger(), headings: [], anchors: this.anchors, untrusted: this.untrusted };
    const rendered = this._marked.parse(this.content || "");
    this._headings = current.headings;
    return unsafeHTML(rendered);
  },
});
