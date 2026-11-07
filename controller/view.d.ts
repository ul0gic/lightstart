/**
 * @bootstrapp/light/controller/view: the sync plugin
 * `View.use(syncPlugin)` makes a component property declared with `sync:`
 * follow its target, through the same binding a controller uses: an adapter
 * or controller name, a store, a signal, a controller, or a target a sync
 * binder claims. The binding is made when the element connects and its unbind
 * rides the element's own teardowns. A synced property takes its value from
 * the target, so markup neither sets nor reflects it; a component with a
 * `query`-backed property also gets `dataPending`, which the binder that reads
 * the query keeps current.
 */
import type { ViewPlugin } from "../view/types.js";
/** The component plugin that binds every property declared with `sync:` while the element is connected. */
export declare const syncPlugin: ViewPlugin;
