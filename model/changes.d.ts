/**
 * Live change fan-out on one runtime: `onChange(model, where, cb)` runs `cb`
 * for every `model:changed` event on `model` whose row matches `where` (a
 * removal always matches, so a holder can drop the row, and so does a `sync`,
 * which carries no row and means the whole collection changed). One listener
 * on the model's bus, installed on first use and moved when the host hands the
 * model another bus; a host that runs the store elsewhere (a worker) forwards
 * its `model:changed` onto that bus.
 */
import type { ChangeCallback, WhereClause } from "./types.js";
/** Run `cb` for every change on `model` whose row matches `where`; the answer stops it. */
export declare const onChange: (model: string, where: WhereClause | undefined, cb: ChangeCallback) => (() => void);
