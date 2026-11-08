/**
 * @lightstart/light/native/tui/classes: the `class` attribute on the terminal. An
 * element's classes are inert until the app configures a styler
 * (`configureClasses`), the host's half of the utility classes: the styler
 * answers the props a class string means and the element takes them, under
 * the ones the template wrote itself. A prop the template writes with any
 * value is the template's, whatever the attribute order, and classes never
 * touch it; a removal hands it back to the classes; a class list that stops
 * implying a prop resets it to its default. Two bitmasks on the element keep
 * the books, one bit per prop name. A prop may be conditioned on the
 * element's state (`focus:`, `focus-within:`): it applies while the element
 * has every state bit it names, and the element's classes are applied again
 * whenever its state changes.
 */
import type { PropValue, TElement } from "./node.js";
/** The element has the focus. */
export declare const STATE_FOCUS = 1;
/** The element or one of its descendants has the focus. */
export declare const STATE_FOCUS_WITHIN = 2;
/**
 * One prop a class string means: the prop's template name, its value and the
 * state bits the element must have for it to apply (0 for always).
 */
export declare class ClassProp {
    name: string;
    value: PropValue;
    state: number;
    constructor(name: string, value: PropValue, state: number);
}
/**
 * What turns a class string into props. A host's styler subclasses it and
 * answers `propsFor`; `apply` is the engine's side, the bookkeeping.
 */
export declare class ClassStyler {
    propsFor(_classes: string): ClassProp[];
    apply(el: TElement, classes: string): void;
}
/** Install the styler every element's `class` goes through, or null to make `class` inert again. */
export declare const configureClasses: (next: ClassStyler | null) => void;
/** The installed styler, or null. */
export declare const classStyler: () => ClassStyler | null;
/** The bit of a prop name in an element's masks; 0 for a name that is not a prop. */
export declare const propBit: (name: string) => number;
/**
 * Give an element the props its classes mean in its current state, later
 * ones over earlier ones, skipping the ones the template wrote, and reset
 * the props its previous classes meant and these do not.
 */
export declare const applyClassProps: (el: TElement, props: ClassProp[]) => void;
/** An element's `class` attribute changed: hand it to the styler, a removal as an empty list. */
export declare const applyClasses: (el: TElement, v: PropValue) => void;
/** Apply an element's classes again, after something they depend on changed. */
export declare const reapplyClasses: (el: TElement) => void;
/** Give an element its state bits; its classes follow when they changed. */
export declare const setStates: (el: TElement, states: number) => void;
/**
 * The template wrote a prop (`on`) or removed it: record it, and on a
 * removal let the classes have the prop again.
 */
export declare const markExplicit: (el: TElement, name: string, on: boolean) => void;
