/**
 * Live change fan-out on one runtime: `onChange(model, where, cb)` runs `cb`
 * for every `modelChanged` event on `model` whose row matches `where` (a
 * removal always matches, so a holder can drop the row, and so does a `sync`,
 * which carries no row and means the whole collection changed). One listener
 * on `modelChanged`, installed on first use; a host that runs the store
 * elsewhere (a worker) emits its changes on `modelChanged` here.
 */

import { modelChanged, modelError } from "./events.js";
import { compileMatcher } from "./query-builder.js";

                                                                                                   

const subscribers                                     = new Map();
let listening = false;

const dispatch = (event              )       => {
  const set = subscribers.get(event.model);
  if (!set) return;
  for (const { match, cb } of [...set])
    if (event.action === "remove" || event.action === "sync" || match(event.row       ))
      try {
        cb(event);
      } catch (error) {
        modelError.emit({ type: "change_callback_failed", model: event.model, error });
      }
};

const install = ()       => {
  if (listening) return;
  listening = true;
  modelChanged.on(dispatch);
};

/** Run `cb` for every change on `model` whose row matches `where`; the answer stops it. */
export const onChange = (model        , where                         , cb                )               => {
  install();
  const entry                   = { match: compileMatcher(where), cb };
  let set = subscribers.get(model);
  if (!set) subscribers.set(model, (set = new Set()));
  set.add(entry);
  return () => {
    set.delete(entry);
    if (set.size === 0) subscribers.delete(model);
  };
};
