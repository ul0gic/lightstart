/**
 * @bootstrapp/light/controller/class: a controller as a TypeScript class, the
 * form that compiles natively (`defineController`'s literal does not lower
 * from TypeScript). A subclass's signal fields are its props, a live query of
 * a model is `liveRows(this, model, build)` from `@bootstrapp/light/model/binder`
 * (its `sync:` block), `connected()` and `disconnected()` are its hooks, `$own`
 * keeps a teardown for `dispose()`, `$wait` names work `$ready` waits for, and
 * `$ready` settles once `start()` ran `connected()` and that work is done. A
 * base constructor runs before the subclass's fields exist, so `start()` is a
 * call of its own: the entry makes it, or the subclass's constructor does,
 * last.
 */
import { tracked } from "./config.js";
import { Teardowns } from "./teardowns.js";

export class Controller {
           $name        ;
  /** Settles once `start()` ran `connected()` and the work `$wait` named before it is done; a throw rejects it. */
  $ready               ;
                   owned = new Teardowns();
                   waiting                  = [];

  constructor(name        ) {
    this.$name = name;
    this.$ready = Promise.resolve();
  }

  /** Keep `teardown` (an unsubscribe, a dispose, a clearInterval closure) for `dispose()`; answers it, so it wraps a call inline. */
  $own                      (teardown   )    {
    this.owned.own(teardown);
    return teardown;
  }

  /** Work `$ready` waits for (a query's first load), named before `start()`. */
  $wait(work               )       {
    this.waiting.push(work);
  }

  /**
   * Runs once, from `start()`: answers the promise of the work it starts (an
   * async method's), which `$ready` waits for, or null. A plain method, not
   * an async one, since natively an async method cannot be overridden and an
   * override's signature matches the base's exactly.
   */
  connected()                       {
    return null;
  }

  /** Runs from `dispose()`, before the teardowns: the promise of the work it starts, or null. */
  disconnected()                       {
    return null;
  }

  /** Run `connected()` and settle `$ready` with it and the work named so far; answers `$ready`. */
  start()                {
    const pending                  = this.waiting.slice();
    const work = this.connected();
    if (work !== null) pending.push(work);
    this.$ready = tracked(Promise.all(pending).then(() => undefined), "controller:" + this.$name);
    return this.$ready;
  }

  /** `disconnected()`, then every teardown owned, the queries' included. */
  async dispose()                {
    try {
      const work = this.disconnected();
      if (work !== null) await work;
    } finally {
      this.owned.drain(this.$name);
    }
  }
}
