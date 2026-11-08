/**
 * @lightstart/light/native/tui/node: the terminal node tree, the DOM's
 * replacement. Elements are typed classes with closed prop tables for what
 * they lay out and paint; an attribute an element has no prop for is kept
 * as an attribute, inert. Children are a doubly linked list (`firstChild`,
 * `lastChild`, `prev`, `next`), so inserting before a sibling, removing and
 * stepping to the next sibling cost nothing that grows with the tree;
 * `childNodes()` snapshots them for a reader. Mutations bump versions up
 * the ancestor chain and request a frame. A view that owns an element is
 * attached when the element joins a root's tree and detached when it
 * leaves.
 */
import { parseColor } from "./color.js";
import { frames } from "./scheduler.js";
import { UIEvent } from "./events.js";
import { ATTR_BOLD, ATTR_DIM, ATTR_INVERSE, ATTR_ITALIC, ATTR_STRIKE, ATTR_UNDERLINE, DEFAULT_STYLE, Style } from "./style.js";

import { applyClasses, classStyler, markExplicit } from "./classes.js";

                                                   
                                                        
                                                                         

                                                         

export class TNode {
  parent                 ;
  prev              ;
  next              ;
  x        ;
  y        ;
  w        ;
  h        ;
  version        ;
  textLayout                   ;

  constructor() {
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.version = 0;
    this.textLayout = null;
  }

  isConnected() {
    let n               = this;
    while (n !== null) {
      if (n instanceof TRoot) return true;
      n = n.parent;
    }
    return false;
  }

  invalidate() {
    let n               = this;
    while (n !== null) {
      n.version++;
      n = n.parent;
    }
    frames.request();
  }

  nextSibling() {
    return this.next;
  }

  dispose() {
    this.parent = null;
    this.prev = null;
    this.next = null;
  }
}

/**
 * The children of an element as an array, a snapshot for readers; the tree
 * itself walks `firstChild` and `next`.
 */
export const childNodes = (el          )          => {
  const out          = [];
  for (let c = el.firstChild; c !== null; c = c.next) out.push(c);
  return out;
};

/** A zero-size marker; a child part owns the range between a start and an end anchor. */
export class TAnchor extends TNode {
  label        ;

  constructor(label        ) {
    super();
    this.label = label;
  }
}

/** An inline text leaf. */
export class TRun extends TNode {
  text        ;

  constructor(text        ) {
    super();
    this.text = text;
  }

  setText(t        ) {
    if (t === this.text) return;
    this.text = t;
    this.invalidate();
  }
}

/** A listener an element holds: the engine's binding under an event name. */
export class HandlerEntry {
  name        ;
  binding              ;
  once         ;

  constructor(name        , binding              , once         ) {
    this.name = name;
    this.binding = binding;
    this.once = once;
  }
}

export const asString = (name        , v           ) => {
  if (typeof v === "string") return v;
  if (typeof v === "number") return String(v);
  throw new Error("[tdom] prop \"" + name + "\" expects a string, got " + (v === null ? "null" : typeof v));
};

export const asNumber = (name        , v           ) => {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const n = Number(v.trim());
    if (v.trim().length > 0 && !Number.isNaN(n)) return n;
  }
  throw new Error("[tdom] prop \"" + name + "\" expects a number, got " + (v === null ? "null" : typeof v === "string" ? JSON.stringify(v) : typeof v));
};

export const asNumberOrNull = (name        , v           ) => {
  if (v === null) return null;
  if (typeof v === "string" && (v === "" || v === "auto")) return null;
  return asNumber(name, v);
};

export const asBool = (v           ) => {
  if (typeof v === "boolean") return v;
  if (v === null) return false;
  if (typeof v === "number") return v !== 0;
  return v !== "false";
};

const DIRECTIONS = ["column", "row"];
const ALIGNS = ["stretch", "start", "end"];
const WRAPS = ["word", "char", "none"];

export const asEnum = (name        , v           , allowed          ) => {
  const s = asString(name, v);
  if (allowed.indexOf(s) < 0) throw new Error("[tdom] prop \"" + name + "\" must be one of " + allowed.join("|") + ", got " + JSON.stringify(s));
  return s;
};

export class TElement extends TNode {
  kind        ;
  tag        ;
  firstChild              ;
  lastChild              ;
  style       ;
  hidden         ;
  attrs                     ;
  props                      ;
  handlers                ;
  owner                 ;
  attached         ;
  explicitProps        ;
  classProps        ;
  states        ;

