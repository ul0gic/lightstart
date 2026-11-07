import { entryOf, schemaField } from "./fields.js";

                                                               

/** A write the schema rejects; `errors` maps each failing field to its message. */
export class ValidationError extends Error {
                                         

  constructor(model        , errors                        ) {
    super(`Validation failed for "${model}": ${Object.values(errors).join("; ")}`);
    this.name = "ValidationError";
    this.errors = errors;
  }
}

const VALID_TYPES                                       = {
  string: ["string", "number"],
  number: ["number", "string"],
  boolean: ["boolean", "number", "string"],
  object: ["object"],
  array: ["array"],
  date: ["object", "number", "string"],
  datetime: ["object", "number", "string"],
};

const FORMATS                                     = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  url: /^https?:\/\/.+/,
};

/**
 * Validate a row against its schema: required fields (on add), value types,
 * the field's own `validator`, and `format`. Relation fields are validated as
 * the ids they are stored as.
 */
export function validateRow(models                             , modelName        , row     , options                                 = {})                                                     {
  const modelSchema = entryOf(models, modelName);
  if (!modelSchema) return { valid: false, errors: { _model: `Model "${modelName}" not found` } };

  const errors                         = {};

  for (const field of Object.keys(modelSchema)) {
    if (field.startsWith("$")) continue;
    const def = schemaField(modelSchema, field)              ;
    if (def.relationship && !def.belongs) continue;
    const value = row[field];
    const missing = value === undefined || value === null || value === "";

    if (def.required && missing && options.operation !== "edit") {
      errors[field] = `${field} is required`;
      continue;
    }

    if (value !== undefined && value !== null && def.$type) {
      const isFileBlob = def.fieldType === "file" && value instanceof Blob;
      const actualType = Array.isArray(value) ? "array" : typeof value;
      const accepted = VALID_TYPES[def.$type];
      if (!isFileBlob && accepted && !accepted.includes(actualType))
        errors[field] = `${field} must be of type ${def.$type}`;
    }

    const { validator, format } = def;
    if (validator && value !== undefined)
      if (typeof validator !== "function") errors[field] = `${field}.validator is not a function`;
      else
        try {
          if (!(validator                                             )(value, row)) errors[field] = `${field} failed custom validation`;
        } catch (e) {
          errors[field] = (e         ).message || `${field} validation error`;
        }

    const pattern = typeof format === "string" ? FORMATS[format] : undefined;
    if (pattern && value && !pattern.test(value          ))
      errors[field] = `${field} must be a valid ${format}`;
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
