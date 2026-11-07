export function isSlotHost(host: unknown): host is SlotHost;
export function unitEnd(first: ChildNode): ChildNode;
export function unitNodes(first: ChildNode): ChildNode[];
export function unitName(first: ChildNode): string;
export function moveUnit(first: ChildNode, parent: ParentNode, ref: Node | null): void;
export function isMoving(): boolean;
export function lightUnits(host: SlotHost): ChildNode[];
export function unitsIn(parent: ParentNode): ChildNode[];
export class SlotPart {
    /**
     * @param {PartSpec} spec
     * @param {Element} el
     * @param {object | undefined} host
     */
    constructor(spec: PartSpec, el: Element, host: object | undefined);
    el: Element;
    /** @type {ChildNode[]} */
    units: ChildNode[];
    /** @type {DocumentFragment | null} */
    parked: DocumentFragment | null;
    notify: boolean;
    pending: boolean;
    /** @type {SlotHost | null} */
    host: SlotHost | null;
    get name(): string;
    setFromValues(): void;
    adopt(): void;
    park(): void;
    restore(): void;
    release(): void;
    dispose(): void;
}
export function projectSlots(host: SlotHost, hooks: ProjectHooks): boolean;
export function unprojectUnits(host: Element): void;
import { ASSIGNED_ATTR } from "../html/constants.js";
import { UNSLOTTED_TAG } from "../html/constants.js";
import type { SlotHost } from "./types.js";
import type { PartSpec } from "../html/types.js";
import type { ProjectHooks } from "./types.js";
export { ASSIGNED_ATTR, UNSLOTTED_TAG };