  /**
   * @param kind box, text, span, input or fragment
   * @param tag the tag the template wrote
   */
  constructor(kind        , tag        ) {
    super();
    this.explicitProps = 0;
    this.classProps = 0;
    this.states = 0;
    this.kind = kind;
    this.tag = tag;
    this.firstChild = null;
    this.lastChild = null;
    this.style = DEFAULT_STYLE;
    this.hidden = false;
    this.attrs = new Map();
    this.props = new Map();
    this.handlers = [];
    this.owner = null;
    this.attached = false;
  }

  insertBefore(node       , ref              ) {
    if (ref !== null && ref.parent !== this) throw new Error("[tdom] insertBefore: the reference node is not a child of <" + this.tag + ">");
    if (node.parent !== null) node.parent.remove(node);
    this.link(node, ref);
    node.invalidate();
  }

  /**
   * Put `node` before `ref` (at the end when null) without a frame request:
   * what cloning a template does for every node it creates.
   */
  link(node       , ref              ) {
    node.parent = this;
    if (ref === null) {
      node.prev = this.lastChild;
      node.next = null;
      if (this.lastChild !== null) this.lastChild.next = node;
      else this.firstChild = node;
      this.lastChild = node;
      return;
    }
    node.next = ref;
    node.prev = ref.prev;
    if (ref.prev !== null) ref.prev.next = node;
    else this.firstChild = node;
    ref.prev = node;
  }

  append(node       ) {
    this.insertBefore(node, null);
  }

  remove(node       ) {
    if (node.parent !== this) return;
    if (node.prev !== null) node.prev.next = node.next;
    else this.firstChild = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    else this.lastChild = node.prev;
    node.parent = null;
    node.prev = null;
    node.next = null;
    this.invalidate();
  }

  clearChildren() {
    for (let c = this.firstChild; c !== null;) {
      const next = c.next;
      c.parent = null;
      c.prev = null;
      c.next = null;
      c = next;
    }
    this.firstChild = null;
    this.lastChild = null;
  }

  /**
   * Set a prop by its template name: one the owning view declared, the
   * element's classes, a style prop, one of the element's own, or an
   * attribute kept inert. A removal (null) never reaches the view: it keeps
   * its value.
   */
  setProp(name        , v           ) {
    if (this.owner !== null && v !== null && this.owner.$setProp(name, v)) return;
    if (name === "class") applyClasses(this, v);
    else if (this.setKnownExplicit(name, v)) return;
    if (v === null || v === false) {
      if (this.attrs.delete(name)) this.invalidate();
    } else {
      const s = v === true ? "" : typeof v === "number" ? String(v) : v;
      if (this.attrs.get(name) !== s) {
        this.attrs.set(name, s);
        this.invalidate();
      }
    }
  }

  /**
   * Set a style prop or one of the element's own; answers whether `name` is one.
   */
  setKnownProp(name        , v           ) {
    return this.setStyleProp(name, v) || this.setOwnProp(name, v);
  }

  /**
   * A known prop the template writes: set it and, while a styler is
   * configured, record that it is the template's (or, on a removal, that
   * the classes may have it again).
   */
  setKnownExplicit(name        , v           ) {
    const known = this.setKnownProp(name, v);
    if (known && classStyler() !== null) markExplicit(this, name, v !== null);
    return known;
  }

  /**
   * @returns whether the element has a prop of that name
   */
  setOwnProp(_name        , _v           )          {
    return false;
  }

  setStyleProp(name        , v           ) {
    switch (name) {
      case "fg":
        this.setStyle(this.style.withFg(v === null ? -1 : parseColor(asString(name, v))));
        return true;
      case "bg":
        this.setStyle(this.style.withBg(v === null ? -1 : parseColor(asString(name, v))));
        return true;
      case "bold":
        this.setStyle(this.style.withAttr(ATTR_BOLD, asBool(v)));
        return true;
      case "dim":
        this.setStyle(this.style.withAttr(ATTR_DIM, asBool(v)));
        return true;
      case "italic":
        this.setStyle(this.style.withAttr(ATTR_ITALIC, asBool(v)));
        return true;
      case "underline":
        this.setStyle(this.style.withAttr(ATTR_UNDERLINE, asBool(v)));
        return true;
      case "inverse":
        this.setStyle(this.style.withAttr(ATTR_INVERSE, asBool(v)));
        return true;
      case "strike":
        this.setStyle(this.style.withAttr(ATTR_STRIKE, asBool(v)));
        return true;
      case "hidden": {
        const h = asBool(v);
        if (h !== this.hidden) {
          this.hidden = h;
          this.invalidate();
        }
        return true;
      }
      default:
        return false;
    }
  }

