/**
 * Eager loading of `includes` on the worker side. Reads go through a reader
 * (the store) so every adapter, remote or local, answers the same shape and
 * the loaded rows are plain objects.
 */

import { modelBus } from "./config.js";
import { MODEL_ERROR, MODEL_WARN } from "./events.js";
import { relationValueToId, relationWhere } from "./relationships.js";
import { entryOf, schemaEntry } from "./fields.js";
import { rowOf } from "./pipeline.js";

                                                                                      

/**
 * Enrich `record` with the relations listed in `includes`. An unknown name
 * warns and is skipped; a failed load emits `MODEL_ERROR` and leaves `[]` or
 * `null` per the relation's cardinality.
 */
export async function loadRelationships                     (reader   , models                             , modelName        , record     , includes          )               {
  if (includes.length === 0) return record;

  const modelSchema = entryOf(models, modelName);
  if (!modelSchema) {
    modelBus().emit(MODEL_WARN, { type: "model_not_found", model: modelName });
    return record;
  }

  const loaded                      = [];

  for (const relationName of includes) {
    const relationDef = schemaEntry(modelSchema, relationName)                                      ;

    if (!relationDef) {
      modelBus().emit(MODEL_WARN, { type: "relationship_not_found", model: modelName, relationship: relationName });
      continue;
    }

    if (!relationDef.relationship) {
      modelBus().emit(MODEL_WARN, { type: "not_a_relationship", model: modelName, field: relationName });
      continue;
    }

    try {
      loaded.push([relationName, await loadRelationship(reader, models, modelName, record, relationName, relationDef)]);
    } catch (error) {
      modelBus().emit(MODEL_ERROR, { type: "relationship_load_failed", model: modelName, relationship: relationName, error });
      loaded.push([relationName, relationDef.many ? [] : null]);
    }
  }

  return rowOf([...Object.entries(record), ...loaded]);
}

/**
 * Batch version of `loadRelationships`: a polymorphic `belongs` is resolved
 * with one query per target type instead of one per row.
 */
export async function loadRelationshipsForMany                     (reader   , models                             , modelName        , records       , includes          )                 {
  if (!includes || includes.length === 0 || !records || records.length === 0) return records;

  const modelSchema = entryOf(models, modelName);
  if (!modelSchema) return records;

  const polymorphicIncludes           = [];
  const regularIncludes           = [];

  for (const relationName of includes) {
    const relationDef = schemaEntry(modelSchema, relationName)                                      ;
    if (relationDef?.polymorphic && relationDef?.relationship === "belongs") polymorphicIncludes.push(relationName);
    else regularIncludes.push(relationName);
  }

  let enriched        = records.map((r)      => rowOf(Object.entries(r)));

  if (regularIncludes.length > 0) {
    const loads                 = [];
    for (const record of enriched) loads.push(loadRelationships(reader, models, modelName, record, regularIncludes));
    enriched = await Promise.all(loads);
  }

  for (const relationName of polymorphicIncludes) {
    const typeFieldName = `${relationName}Type`;
    const found                 = [];
    for (let i = 0; i < enriched.length; i++) found.push(null);
    const byType = new Map                               ();
    for (let i = 0; i < enriched.length; i++) {
      const record = enriched[i];
      const contentType = record[typeFieldName]                      ;
      const contentId = relationValueToId(record[relationName]);
      if (!contentType || !contentId || !entryOf(models, contentType)) continue;
      let holders = byType.get(contentType);
      if (holders === undefined) {
        holders = new Map                  ();
        byType.set(contentType, holders);
      }
      const key = String(contentId);
      const at = holders.get(key);
      if (at === undefined) holders.set(key, [i]);
      else at.push(i);
    }

    await Promise.all(
      [...byType.entries()].map(async ([type, holders]) => {
        const related = await reader.getAll(type, { where: { id: { in: [...holders.keys()] } } });
        for (const row of related) for (const i of holders.get(String(row.id)) ?? []) found[i] = row;
      }),
    );

    enriched = enriched.map((record, i)      => {
      const hit                    = [relationName, found[i]];
      return rowOf([...Object.entries(record), hit]);
    });
  }

  return enriched;
}

async function loadRelationship                     (reader   , models                             , modelName        , record     , relationName        , relationDef                        )                              {
  const { relationship, targetModel, many, polymorphic } = relationDef;

  if (relationship === "belongs" && polymorphic) {
    const foreignKeyValue = relationValueToId(record[relationName]);
    if (!foreignKeyValue) return null;

    const typeFieldName = `${relationName}Type`;
    const contentType = record[typeFieldName]                      ;

    if (!contentType) {
      modelBus().emit(MODEL_WARN, { type: "polymorphic_type_missing", model: modelName, field: relationName, typeField: typeFieldName });
      return null;
    }

    if (!entryOf(models, contentType)) {
      modelBus().emit(MODEL_WARN, { type: "polymorphic_model_not_found", model: modelName, field: relationName, targetModel: contentType });
      return null;
    }

    return reader.get(contentType, foreignKeyValue                   );
  }

  const target = targetModel          ;

  if (relationship === "belongs") {
    const foreignKeyValue = relationValueToId(record[relationName]);
    if (!foreignKeyValue) return null;
    return reader.get(target, foreignKeyValue                   );
  }

  if (relationship === "belongs_many") {
    const foreignKeyValues = record[relationName];
    if (!Array.isArray(foreignKeyValues) || foreignKeyValues.length === 0) return [];
    return reader.getAll(target, { where: { id: { in: foreignKeyValues.map(relationValueToId) } } });
  }

  if (relationship === "many")
    return reader.getAll(target, { where: relationWhere(modelName, record, relationDef) });

  if (relationship === "one") {
    const related = await reader.getAll(target, { where: relationWhere(modelName, record, relationDef), limit: 1 });
    return related[0] ?? null;
  }

  modelBus().emit(MODEL_WARN, { type: "unknown_relationship_type", relationship: relationDef.relationship });
  const none        = [];
  return many ? none : null;
}
