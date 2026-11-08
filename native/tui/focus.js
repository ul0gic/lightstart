/**
 * @lightstart/light/native/tui/focus: where the pointer lands and where the
 * focus goes. A hit test walks the laid-out tree to the deepest visible
 * element under a cell, clipped by every box on the way; the focus order
 * is the document order of the focusable elements: inputs, buttons, and
 * any element with a `tabindex` attribute or a click handler, unless
 * disabled. When the focus moves, the elements that lose and take it, and
 * their ancestors, change the states their classes may depend on.
 */
import { STATE_FOCUS, STATE_FOCUS_WITHIN, reapplyClasses } from "./classes.js";
import { TAnchor, TBox, TElement, TInput, TNode, TRun } from "./node.js";

const contains = (el          , x        , y        ) => x >= el.x && x < el.x + el.w && y >= el.y && y < el.y + el.h;

/**
 * The deepest visible element under the cell (x, y), or null when nothing
 * laid out covers it. A box clips its children to its inner rectangle.
 */
export const hitTest = (node       , x        , y        )                  => {
  if (node instanceof TAnchor || node instanceof TRun) return null;
  if (!(node instanceof TElement)) return null;
  if (node.hidden || !contains(node, x, y)) return null;
  if (node instanceof TBox) {
    const pad = node.padding + (node.border ? 1 : 0);
    const inside = x >= node.x + pad && x < node.x + node.w - pad && y >= node.y + pad && y < node.y + node.h - pad;
    if (inside)
      for (let c = node.lastChild; c !== null; c = c.prev) {
        const hit = hitTest(c, x, y);
        if (hit !== null) return hit;
      }
  }
  return node;
};

export const isFocusable = (el          ) => {
  if (el.hidden || el.attrs.has("disabled")) return false;
  if (el instanceof TInput || el.tag === "button" || el.attrs.has("tabindex")) return true;
  for (const entry of el.handlers) if (entry.name === "click") return true;
  return false;
};

/**
 * The focusable elements under `node` in document order, hidden subtrees skipped.
 */
export const focusables = (node       , out            ) => {
  if (!(node instanceof TElement) || node.hidden) return out;
  if (isFocusable(node)) out.push(node);
  for (let c = node.firstChild; c !== null; c = c.next) focusables(c, out);
  return out;
};

/**
 * The focusable element `delta` steps (1 or -1) after `current` in document
 * order, wrapping around; the first or last when nothing is focused.
 */
export const nextFocusable = (root          , current                 , delta        )                  => {
  const list = focusables(root, []);
  if (list.length === 0) return null;
  const at = current === null ? -1 : list.indexOf(current);
  if (at < 0) return delta > 0 ? list[0] : list[list.length - 1];
  return list[(at + delta + list.length) % list.length];
};

/** Clear the `focus` and `focus-within` states down the one path under `el` that has them. */
const dropFocusStates = (el          , touched            ) => {
  el.states &= ~(STATE_FOCUS | STATE_FOCUS_WITHIN);
  touched.push(el);
  for (let c = el.firstChild; c !== null; c = c.next) if (c instanceof TElement && (c.states & STATE_FOCUS_WITHIN) !== 0) dropFocusStates(c, touched);
};

/**
 * The focus moved from `prev` to `next` under `root`: the path that held the
 * `focus-within` state loses it with the `focus` state at its end (walked
 * down from the root, and up from `prev` when it has left the tree), `next`
 * takes `focus` and, with its ancestors, `focus-within`; every element
 * touched applies its classes again.
 */
export const focusStates = (root          , prev                 , next                 ) => {
  const touched             = [];
  if ((root.states & STATE_FOCUS_WITHIN) !== 0) dropFocusStates(root, touched);
  for (let n                  = prev; n !== null; n = n.parent) if (touched.indexOf(n) < 0) dropFocusStates(n, touched);
  for (let n                  = next; n !== null; n = n.parent) {
    n.states |= n === next ? STATE_FOCUS | STATE_FOCUS_WITHIN : STATE_FOCUS_WITHIN;
    if (touched.indexOf(n) < 0) touched.push(n);
  }
  for (const el of touched) reapplyClasses(el);
};

/**
 * The nearest scrolling box at or above `el`, or null.
 */
export const scrollBoxOf = (el                 )              => {
  let n                  = el;
  while (n !== null) {
    if (n instanceof TBox && n.scroll) return n;
    n = n.parent;
  }
  return null;
};