  setStyle(s       ) {
    if (s.equals(this.style)) return;
    this.style = s;
    this.invalidate();
  }

  addHandler(name        , binding              , once         ) {
    this.handlers.push(new HandlerEntry(name, binding, once));
  }

  removeHandler(name        , binding              ) {
    const i = this.handlers.findIndex((e) => e.name === name && e.binding === binding);
    if (i >= 0) this.handlers.splice(i, 1);
  }

  /**
   * Run this element's handlers for the event's type; answers whether one
   * consumed it. The event travels as `unknown` so that a handler typed with
   * the event's own class receives it as such in a native build.
   * @param e a UIEvent
   */
  handle(e         ) {
    if (!(e instanceof UIEvent)) return false;
    const handlers = this.handlers;
    let first = 0;
    while (first < handlers.length && handlers[first].name !== e.type) first++;
    if (first === handlers.length) return false;
    for (const entry of handlers.slice(first)) {
      if (entry.name !== e.type) continue;
      if (entry.once) this.removeHandler(entry.name, entry.binding);
      entry.binding.handleEvent(e);
      if (e.consumed) return true;
    }
    return false;
  }

  /**
   * Bubble from this element up to the root; answers whether a handler consumed it.
   * @param e a UIEvent
   */
  dispatch(e         ) {
    let n                  = this;
    while (n !== null) {
      if (n.handle(e)) return true;
      n = n.parent;
    }
    return false;
  }

  /** @returns the non-default prop values, for dumps and tests */
  propsSummary()           {
    return [];
  }

  describe() {
    const props = this.propsSummary();
    for (const [name, value] of this.attrs) props.push(value === "" ? name : name + "=" + JSON.stringify(value));
    const style = this.style.describe();
    if (style.length > 0) props.push(style);
    if (this.hidden) props.push("hidden");
    return props.length > 0 ? this.tag + "[" + props.join(",") + "]" : this.tag;
  }

  dispose() {
    for (let c = this.firstChild; c !== null;) {
      const next = c.next;
      c.dispose();
      c = next;
    }
    this.firstChild = null;
    this.lastChild = null;
    this.handlers.length = 0;
    super.dispose();
  }
}

/** A block container with a one-axis flex layout. */
export class TBox extends TElement {
  direction        ;
  flex        ;
  width               ;
  height               ;
  padding        ;
  gap        ;
  border         ;
  title               ;
  scroll         ;
  scrollTop        ;
  stickToBottom         ;
  align        ;
  rule         ;
  scrollState                    ;
  measured                     ;

  constructor(tag        ) {
    super("box", tag);
    this.direction = "column";
    this.flex = 0;
    this.width = null;
    this.height = null;
    this.padding = 0;
    this.gap = 0;
    this.border = false;
    this.title = null;
    this.scroll = false;
    this.scrollTop = 0;
    this.stickToBottom = false;
    this.align = "stretch";
    this.rule = false;
    this.scrollState = null;
    this.measured = null;
  }

  setOwnProp(name        , v           ) {
    switch (name) {
      case "direction":
        this.setDirection(asEnum(name, v, DIRECTIONS));
        return true;
      case "flex":
        this.setFlex(asNumber(name, v));
        return true;
      case "width":
        this.setWidth(asNumberOrNull(name, v));
        return true;
      case "height":
        this.setHeight(asNumberOrNull(name, v));
        return true;
      case "padding":
        this.setPadding(asNumber(name, v));
        return true;
      case "gap":
        this.setGap(asNumber(name, v));
        return true;
      case "border":
        this.setBorder(asBool(v));
        return true;
      case "title":
        this.setTitle(v === null ? null : asString(name, v));
        return true;
      case "scroll":
        this.setScroll(asBool(v));
        return true;
      case "scrollTop":
        this.setScrollTop(asNumber(name, v));
        return true;
      case "stickToBottom":
        this.setStickToBottom(asBool(v));
        return true;
      case "align":
        this.setAlign(asEnum(name, v, ALIGNS));
        return true;
      default:
        return false;
    }
  }

  setDirection(s        ) {
    if (this.direction === s) return;
    this.direction = s;
    this.invalidate();
  }

  setAlign(s        ) {
    if (this.align === s) return;
    this.align = s;
    this.invalidate();
  }

  setFlex(n        ) {
    if (this.flex === n) return;
    this.flex = n;
    this.invalidate();
  }

  setPadding(n        ) {
    if (this.padding === n) return;
    this.padding = n;
    this.invalidate();
  }

  setGap(n        ) {
    if (this.gap === n) return;
    this.gap = n;
    this.invalidate();
  }

