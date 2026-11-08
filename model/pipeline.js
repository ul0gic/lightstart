/**
 * @lightstart/light/model/pipeline: the synchronous steps of a model write,
 * shared by the store (which runs them between its async hooks, uploads and
 * adapter calls) and by a writer over a synchronous database, which runs the
 * whole pipeline inside one transaction. A row is copied, never changed.
 */

import { newId } from "./config.js";
import { eachField, schemaField } from "./fields.js";
import { relationValueToId } from "./relationships.js";
import { ValidationError, validateRow } from "./validate.js";

                                                               

/** A row as an adapter stores it: a `many`/`one` value dropped, a loaded `belongs` row reduced to its id. */
export const forStorage = (schema                         , row     )      => {
  const relations = new Map                    ();
  eachField(schema, (field, def) => {
    if (def.relationship) relations.set(field, def);
  });
  if (relations.size === 0) return row;
  return Object.fromEntries(Object.entries(row).flatMap(([field, value])                      => {
    const def = relations.get(field);
    if (def === undefined) return [[field, value]];
    if (!def.belongs) return [];
    if (value === undefined) return [[field, value]];
    return [[field, def.relationship === "belongs_many" && Array.isArray(value) ? value.map(relationValueToId) : relationValueToId(value)]];
  }));
};

/** The row with every absent field that declares a default filled in; a function default is called, an object one cloned. */
export const withDefaults = (schema                         , row     )      => {
  const filled                      = [];
  eachField(schema, (field, def) => {
    if (row[field] !== undefined || def.defaultValue === undefined) return;
    if (def.relationship && !def.belongs) return;
    const value = def.defaultValue;
    filled.push([field, typeof value === "function" ? (value                 )() : value && typeof value === "object" ? structuredClone(value) : value]);
  });
  return filled.length === 0 ? row : Object.fromEntries([...Object.entries(row), ...filled]);
};

/** The patch without the fields the schema marks `immutable` (an `id` stays). */
export const withoutImmutable = (schema                         , patch     )      => {
  const immutable = new Set        ();
  eachField(schema, (field, def) => {
    if (def.immutable && field !== "id") immutable.add(field);
  });
  return immutable.size === 0 ? patch : Object.fromEntries(Object.entries(patch).filter(([field]) => !immutable.has(field)));
};

/** Whether `schema` declares a numeric id, which the database assigns when a row has none. */
export const numericIdOf = (schema                         )          => (schema ? schemaField(schema, "id") : undefined)?.$type === "number";

/** The row with an id: its own, else `next()` when the adapter makes ids, else a fresh one unless the id is numeric. */
export const withId = (schema                         , row     , next                                 = null)      => {
  if (row.id !== undefined && row.id !== null) return row;
  if (next !== null) return Object.fromEntries([...Object.entries(row), ["id", next()]]);
  if (numericIdOf(schema)) return row;
  return Object.fromEntries([...Object.entries(row), ["id", newId()]]);
};

/** The row an add stores, after its before hook and its id: relations reduced, defaults filled, validated. */
export const prepareAddRow = (models                             , model        , row     )      => {
  const schema = model in models ? models[model] : undefined;
  const stored = withDefaults(schema, forStorage(schema, row));
  const { valid, errors } = validateRow(models, model, stored, { operation: "add" });
  if (!valid) throw new ValidationError(model, errors);
  return stored;
};

/** The row an edit stores: `changes` (after the before hook) merged over `current`, relations reduced, validated. */
export const prepareEditRow = (models                             , model        , current     , changes     , id                 )      => {
  const schema = model in models ? models[model] : undefined;
  const row = forStorage(schema, Object.fromEntries([...Object.entries(current), ...Object.entries(changes), ["id", id]]));
  const { valid, errors } = validateRow(models, model, row, { operation: "edit" });
  if (!valid) throw new ValidationError(model, errors);
  return row;
};
