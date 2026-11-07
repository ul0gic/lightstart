export function withSwipeThreshold({ axis, axisProp, threshold, ratio, enabled, pointerTypes }?: {
    axis?: "x" | "y";
    axisProp?: string;
    threshold?: number;
    ratio?: number;
    enabled?: string;
    pointerTypes?: string[];
}): {
    props: {
        _swipe: Prop<SwipeStart | null>;
    };
    connected(): void;
} & {
    props?: {
        _swipe: Prop<SwipeStart | null>;
    } | undefined;
    events?: {} | undefined;
};
export default withSwipeThreshold;
import type { SwipeStart } from "../types.js";
import type { Prop } from "../types.js";