  setScrollTop(n        ) {
    if (this.scrollTop === n) return;
    this.scrollTop = n;
    this.invalidate();
  }

  setWidth(n               ) {
    if (this.width === n) return;
    this.width = n;
    this.invalidate();
  }

  setHeight(n               ) {
    if (this.height === n) return;
    this.height = n;
    this.invalidate();
  }

  setBorder(b         ) {
    if (this.border === b) return;
    this.border = b;
    this.invalidate();
  }

  setScroll(b         ) {
    if (this.scroll === b) return;
    this.scroll = b;
    this.invalidate();
  }

  setStickToBottom(b         ) {
    if (this.stickToBottom === b) return;
    this.stickToBottom = b;
    this.invalidate();
  }

  setTitle(s               ) {
    if (this.title === s) return;
    this.title = s;
    this.invalidate();
  }

  propsSummary() {
    const p           = [];
    if (this.direction !== "column") p.push("direction=" + this.direction);
    if (this.flex !== 0) p.push("flex=" + String(this.flex));
    if (this.width !== null) p.push("width=" + String(this.width));
    if (this.height !== null) p.push("height=" + String(this.height));
    if (this.padding !== 0) p.push("padding=" + String(this.padding));
    if (this.gap !== 0) p.push("gap=" + String(this.gap));
    if (this.border) p.push("border");
    if (this.title !== null) p.push("title=" + JSON.stringify(this.title));
    if (this.scroll) p.push("scroll");
    if (this.scrollTop !== 0) p.push("scrollTop=" + String(this.scrollTop));
    if (this.stickToBottom) p.push("stickToBottom");
    if (this.align !== "stretch") p.push("align=" + this.align);
    return p;
  }
}

/** The tree root: a box the renderer sizes to the terminal. */
export class TRoot extends TBox {
  constructor() {
    super("root");
  }
}

/** A holder whose children splice into the parent it is inserted into. */
export class TFragment extends TElement {
  constructor() {
    super("fragment", "#fragment");
  }
}

/** A block of inline content (runs and spans), wrapped to its width. */
export class TText extends TElement {
  wrap        ;

  constructor(tag        ) {
    super("text", tag);
    this.wrap = "word";
  }

  setOwnProp(name        , v           ) {
    if (name !== "wrap") return false;
    const w = asEnum(name, v, WRAPS);
    if (w !== this.wrap) {
      this.wrap = w;
      this.invalidate();
    }
    return true;
  }

  propsSummary() {
    return this.wrap === "word" ? [] : ["wrap=" + this.wrap];
  }
}

/** An inline styled container inside a text. */
export class TSpan extends TElement {
  constructor(tag        ) {
    super("span", tag);
  }
}

/** A multi-line text editor; the editing itself lives in editor.js. */
export class TInput extends TElement {
  lines          ;
  row        ;
  col        ;
  placeholder        ;
  minLines        ;
  maxLines        ;

  constructor(tag        ) {
    super("input", tag);
    this.lines = [""];
    this.row = 0;
    this.col = 0;
    this.placeholder = "";
    this.minLines = 1;
    this.maxLines = 8;
  }

  isEmpty() {
    return this.lines.length === 1 && this.lines[0].length === 0;
  }

  value() {
    return this.lines.join("\n");
  }

  setOwnProp(name        , v           ) {
    switch (name) {
      case "placeholder": {
        const s = v === null ? "" : asString(name, v);
        if (s !== this.placeholder) {
          this.placeholder = s;
          this.invalidate();
        }
        return true;
      }
      case "minLines": {
        const n = asNumber(name, v);
        if (n !== this.minLines) {
          this.minLines = n;
          this.invalidate();
        }
        return true;
      }
      case "maxLines": {
        const n = asNumber(name, v);
        if (n !== this.maxLines) {
          this.maxLines = n;
          this.invalidate();
        }
        return true;
      }
      default:
        return false;
    }
  }

  propsSummary() {
    const p           = [];
    if (this.placeholder.length > 0) p.push("placeholder=" + JSON.stringify(this.placeholder));
    if (this.minLines !== 1) p.push("minLines=" + String(this.minLines));
    if (this.maxLines !== 8) p.push("maxLines=" + String(this.maxLines));
    return p;
  }
}

/**
 * The first element at or under `node` in document order that passes
 * `test`, or null.
 */
export const find = (node       , test                           )                  => {
  if (!(node instanceof TElement)) return null;
  if (test(node)) return node;
  for (let c = node.firstChild; c !== null; c = c.next) {
    const found = find(c, test);
    if (found !== null) return found;
  }
  return null;
};
