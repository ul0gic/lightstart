/**
 * @bootstrapp/light/signals/listeners: a list of callbacks that behaves as a
 * Set of them does, for a runtime that cannot hold functions in a Set. A
 * callback is held once and in the order it was added; one added while the
 * list runs is reached in the same run, and one removed before its turn is
 * skipped.
 */
export declare class Listeners<F> {
    items: Array<F | null>;
    running: number;
    get size(): number;
    has(cb: F): boolean;
    add(cb: F): this;
    delete(cb: F): boolean;
    clear(): void;
    forEach(run: (cb: F) => void): void;
}
