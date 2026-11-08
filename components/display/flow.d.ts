declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        lanes: Prop<FlowLane[]>;
        phases: Prop<string[]>;
        selected: string;
    };
    events: {
        "flow-select": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly lane: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly step: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    };
    /**
     * @param {FlowLane} lane
     * @param {FlowStep} step
     */
    _pick(lane: FlowLane, step: FlowStep): void;
    /**
     * @param {FlowLane} lane
     * @param {FlowStep} step
     * @param {boolean} after whether a step comes before this one in the lane
     */
    _step(lane: FlowLane, step: FlowStep, after: boolean): import("@lightstart/light/html").TemplateResult;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        lanes: Prop<FlowLane[]>;
        phases: Prop<string[]>;
        selected: string;
    } | undefined;
    events?: {
        "flow-select": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly lane: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly step: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { FlowLane } from "../types.js";
import type { Prop } from "../types.js";
import type { FlowStep } from "../types.js";
