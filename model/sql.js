/**
 * @lightstart/light/model/sql: a storage adapter over one synchronous SQLite
 * database. The model schema is the table definition; the SQL builder turns
 * reads and writes into parameterized statements, and JSON and boolean
 * fields cross as SQLite text and integers. The database is injected, so the
 * same adapter runs over `@lightstart/sqlite/node`, the native driver, D1 or
 * Durable Objects. Importing it registers nothing: `registerStorageAdapter("sql",
 * SqlAdapter)`, then `createAdapter("sql", { name, db, models })`; `openSql`
 * does both for a process that holds its own models and store.
 */

import { configureModel, modelBus } from "./config.js";
import { MODEL_CHANGED } from "./events.js";
import { createAdapter, hasAdapter, registerStorageAdapter } from "./factory.js";
import { needsUpload } from "./file-storage.js";
import { forStorage, prepareAddRow, prepareEditRow, withId, withoutImmutable } from "./pipeline.js";
import { buildQueryResult, validateQueryOptions } from "./query-builder.js";
import { createStore, storeRequest } from "./store.js";
import {
  applySchema, buildCountSQL, buildDeleteSQL, buildInsertSQL, buildSelectSQL, buildUpdateSQL, buildWhereClause,
  getArrayFields, getBooleanFields, getJsonFields, quoteIdent,
} from "./sql-builder.js";

                                                      
                                                                                                                                                                 

const OPERATORS           = [">", ">=", "<", "<=", "!=", "<>", "=", "in", "not in", "has", "has all", "like", "ilike", "is null", "is not null"];

/** The adapter as `createAdapter("sql", { name, db, models })` makes it. */
                                           
                  
                                      
  

const copy = (row     )      => ({ ...Object.fromEntries(Object.entries(row)) });

/** What a schema stores as JSON text, as SQLite's 1 or 0, and as a JSON array. */
class FieldSets {
           json             ;
           booleans             ;
           arrays             ;

  constructor(schema                         ) {
    this.json = getJsonFields(schema);
    this.booleans = getBooleanFields(schema);
    this.arrays = getArrayFields(schema);
  }
}

const NO_FIELDS = new FieldSets(undefined);
const fieldSets = new Map                        ();

/** The field sets of `schema`, worked out once per schema object. */
const setsOf = (schema                         )            => {
  if (schema === undefined) return NO_FIELDS;
  const known = fieldSets.get(schema);
  if (known !== undefined) return known;
  const found = new FieldSets(schema);
  fieldSets.set(schema, found);
  return found;
};

/** The array fields of `schema`, for `buildWhereClause` and the select and count builders. */
export const arrayFieldsOf = (schema                         )              => setsOf(schema).arrays;

/** Decode one stored row: JSON text back to its value, booleans back to true or false. */
export const decodeRow = (schema                         , row     )      => {
  const { json, booleans } = setsOf(schema);
  if (json.size === 0 && booleans.size === 0) return row;
  const entries = Object.entries(row).map(([field, value])                    => {
    if (json.has(field) && typeof value === "string" && value !== "") return [field, JSON.parse(value)];
    if (booleans.has(field) && value !== null && value !== undefined) return [field, Boolean(Number(value))];
    return [field, value];
  });
  return { ...Object.fromEntries(entries) };
};

const selectOne = (db             , model        , id                 , schema                         )             => {
  const query = buildSelectSQL(model, { where: { id } });
  const row = db.prepare(query.sql).get(query.params);
  return row === null ? null : decodeRow(schema, row);
};

const insertRow = (db             , schema                         , model        , row     )      => {
  const query = buildInsertSQL(model, row, getJsonFields(schema));
  const rows = JSON.parse(db.prepare(`${query.sql} RETURNING *`).json(query.params))         ;
  return rows.length === 0 ? copy(row) : decodeRow(schema, rows[0] );
};

const updateRow = (db             , schema                         , model        , id                 , data     )             => {
  const query = buildUpdateSQL(model, id, data, getJsonFields(schema));
  const rows = JSON.parse(db.prepare(`${query.sql} RETURNING *`).json(query.params))         ;
  return rows.length === 0 ? null : decodeRow(schema, rows[0] );
};

const deleteRow = (db             , model        , id                 )          => {
  const query = buildDeleteSQL(model, id);
  return db.prepare(query.sql).run(query.params).changes > 0;
};

const whereCount = (db             , model        , schema                         , where                         )         => {
  const query = buildCountSQL(model, { where, arrays: arrayFieldsOf(schema) });
  return Number(db.prepare(query.sql).get(query.params)?.["count"] ?? 0);
};

