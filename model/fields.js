/**
 * How the model reads a record by a key named at run time. A key the record
 * may not hold is read as possibly undefined, which a native build needs to
 * answer `undefined` for it. A schema is a record of field descriptors and
 * `$` directives; its entries are read through its untyped view, so a native
 * build reads them the same way whether the schema was built in TypeScript
 * or in JavaScript.
 */

                                                          

/** `record[key]`, typed as possibly undefined. */
export const entryOf =    (record                   , key        )                => (key in record ? record[key] : undefined);

/** The entry `name` of `schema`: a field, a directive, or undefined. */
export const schemaEntry = (schema             , name        )          => {
  const view                          = schema;
  return view[name];
};

/** The field `name` of `schema`, or undefined. */
export const schemaField = (schema             , name        )                         =>
  schemaEntry(schema, name)                          ;

/** Visit each field of `schema` that holds a descriptor, in the schema's order; `$` directives are not fields. */
export const eachField = (schema                         , visit                                          )       => {
  if (!schema) return;
  for (const field of Object.keys(schema)) {
    if (field.startsWith("$")) continue;
    const def = schemaEntry(schema, field);
    if (def && typeof def === "object") visit(field, def              );
  }
};
