/**
 * @bootstrapp/light/theme/baked: the utility classes on a host from a table
 * baked ahead of time. `light classes:bake` compiles the class strings an
 * app's templates write through the engine once, under node, into entries of
 * `[classString, [name, value, state][]]` per scheme, and `BakedClasses`
 * answers them at run time by lookup, with no engine in the binary. The
 * keys are the exact strings the templates write; a string the table lacks
 * styles nothing and lands in `ignored`, token by token, which a test
 * asserting the set empty turns into a stale-table detector.
 */
import { ClassProp, ClassStyler } from "../native/tui/classes.js";

                                                       

/** One prop a class string means: the prop's name, its value and the state bits it needs (0 for always). */
                                                    

/** A class string, as a template writes it, with the props it means. */
                                               

export class BakedClasses extends ClassStyler {
  table                          ;
  /** The tokens of every class string the table lacked. */
  ignored             ;

  constructor(entries              ) {
    super();
    this.table = new Map                     ();
    this.ignored = new Set        ();
    for (const [classes, props] of entries) {
      const list              = [];
      for (const [name, value, state] of props) list.push(new ClassProp(name, value, state));
      this.table.set(classes, list);
    }
  }

           propsFor(classes        )              {
    const hit = this.table.get(classes);
    if (hit !== undefined) return hit;
    for (const token of classes.split(/\s+/)) if (token.length > 0) this.ignored.add(token);
    return [];
  }
}
