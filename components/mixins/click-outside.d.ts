export function withClickOutside({ events, capture, defer }?: {
    events?: string | string[];
    capture?: boolean;
    defer?: boolean;
}): {
    /** @this {View & { onClickOutside?: (e: Event) => void }} */
    connected(this: View & {
        onClickOutside?: (e: Event) => void;
    }): void;
} & {
    props?: {} | undefined;
    events?: {} | undefined;
};
export default withClickOutside;
import type View from "@lightstart/light";
