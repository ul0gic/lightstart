/**
 * @bootstrapp/light/controller/writers: writing a record by a key named at
 * run time. Natively, a write by a key that is not a literal is static only
 * when its receiver is the object literal itself, so a record that takes such
 * writes is made here with closures over its literal, and its writer is found
 * again by the record. The record stays a plain object for its readers
 * (`this.$queries.rows`).
 */
/** A record and the closures that write a key of it and, for a record whose keys come and go, drop one. */
export declare class RecordWriter {
    record: object;
    writeKey: (key: string, value: unknown) => void;
    dropKey: ((key: string) => void) | null;
    constructor(record: object, writeKey: (key: string, value: unknown) => void, dropKey: ((key: string) => void) | null);
}
/** Remember a writer by its record. */
export declare const registerWriter: (writer: RecordWriter) => void;
/** The writer of a record made or registered here, or undefined for any other value. */
export declare const writerOf: (record: unknown) => RecordWriter | undefined;
/** A new empty record with its writer, registered. */
export declare const writableRecord: () => RecordWriter;
