declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        data: Prop<BarChartDatum[]>;
        height: number;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "primary";
            readonly enum: readonly ["primary", "secondary", "success", "warning", "error", "info"];
        }>;
        showLabels: true;
        showValues: false;
        horizontal: false;
        gap: number;
        currentIndex: number;
        showAxis: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        formatValue: Prop<((value: number) => string) | null>;
        callout: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    /** @param {string} name */
    _table(name: string): import("@bootstrapp/light/html").TemplateResult;
    /** @param {number} value */
    _format(value: number): string;
    /**
     * @param {number} max
     * @param {boolean} withLabels
     */
    _bars(max: number, withLabels: boolean): import("@bootstrapp/light/html").TemplateResult[];
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        data: Prop<BarChartDatum[]>;
        height: number;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "primary";
            readonly enum: readonly ["primary", "secondary", "success", "warning", "error", "info"];
        }>;
        showLabels: true;
        showValues: false;
        horizontal: false;
        gap: number;
        currentIndex: number;
        showAxis: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        formatValue: Prop<((value: number) => string) | null>;
        callout: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { BarChartDatum } from "../types.js";
import type { Prop } from "../types.js";
