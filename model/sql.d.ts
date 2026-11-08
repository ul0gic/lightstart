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
import type { SqlDatabase } from "@lightstart/sqlite";
import type { ModelApi, ModelSchema, Row, StorageAdapter, Store } from "./types.js";
/** The adapter as `createAdapter("sql", { name, db, models })` makes it. */
export type SqlStorage = StorageAdapter & {
    db: SqlDatabase;
    models: Record<string, ModelSchema>;
};
/** The array fields of `schema`, for `buildWhereClause` and the select and count builders. */
export declare const arrayFieldsOf: (schema: ModelSchema | undefined) => Set<string>;
/** Decode one stored row: JSON text back to its value, booleans back to true or false. */
export declare const decodeRow: (schema: ModelSchema | undefined, row: Row) => Row;
/** The SQL adapter object; its state is the injected database and the models it holds. */
declare const SqlAdapter: StorageAdapter;
export default SqlAdapter;
/** What a synchronous write takes besides its row. */
export interface SyncWriteOptions {
    /** Who asked for the write; the hooks read it as `ctx.user`. */
    user?: unknown;
    /** Applied after the before hook: to the row of an add, to the changes of an edit (an owner stamp, a field a caller may not set). */
    shape?: (row: Row) => Row;
    /** Where the change event and the after hooks go: at once, unless a caller holds them until its transaction commits. */
    defer?: (work: () => void) => void;
    /** The stored row an edit or a remove already read, so it is not read again. */
    current?: Row | null;
}
/** What a `SqlWriter` writes through: the database, the schemas, the store its hooks see, and where `model:changed` goes. */
export interface SqlWriterConfig {
    db: SqlDatabase;
    models: Record<string, ModelSchema>;
    store: Store;
    changes?: ((event: string, data: unknown) => void) | null;
}
/**
 * The store's write pipeline, synchronous, over one SQLite database: the
 * before hook, the id, relations reduced, defaults, validation, the write,
 * then `model:changed` and the after hook. It runs inside a caller's
 * transaction, so a hook must answer at once (a promise is refused), and a
 * row whose file would be uploaded is refused too; the async store does both.
 * The SQL adapter's reads see what it writes, since both use one database.
 */
export declare class SqlWriter {
    readonly db: SqlDatabase;
    readonly models: Record<string, ModelSchema>;
    readonly store: Store;
    private readonly schemas;
    private readonly announce;
    constructor(config: SqlWriterConfig);
    private schemaOf;
    private hook;
    private context;
    private changed;
    /** The stored row, decoded, or null. */
    get(model: string, id: string | number): Row | null;
    add(model: string, data: Row, options?: SyncWriteOptions): Row;
    edit(model: string, id: string | number, patch: Row, options?: SyncWriteOptions): Row;
    /** Remove a row; false when it was not there or `beforeRemove` answered false. */
    remove(model: string, id: string | number, options?: SyncWriteOptions): boolean;
}
/** What `openSql` takes: the database's name, the driver, and the models it holds. */
export interface SqlOpen {
    name: string;
    db: SqlDatabase;
    models: ModelApi<Row, ModelSchema>[];
}
/**
 * The store of a process that holds its own models, over one SQLite database:
 * the adapter registered once, opened on `db`, a store over the models'
 * schemas with the model bus as its emitter, and the store's request as what
 * every model call goes through from here on. Answers the store.
 */
export declare const openSql: ({ name, db, models }: SqlOpen) => Promise<Store>;
