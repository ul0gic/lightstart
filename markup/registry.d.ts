export function define(tag: string, ctor: Ctor): void;
export function get(tag: string): Ctor | undefined;
export function whenDefined(tag: string): Promise<Ctor>;
export type Ctor = new () => object;
