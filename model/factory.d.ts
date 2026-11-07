/**
 * The adapter registry. A storage package registers its adapter object
 * under a type name at load time; the boot instantiates one per type the
 * schemas ask for. A package may also register a decorator for a schema
 * directive: the store wraps the routed adapter of every model declaring
 * that directive.
 */
import type { AdapterDecorator, ModelSchema, StorageAdapter } from "./types.js";
/**
 * Register a storage adapter under a `type` name. The eight required methods
 * are checked here; the optional ones (`insertMany`, `exists`, `facets`,
 * `truncate`, `subscribe`, `supportsOperator`) are feature-detected by the
 * store.
 */
export declare const registerStorageAdapter: (type: string, definition: StorageAdapter) => void;
/**
 * Instantiate a registered adapter with `config` as its own fields
 * (`name`, `version`, `models`, `emit`, `getAuthToken`, the adapter's keys).
 */
export declare const createAdapter: (type: string, config: Record<string, unknown> & {
    name?: string;
    version?: number | string;
}) => StorageAdapter;
export declare const getAvailableAdapters: () => string[];
export declare const hasAdapter: (type: string) => boolean;
/**
 * Register a decorator for the models whose schema declares `directive`
 * (`$moderated`, ...): the store wraps their routed adapter with
 * `factory(base, context)` once per model, so every read and write of such
 * a model passes through it.
 */
export declare const registerAdapterDecorator: (directive: string, factory: AdapterDecorator) => void;
/** The decorators a schema's directives call for, in registration order. */
export declare const decoratorsFor: (schema: ModelSchema | undefined) => AdapterDecorator[];
