import type { HookContext, Row, RowReader } from "./types.js";
/**
 * URL-friendly slug from arbitrary text: lowercase, ASCII-folded,
 * non-alphanumerics collapsed to single hyphens.
 */
export declare const slugify: (str: unknown) => string;
/**
 * Find a slug derived from `value` that isn't already taken in `model`
 * for `field`. Uses the store's `like` operator when its adapter has one,
 * otherwise probes candidates sequentially.
 */
export declare const generateUniqueSlug: (store: RowReader & {
    supportsOperator?(model: string, operator: string): boolean;
}, model: string, field: string, value: string, excludeId?: unknown) => Promise<string>;
/**
 * Convenience model hooks that auto-generate a slug from a source
 * field. Use in `$hooks` on the model schema.
 *
 *     export default {
 *       title: T.string({ required: true }),
 *       slug:  T.string(),
 *       $hooks: slugHooks("title", "slug"),
 *     };
 */
export declare const slugHooks: (sourceField?: string, slugField?: string) => {
    beforeAdd: (data: Row, { model, store }: HookContext) => Promise<Row>;
    beforeEdit: (data: Row, { model, store }: HookContext) => Promise<Row>;
};
declare const _default: {
    slugify: (str: unknown) => string;
    generateUniqueSlug: (store: RowReader & {
        supportsOperator?(model: string, operator: string): boolean;
    }, model: string, field: string, value: string, excludeId?: unknown) => Promise<string>;
    slugHooks: (sourceField?: string, slugField?: string) => {
        beforeAdd: (data: Row, { model, store }: HookContext) => Promise<Row>;
        beforeEdit: (data: Row, { model, store }: HookContext) => Promise<Row>;
    };
};
export default _default;
