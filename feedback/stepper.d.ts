declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        steps: Prop<StepperStep[]>;
        current: string;
        state: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "idle";
            readonly enum: readonly ["idle", "running", "done", "failed"];
        }>;
        error: string;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md"];
        }>;
        vertical: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
    };
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        steps: Prop<StepperStep[]>;
        current: string;
        state: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "idle";
            readonly enum: readonly ["idle", "running", "done", "failed"];
        }>;
        error: string;
        size: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "md";
            readonly enum: readonly ["sm", "md"];
        }>;
        vertical: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, import("@lightstart/light/types").TypeOptionsOrDefault>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { StepperStep } from "../types.js";
import type { Prop } from "../types.js";
