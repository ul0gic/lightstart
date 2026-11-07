                                                              

/**
 * URL-friendly slug from arbitrary text: lowercase, ASCII-folded,
 * non-alphanumerics collapsed to single hyphens.
 */
export const slugify = (str         )         => {
  if (!str || typeof str !== "string") return "";

  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .replace(/-+/g, "-");
};

const probeCandidate = (takenSlugs             , base        )         => {
  let candidate = base;
  let suffix = 0;
  while (takenSlugs.has(candidate)) {
    suffix++;
    candidate = `${base}-${suffix}`;
  }
  return candidate;
};

/**
 * Find a slug derived from `value` that isn't already taken in `model`
 * for `field`. Uses the store's `like` operator when its adapter has one,
 * otherwise probes candidates sequentially.
 */
export const generateUniqueSlug = async (
  store                                                                             ,
  model        ,
  field        ,
  value        ,
  excludeId          = null,
)                  => {
  const base = slugify(value);
  if (!base) return "";

  if (store.supportsOperator?.(model, "like")) {
    const taken = await store.getAll(model, { where: { [field]: { like: base } } });
    const slugRegex = new RegExp(`^${base}(-\\d+)?$`);
    const takenSlugs              = new Set(
      taken
        .filter((r) => r.id !== excludeId && slugRegex.test(r[field]          ))
        .map((r) => r[field]          ),
    );
    return probeCandidate(takenSlugs, base);
  }

  let candidate = base;
  let suffix = 0;
  while (true) {
    const existing = await store.getAll(model, { where: { [field]: candidate }, limit: 1 });

    if (!existing.length || existing[0].id === excludeId)
      return candidate;

    suffix++;
    candidate = `${base}-${suffix}`;
  }
};

/**
 * Convenience model hooks that auto-generate a slug from a source
 * field. Use in `$hooks` on the model schema.
 *
 *     export default {
 *       title: T.string({ required: true }),
 *       slug:  T.string(),
 *       $hooks: slugHooks("title", "slug"),
 *     };
 */
export const slugHooks = (sourceField = "name", slugField = "slug") => ({
  beforeAdd: async (data     , { model, store }             )               => {
    if (!data[slugField] && data[sourceField])
      data[slugField] = await generateUniqueSlug(
        store, model, slugField, data[sourceField]          ,
      );

    return data;
  },
  beforeEdit: async (data     , { model, store }             )               => {
    if (data[sourceField] && !data[slugField])
      data[slugField] = await generateUniqueSlug(
        store, model, slugField, data[sourceField]          , data.id,
      );

    return data;
  },
});

export default { slugify, generateUniqueSlug, slugHooks };
