/**
 * @bootstrapp/light/model/jsonl: a storage adapter over JSON Lines files, one
 * file per model (`<dir>/<model>.jsonl`). A file is the log of its model's
 * writes: every write appends the row as one line, a later line for an id
 * replaces an earlier one, and a removal appends `{"id":…,"$removed":true}`.
 * A model's file is read into memory the first time the model is reached, so
 * reads answer from memory, and a line an interrupted append cut short is
 * skipped. When the lines a file no longer needs outnumber its rows, the file
 * is rewritten with the rows alone. The adapter reaches its files through
 * `io` (`read`, `append`, `write`), so it runs wherever its host can read and
 * append a file; one process owns a directory. Importing it registers
 * nothing: `registerStorageAdapter("jsonl", JsonlAdapter)` where the store is
 * built, then `createAdapter("jsonl", { name, dir, io })`; `openJsonl` does
 * both for a process that holds its own models and store.
 */
import type { JsonlIO, ModelApi, ModelSchema, Row, StorageAdapter, Store } from "./types.js";
declare const JsonlAdapter: StorageAdapter;
export default JsonlAdapter;
/** What `openJsonl` takes: the database's name, the directory of its files, how to reach them, and the models it holds. */
export interface JsonlOpen {
    name: string;
    dir: string;
    io: JsonlIO;
    models: ModelApi<Row, ModelSchema>[];
}
/**
 * The store of a process that holds its own models, over JSONL files: the
 * adapter registered once, opened on `dir` through `io`, a store over the
 * models' schemas with the model bus as its emitter, and the store's request
 * as what every model call goes through from here on. Answers the store.
 */
export declare const openJsonl: ({ name, dir, io, models }: JsonlOpen) => Promise<Store>;