/** The SQL adapter object; its state is the injected database and the models it holds. */
const SqlAdapter                 = {
  async init(                )                {
    applySchema(this.db, this.models ?? {});
  },

  async get(                  model        , id                 )                      {
    return selectOne(this.db, model, id, this.models[model]);
  },

  async query(                  model        , given                          )                     {
    const options               = given === undefined ? {} : given;
    validateQueryOptions(options);
    const schema = this.models[model];
    if (options.groupBy !== undefined) {
      const all = buildSelectSQL(model, { where: options.where, order: options.order, arrays: arrayFieldsOf(schema) });
      const rows = this.db.prepare(all.sql).all(all.params).map((row) => decodeRow(schema, row));
      const result = buildQueryResult(rows, options);
      return { rows: result.items, total: result.total };
    }
    let fields = options.fields;
    if (fields !== undefined && !fields.includes("id")) {
      const named           = [];
      for (const field of fields) named.push(String(field));
      named.push("id");
      fields = named;
    }
    const query = buildSelectSQL(model, { where: options.where, order: options.order, limit: options.limit, offset: options.offset, fields, arrays: arrayFieldsOf(schema) });
    const rows = this.db.prepare(query.sql).all(query.params).map((row) => decodeRow(schema, row));
    const total = options.total === false ? rows.length : whereCount(this.db, model, schema, options.where);
    return { rows, total };
  },

  async insertMany(                  model        , rows       )                 {
    const stored        = [];
    this.db.transaction(() => {
      for (const row of rows) stored.push(insertRow(this.db, this.models[model], model, row));
      return 0;
    });
    return stored;
  },

  async insert(                  model        , row     )               {
    return insertRow(this.db, this.models[model], model, row);
  },

  async update(                  model        , row     , options               )               {
    const id = row.id                   ;
    return updateRow(this.db, this.models[model], model, id, options?.patch ?? row) ?? copy(row);
  },

  async delete(                  model        , id                 )                   {
    return deleteRow(this.db, model, id);
  },

  async count(                  model        , where                         )                  {
    return whereCount(this.db, model, this.models[model], where);
  },

  async exists(                  model        , where                         )                   {
    const clause = buildWhereClause(where, arrayFieldsOf(this.models[model]));
    const sql = `SELECT EXISTS(SELECT 1 FROM ${quoteIdent(model)}${clause.sql === "" ? "" : ` WHERE ${clause.sql}`}) AS found`;
    return Number(this.db.prepare(sql).get(clause.params)?.["found"] ?? 0) === 1;
  },

  async truncate(                  model        )                {
    this.db.exec(`DELETE FROM ${quoteIdent(model)}`);
  },

  async close(                )                {
    this.db.close();
  },

  supportsOperator(operator        )          {
    return OPERATORS.includes(operator);
  },
};

export default SqlAdapter;

/** What a synchronous write takes besides its row. */
                                   
                                                                  
                 
                                                                                                                                       
                            
                                                                                                                          
                                     
                                                                                  
                       
 

/** What a `SqlWriter` writes through: the database, the schemas, the store its hooks see, and where `model:changed` goes. */
                                  
                  
                                      
               
                                                            
 

const runNow = (work            )       => {
  work();
};

/**
 * The store's write pipeline, synchronous, over one SQLite database: the
 * before hook, the id, relations reduced, defaults, validation, the write,
 * then `model:changed` and the after hook. It runs inside a caller's
 * transaction, so a hook must answer at once (a promise is refused), and a
 * row whose file would be uploaded is refused too; the async store does both.
 * The SQL adapter's reads see what it writes, since both use one database.
 */
export class SqlWriter {
           db             ;
           models                             ;
           store       ;
                   schemas                          ;
                   announce                                                 ;

  constructor(config                 ) {
    this.db = config.db;
    this.models = config.models;
    this.store = config.store;
    this.schemas = new Map(Object.entries(config.models));
    this.announce = config.changes ?? null;
  }

          schemaOf(model        )              {
    const schema = this.schemas.get(model);
    if (schema === undefined) throw new Error(`no model "${model}"`);
    return schema;
  }

          hook(model        , name                  , row            , ctx             )          {
    const fn = this.schemaOf(model).$hooks?.[name];
    if (fn === undefined || fn === null) return undefined;
    if (typeof fn !== "function") throw new TypeError(`$hooks.${name} is not a function`);
    const out          = (fn                                                  )(row, ctx);
    if (out !== null && typeof out === "object" && typeof (out                      ).then === "function") throw new Error(`$hooks.${name} of "${model}" must answer at once in a synchronous write`);
    return out;
  }

