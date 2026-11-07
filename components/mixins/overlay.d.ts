export function withOverlay({ prop, lockScroll, restoreFocus, dismissible }?: {
    prop?: string;
    lockScroll?: boolean;
    restoreFocus?: boolean;
    dismissible?: boolean;
}): {
    props: {
        _overlayId: Prop<string | null>;
    };
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    disconnected(): void;
} & {
    props?: {
        _overlayId: Prop<string | null>;
    } | undefined;
    events?: {} | undefined;
};
export default withOverlay;
import type { Prop } from "../types.js";
