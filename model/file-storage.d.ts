/**
 * The file storage the store uploads `T.file()` values through. A package
 * that stores files (an asset service, a bucket) registers its provider
 * here; without one, blobs stay on the row untouched and the adapter decides
 * what to do with them.
 */
import type { FileStorage, ModelSchema, Row } from "./types.js";
export declare const setFileStorage: (provider: FileStorage | null) => void;
export declare const getFileStorage: () => FileStorage | null;
/**
 * Send every `T.file()` / `T.files()` value of a row through the registered
 * storage and put the answered url in its place. Without a provider the row
 * comes back untouched.
 */
export declare const uploadFiles: (schema: ModelSchema | undefined, model: string, row: Row) => Promise<Row>;
/**
 * Whether a row holds a `T.file()` / `T.files()` value the registered storage
 * would upload: a writer that cannot wait for an upload refuses such a row.
 */
export declare const needsUpload: (schema: ModelSchema | undefined, row: Row) => boolean;