          context(model        , operation                          , id         , user         )              {
    const ctx              = { model, store: this.store, operation };
    if (id !== undefined) ctx.id = id;
    if (user !== undefined) ctx.user = user;
    return ctx;
  }

          changed(model        , action                           , row     )       {
    const announce = this.announce;
    if (announce !== null) announce(MODEL_CHANGED, { model, action, row });
  }

  /** The stored row, decoded, or null. */
  get(model        , id                 )             {
    return selectOne(this.db, model, id, this.schemaOf(model));
  }

  add(model        , data     , options                   = {})      {
    const schema = this.schemaOf(model);
    const ctx = this.context(model, "add", undefined, options.user);
    const hooked = this.hook(model, "beforeAdd", copy(data), ctx);
    let row = hooked === undefined || hooked === null ? copy(data) : (hooked       );
    if (options.shape !== undefined) row = options.shape(row);
    row = prepareAddRow(this.models, model, withId(schema, row));
    if (needsUpload(schema, row)) throw new Error(`"${model}" has a file to upload, which a synchronous write cannot wait for`);
    const stored = insertRow(this.db, schema, model, row);
    const defer = options.defer ?? runNow;
    defer(() => this.changed(model, "add", stored));
    defer(() => { this.hook(model, "afterAdd", stored, ctx); });
    return stored;
  }

  edit(model        , id                 , patch     , options                   = {})      {
    const schema = this.schemaOf(model);
    const ctx = this.context(model, "edit", id, options.user);
    const reduced = forStorage(schema, withoutImmutable(schema, patch));
    const entries                           = [...Object.entries(reduced), ["id", id]];
    const asked      = { ...Object.fromEntries(entries) };
    const hooked = this.hook(model, "beforeEdit", asked, ctx);
    let changes = hooked === undefined || hooked === null ? asked : (hooked       );
    if (options.shape !== undefined) changes = options.shape(changes);
    const current = options.current ?? this.get(model, id);
    if (current === null) throw new Error(`Record ${id} not found in model "${model}"`);
    const row = prepareEditRow(this.models, model, current, changes, id);
    if (needsUpload(schema, row)) throw new Error(`"${model}" has a file to upload, which a synchronous write cannot wait for`);
    const patchOnly = Object.fromEntries(Object.entries(changes).filter(([field]) => field !== "id"));
    const stored = updateRow(this.db, schema, model, id, patchOnly) ?? row;
    const defer = options.defer ?? runNow;
    defer(() => this.changed(model, "edit", stored));
    defer(() => { this.hook(model, "afterEdit", stored, ctx); });
    return stored;
  }

  /** Remove a row; false when it was not there or `beforeRemove` answered false. */
  remove(model        , id                 , options                   = {})          {
    const schema = this.schemaOf(model);
    const ctx = this.context(model, "remove", id, options.user);
    const hooks = schema.$hooks;
    const current = options.current !== undefined ? options.current : hooks?.beforeRemove || hooks?.afterRemove ? this.get(model, id) : null;
    if (this.hook(model, "beforeRemove", current, ctx) === false) return false;
    if (!deleteRow(this.db, model, id)) return false;
    const defer = options.defer ?? runNow;
    defer(() => this.changed(model, "remove", current ?? { id }));
    defer(() => { this.hook(model, "afterRemove", current, ctx); });
    return true;
  }
}

/** What `openSql` takes: the database's name, the driver, and the models it holds. */
                          
               
                  
                                       
 

/**
 * The store of a process that holds its own models, over one SQLite database:
 * the adapter registered once, opened on `db`, a store over the models'
 * schemas with the model bus as its emitter, and the store's request as what
 * every model call goes through from here on. Answers the store.
 */
export const openSql = async ({ name, db, models }         )                 => {
  if (!hasAdapter("sql")) registerStorageAdapter("sql", SqlAdapter);
  const schemas = Object.fromEntries(models.map((model)                        => [model.name, model.schema]));
  const adapter = createAdapter("sql", { name, db, models: schemas });
  await adapter.init();
  const store = createStore({
    models: schemas,
    databases: { sql: adapter },
    defaultAdapter: "sql",
    emit: (event, data) => modelBus().emit(event, data),
  });
  configureModel({ request: storeRequest(store) });
  return store;
};
