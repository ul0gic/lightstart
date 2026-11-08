/**
 * @lightstart/light/theme/baked: the utility classes on a host from a table
 * baked ahead of time. `light classes:bake` compiles the class strings an
 * app's templates write through the engine once, under node, into entries of
 * `[classString, [name, value, state][]]` per scheme, and `BakedClasses`
 * answers them at run time by lookup, with no engine in the binary. The
 * keys are the exact strings the templates write; a string the table lacks
 * styles nothing and lands in `ignored`, token by token, which a test
 * asserting the set empty turns into a stale-table detector.
 */
import { ClassProp, ClassStyler } from "../native/tui/classes.js";
import type { PropValue } from "../native/tui/node.js";
/** One prop a class string means: the prop's name, its value and the state bits it needs (0 for always). */
export type BakedProp = [string, PropValue, number];
/** A class string, as a template writes it, with the props it means. */
export type BakedEntry = [string, BakedProp[]];
export declare class BakedClasses extends ClassStyler {
    table: Map<string, ClassProp[]>;
    /** The tokens of every class string the table lacked. */
    ignored: Set<string>;
    constructor(entries: BakedEntry[]);
    propsFor(classes: string): ClassProp[];
}
