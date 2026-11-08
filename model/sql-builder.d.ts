/**
 * @lightstart/light/model/sql-builder: model schemas as SQLite SQL. Every
 * identifier that reaches a statement is a bare name, checked here; every
 * value is a bound parameter. The same generator serves a local SQLite file
 * and Cloudflare D1, so one schema answers one table on either.
 */
import type { SqlDatabase } from "@lightstart/sqlite";
import type { ModelSchema, OrderSpec } from "./types.js";
/** One composite index, as an authored schema carries it in `$indexes`. */
export interface SqlIndexDefinition {
    fields: string | string[];
    unique?: boolean;
    name?: string;
}
/** A statement and its bound values. */
export interface SqlQuery {
    sql: string;
    params: unknown[];
}
/** A schema as the generator reads it: a field name to its descriptor, `$` keys included. */
export type SqlSchema = Record<string, unknown>;
/** What a read may pass, including the nulls a D1 caller sends for an absent option. */
export interface SqlQueryOptions {
    where?: Record<string, unknown> | null;
    order?: string | OrderSpec[] | null;
    limit?: number | null;
    offset?: number | null;
    fields?: string[] | null;
    groupBy?: string;
    total?: boolean;
    /** The model's array fields, where `in` and `not in` mean intersects and disjoint; every other field compares as a scalar, through its index. */
    arrays?: Set<string> | null;
    [extra: string]: unknown;
}
/** A bare column or table name, quoted only when it is a SQLite keyword. */
export declare function quoteIdent(name: string): string;
/** The fields whose value is written as JSON text. */
export declare function getJsonFields(schema: SqlSchema | undefined): Set<string>;
/** The fields that hold a JSON array. */
export declare function getArrayFields(schema: SqlSchema | undefined): Set<string>;
/** The fields stored as SQLite's 1 or 0. */
export declare function getBooleanFields(schema: SqlSchema | undefined): Set<string>;
/** Whether a model's id is a number, which SQLite assigns when the row has none. */
export declare const numericId: (schema: SqlSchema | undefined) => boolean;
/** `CREATE TABLE IF NOT EXISTS`, its id typed by the schema. */
export declare function buildCreateTableSQL(model: string, schema: SqlSchema): string;
/** Only the columns a live table is missing; an added column is never `NOT NULL`. */
export declare function buildAddColumnSQL(model: string, schema: SqlSchema, existing: string[]): string[];
/** Per-field indexes plus the schema's composite `$indexes`. */
export declare function buildCreateIndexSQL(model: string, schema: SqlSchema, indexes?: SqlIndexDefinition[]): string[];
/**
 * A where clause as SQLite SQL, every value bound. `arrays` names the fields
 * that hold a JSON array, the only ones `in` and `not in` read through
 * `json_each`; on any other field they are a plain `IN`, which an index
 * answers. A `null` in the list matches a null column, as it does in memory.
 */
export declare function buildWhereClause(where: Record<string, unknown> | null | undefined, arrays?: Set<string> | null): SqlQuery;
/** A select over `model`, with `where`, `order`, `limit`, `offset` and `fields`. */
export declare function buildSelectSQL(model: string, options?: SqlQueryOptions): SqlQuery;
/** An insert; a missing id lets SQLite assign one when the model's id is numeric. */
export declare function buildInsertSQL(model: string, data: Record<string, unknown>, jsonFields?: Set<string>): SqlQuery;
/** An update of every field given, stamping `updated`; never changes `id` or `created`. */
export declare function buildUpdateSQL(model: string, id: string | number, data: Record<string, unknown>, jsonFields?: Set<string>): SqlQuery;
/** A delete by id. */
export declare function buildDeleteSQL(model: string, id: string | number): SqlQuery;
/** A count over the same where. */
export declare function buildCountSQL(model: string, options?: SqlQueryOptions): SqlQuery;
/** The live column names of a table. */
export declare function tableColumns(db: SqlDatabase, model: string): string[];
/**
 * Apply a schema additively: create a missing table, add missing columns, and
 * create indexes. A destructive change belongs in an explicit migration.
 */
export declare function applySchema(db: SqlDatabase, models: Record<string, ModelSchema>): void;
/** One explicit migration: a name that runs once, and the SQL it runs. */
export interface SqlMigration {
    name: string;
    sql: string | string[];
}
/**
 * Run the migrations a database has not recorded in `_migrations`, each in
 * one transaction. The table is created here, so the first run needs nothing.
 */
export declare function applyMigrations(db: SqlDatabase, migrations: SqlMigration[]): void;
declare const _default: {
    applyMigrations: typeof applyMigrations;
    applySchema: typeof applySchema;
    buildAddColumnSQL: typeof buildAddColumnSQL;
    buildCountSQL: typeof buildCountSQL;
    buildCreateIndexSQL: typeof buildCreateIndexSQL;
    buildCreateTableSQL: typeof buildCreateTableSQL;
    buildDeleteSQL: typeof buildDeleteSQL;
    buildInsertSQL: typeof buildInsertSQL;
    buildSelectSQL: typeof buildSelectSQL;
    buildUpdateSQL: typeof buildUpdateSQL;
    buildWhereClause: typeof buildWhereClause;
    getArrayFields: typeof getArrayFields;
    getBooleanFields: typeof getBooleanFields;
    getJsonFields: typeof getJsonFields;
    quoteIdent: typeof quoteIdent;
    tableColumns: typeof tableColumns;
};
export default _default;
