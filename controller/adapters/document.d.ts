/**
 * @bootstrapp/light/controller/document: Document Adapter
 * A sync adapter over one JSON document: the keys a `sync: "<name>"`
 * property binds to are the document's top-level keys. The document lives
 * in memory; while a backing (`{ read, write, flush? }`) is attached every
 * change is handed to it whole. `attach` loads the stored document and
 * announces each stored key, so bound stores take the persisted value;
 * `detach` flushes the backing and stops writing.
 */
import type { DocumentAdapter } from "../types.js";
/** A document adapter named `name`, holding an empty document until a backing is attached. */
export declare const createDocumentAdapter: (name: string) => DocumentAdapter;
