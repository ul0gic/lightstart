export function withResize<K extends string>(method: K): {
    /** @this {View & Record<K, () => void>} */
    connected(this: View & Record<K, () => void>): void;
} & {
    props?: {} | undefined;
    events?: {} | undefined;
};
export default withResize;
import type View from "@lightstart/light";
