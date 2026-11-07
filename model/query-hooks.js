/**
 * Query hooks: how a package shapes every `getAll` before it leaves the
 * tab. A hook receives `{ model, schema, opts }` and answers the options
 * to use (or nothing to keep them); the hooks registered when a query
 * starts run once each, in registration order. `@bootstrapp/i18n` scopes
 * `$i18n` models to the active locale this way.
 */

                                                                            

const hooks              = [];

/** Register a hook; the answer unregisters it. */
export const registerQueryHook = (fn           )               => {
  if (!hooks.includes(fn)) hooks.push(fn);
  return () => {
    const at = hooks.indexOf(fn);
    if (at >= 0) hooks.splice(at, 1);
  };
};

export const applyQueryHooks = (ctx                  )               => {
  let opts = ctx.opts;
  for (const fn of [...hooks]) opts = fn({ ...ctx, opts }) ?? opts;
  return opts;
};

export const clearQueryHooks = ()       => { hooks.splice(0); };
