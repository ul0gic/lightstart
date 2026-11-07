export function balancedEnd(start: Comment, stop: Node | null, startData?: string, endData?: string): Comment | null;
export function topLevelPair(container: Element | DocumentFragment, root?: boolean): {
    start: Comment;
    end: Comment;
} | null;
export function projectedUnits(host: Element): ProjectedUnit[] | null;
export function elementChildPair(el: Element): {
    start: Comment;
    end: Comment;
} | null;
export function itemRanges(start: Comment, end: Comment): {
    start: Comment;
    end: Comment;
}[] | null;
export function singleTextIn(start: Comment, end: Comment): Text | null;
export function singleElementIn(start: Comment, end: Comment): Element | null;
export function normalizedEqual(a: string, b: string): boolean;
export function adoptTemplateResult(part: ChildPart, result: TemplateResult, bind: boolean): boolean;
export function adoptPart(part: Part, values: unknown[], bind: boolean): void;
export function deferValue(part: ChildPart, value: unknown): boolean;
export function resolvePending(part: ChildPart, value: unknown, bind: boolean): void;
export function rootPart(container: unknown, options: RenderOptions): ChildPart | null;
export type MarkerRange = {
    start: Node;
    end: Node;
};
import type { ProjectedUnit } from "./types.js";
import { ChildPart } from "../html/parts.js";
import { TemplateResult } from "../html/values.js";
import type { Part } from "../html/parts.js";
import type { RenderOptions } from "../html/types.js";
