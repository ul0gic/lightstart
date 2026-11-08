/**
 * @lightstart/light/controller: defineController
 * A controller is a named piece of app state and the methods that change it:
 * state shared at runtime by every component that uses it (code shared at
 * definition time is a mixin). There is one per name, made the first time
 * anything reaches it; `dispose()` retires it and the next reach makes a fresh
 * one. `defineController` answers that controller itself, a handle that builds
 * the instance on first reach and forwards every declared prop and member,
 * and the instance's `$` members, to it. A non-function member is a default:
 * an array, a plain object, a `Map` or a `Set` is copied per instance, so the
 * instance made after a `dispose()` starts from the declaration; anything else
 * is assigned as it is.
 */
import type { PropertyDeclaration } from "../types/types.js";
import type { ControllerDefinitionKey, ControllerHandle, ControllerInstance, MixinMembers, MixinProps, PropsToThis, SyncBlock } from "./types.js";
/**
 * Typed identity wrapper for a controller definition fragment, the thing a
 * controller lists under `mixins: [...]`. Runtime: the same object. Type-level:
 * `this` inside the fragment's methods sees the fragment's own properties and
 * members typed, the `$`-prefixed instance members, and everything else loose,
 * since the host it lands on is not known here. A fragment that takes options
 * is a function returning one of these. To type `this` as the host precisely,
 * wrap the literal in a `satisfies` JSDoc cast naming the generated interface,
 * `ThisType<import("./types.js").ControllerInstance & YourController>`.
 */
export declare function defineMixin<D extends Record<string, unknown>, P extends Record<string, PropertyDeclaration> = {}>(definition: D & {
    props?: P;
} & ThisType<PropsToThis<P> & Omit<D, ControllerDefinitionKey> & ControllerInstance & Record<string, unknown>>): D & {
    props?: P;
};
/**
 * Define a controller and answer it. `this` inside methods and lifecycle hooks
 * is `PropsToThis<P & MixinProps<M>> & Omit<D, ControllerDefinitionKey> & MixinMembers<M> & ControllerInstance`:
 * declared reactive props, own and from mixins (`this.month: string`), sibling
 * members declared on the literal and on the mixins, and the `$` members every
 * instance carries. Fragments listed under `mixins: [...]` fold in first
 * (`composeDefinition`), the definition's own keys win a collision, and
 * lifecycle hooks chain mixin-first.
 *
 * The answer is the controller's handle, a frozen object that forwards every
 * declared prop and member, and the instance's `$` members, to the instance,
 * building it on first reach; a key the definition does not declare is not on
 * the handle, and writing one throws. `definition`, `has()` (whether one is
 * built, without building it), `dispose()` and `$ready` answer from the handle.
 * `dispose()` runs `disconnected()` while the subscriptions the instance owns
 * are still live, then drains every owned teardown; the retiring instance
 * stays reachable until an async `disconnected()` settles, so the code inside
 * that teardown still finds the controller it is leaving. `$ready` means a
 * live instance that has finished connecting: read during a teardown, it waits
 * for the teardown and then for the instance built after it, whose
 * `connected()` also waits, so an outgoing detach cannot undo an incoming
 * attach.
 */
export declare function defineController<P extends Record<string, PropertyDeclaration>, D extends Record<string, unknown> & {
    sync?: SyncBlock<P & MixinProps<M>>;
}, M extends readonly Record<string, unknown>[] | [] = []>(rawDefinition: D & {
    name: string;
    props?: P;
    sync?: SyncBlock<P & MixinProps<M>>;
    mixins?: M;
} & ThisType<PropsToThis<P & MixinProps<M>> & Omit<D, ControllerDefinitionKey> & MixinMembers<M, ControllerDefinitionKey> & ControllerInstance>): ControllerHandle<P & MixinProps<M>, D & MixinMembers<M, ControllerDefinitionKey>>;
/**
 * Make each controller a sync target by its name: `sync: "<name>"` binds to
 * it, building it on the first binding, and after `dispose()` a later binding
 * reaches the next instance. A name a sync adapter already holds is refused,
 * since one of the two would answer for both; a controller named twice is
 * named once.
 */
export declare const nameControllers: (controllers: ReadonlyArray<Record<string, unknown>>) => void;
