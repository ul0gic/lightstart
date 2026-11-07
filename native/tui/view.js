/**
 * @bootstrapp/light/native/tui/view: a component on the terminal. A View is a
 * ViewCore that owns a box: `render()` answers a template rendered into
 * the box, signal fields it reads re-render it, `${this.child}` in a
 * template places a child view's box, and the host attaches the view when
 * its box joins the root's tree and detaches it when it leaves. The
 * lifecycle hooks are methods: `connected`, `disconnected`, `willUpdate`,
 * `firstUpdated`, `updated`. A subclass `define`d under a tag is made by
 * the host wherever a template writes that tag: its `prop`s receive the
 * tag's attributes and `.prop=` bindings, `$emit` sends an event a parent
 * handles with `@type=`, the children the parent wrote inside the tag
 * project into the `<slot>`s of its template, and the host disposes it
 * with its element.
 */
import { disposeTree, render } from "../../html/core.js";
import { currentHost } from "../../html/host.js";
import { Signal, signal } from "../../signals/index.js";
import { ViewCore } from "../../view/core.js";
import { CustomEvent } from "./events.js";
import { TBox, TElement, asBool, asNumber } from "./node.js";
import { TSlotPart, projectSlots } from "./slots.js";
import { TagDefinition, registerTag } from "./tags.js";

/**
 * A declared prop as its view reads and writes it, typed over the
 * `Signal<unknown>` the host sets by name. A `Signal<unknown>` cannot
 * become a `Signal<T>` natively (the two differ in layout), so the typed
 * side is this wrapper; reading `value` in `render()` tracks it like a
 * signal's.
 */
export class Prop    {
  sig                 ;

  constructor(sig                 ) {
    this.sig = sig;
  }

  get value()    {
    return this.sig.value     ;
  }

  set value(next   ) {
    this.sig.value = next;
  }

  peek()    {
    return this.sig.peek()     ;
  }
}

export class View extends ViewCore {
  box      ;
  $props                                     ;
  $defined         ;
  $slots             ;
  $projectQueued         ;

  constructor() {
    super();
    this.box = new TBox("view");
    this.box.owner = this;
    this.$props = null;
    this.$defined = false;
    this.$slots = [];
    this.$projectQueued = false;
  }

  get $node()          {
    return this.box;
  }

  get $label() {
    return this.box.tag;
  }

  $hook(name        , changedProps                             ) {
    const changed                       = changedProps === null ? new Map() : changedProps;
    switch (name) {
      case "connected":
        this.connected();
        return;
      case "disconnected":
        this.disconnected();
        return;
      case "willUpdate":
        this.willUpdate(changed);
        return;
      case "firstUpdated":
        this.firstUpdated(changed);
        return;
      default:
        this.updated(changed);
    }
  }

  connected() {}

  disconnected() {}

  willUpdate(_changed                      ) {}

  firstUpdated(_changed                      ) {}

  updated(_changed                      ) {}

  /**
   * Declare a prop, in a field initializer: `rows = this.prop("rows", []
   * as Task[])`. The host sets it by name from the element's attributes
   * and `.prop=` bindings, and `render()` reads `this.rows.value`. A name
   * is lowercase, as attributes are.
   */
  prop   (name        , initial   )          {
    if (name !== name.toLowerCase()) throw new Error("[tdom] prop \"" + name + "\": a prop's name is lowercase, as an attribute's is");
    if (this.$props === null) this.$props = new Map                         ();
    if (this.$props.has(name)) throw new Error("[tdom] prop \"" + name + "\" is declared twice");
    const sig = signal         (initial);
    this.$props.set(name, sig);
    return new Prop   (sig);
  }

  /**
   * Take a prop by name, as the host hands an attribute or a binding: a
   * string takes the type of the prop's current value when that is a
   * number or a boolean, a bare attribute on a string prop is "", anything
   * else lands as given. Answers false for an undeclared name.
   */
  $setProp(name        , value         )          {
    if (this.$props === null) return false;
    const sig = this.$props.get(name);
    if (sig === undefined) return false;
    const current = sig.peek();
    if (typeof value === "string" && typeof current === "number") sig.value = asNumber(name, value);
    else if (typeof value === "string" && typeof current === "boolean") sig.value = asBool(value);
    else if (value === true && typeof current === "string") sig.value = "";
    else sig.value = value;
    return true;
  }

  /**
   * Dispatch a CustomEvent from the view's box: a parent's `@type=` handler
   * receives it, and it bubbles on unless one consumes it. Answers the
   * event; `consumed` says a handler took it.
   */
  $emit(type        , detail         )              {
    const e = new CustomEvent(type, detail);
    this.box.dispatch(e);
    return e;
  }

  $render() {
    return this.render();
  }

  /** @returns the template to render into the box */
  render()          {
    return null;
  }

  $commit(value         ) {
    render(value, this.box, { host: this });
    this.$project();
  }

  /** Project the box's light units into the slots of what rendered. */
  $project() {
    this.$projectQueued = false;
    if (this.$slots.length > 0) projectSlots(this.box, this.$slots);
  }

  /** Project on the next microtask: for a slot that appears outside a commit, as one a thunk renders later. */
  $queueProject() {
    if (this.$projectQueued) return;
    this.$projectQueued = true;
    Promise.resolve().then(() => {
      if (this.$projectQueued) this.$project();
    });
  }

  dispose() {
    this.$detach();
    disposeTree(this.box);
  }
}

/**
 * Register a tag: a template writing `<tag>` gets a new instance of the
 * class, its box the element, disposed by the host when the element leaves
 * the tree. The tag is lowercase with a hyphen, and defined once. A view
 * the app constructs and places with `${view}` is the app's to dispose,
 * whether or not its class is defined.
 */
export const define = (tag        , cls                ) => {
  registerTag(new TagDefinition(tag, () => {
    const view = new cls();
    view.box.tag = tag;
    view.$defined = true;
    return view.box;
  }));
};

/**
 * Put a view's box at the end of `parent`; a connected parent attaches it.
 */
export const mount = (view      , parent          ) => {
  currentHost().insertBefore(parent, view.box, null);
};

/**
 * Take a view's box out of its parent, detaching the view; the content of
 * any defined element inside is dropped with it.
 */
export const unmount = (view      ) => {
  currentHost().remove(view.box);
};
