/**
 * @bootstrapp/model: relationship arithmetic shared by the frontend
 * (`include()`, live includes) and the worker-side loader, so both sides
 * agree on the one foreign-key convention: `targetForeignKey`, else
 * `${modelName}Id`.
 */

                                                              

export const foreignKeyFor = (modelName        , rel                        )         => rel.targetForeignKey || `${modelName}Id`;

/**
 * The `where` that selects the rows a `many`/`one` relation points at,
 * including the polymorphic `as` form (`{ [as]: id, [asType]: model }`).
 */
export const relationWhere = (modelName        , row     , rel                        )                          => {
  const entries                      = rel.as ? [[rel.as, row.id], [`${rel.as}Type`, modelName]] : [[foreignKeyFor(modelName, rel), row.id]];
  return Object.fromEntries(entries);
};

/**
 * A `belongs` field holds an id, or the loaded row once included; either
 * way this answers the id.
 */
export const relationValueToId = (value         )          =>
  value && typeof value === "object" && "id" in value ? value.id : value;

/**
 * The model a relation resolves to for one row: the declared target, or
 * the row's `<name>Type` column for a polymorphic `belongs`.
 */
export const relationTarget = (row     , name        , rel                        )                     =>
  rel.polymorphic && rel.belongs
    ? (row[`${name}Type`]                      )
    : (rel.targetModel          );
