declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        entries: Prop<TimelineEntry[]>;
        oldestFirst: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        extra: Prop<TimelineExtra | null>;
    };
    render(): typeof nothing | import("@bootstrapp/light/html").TemplateResult[];
}, "events"> & {
    props?: {
        entries: Prop<TimelineEntry[]>;
        oldestFirst: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        extra: Prop<TimelineExtra | null>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { TimelineEntry } from "../types.js";
import type { Prop } from "../types.js";
import type { TimelineExtra } from "../types.js";
import { nothing } from "@bootstrapp/light/html";
