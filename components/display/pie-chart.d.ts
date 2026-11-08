declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        data: Prop<PieChartDatum[]>;
        size: number;
        donut: false;
        donutWidth: number;
        showLabels: false;
        showLegend: true;
        centerLabel: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        centerSub: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
    };
    _colors: string[];
    render(): import("@lightstart/light/html").TemplateResult;
    /**
     * @param {number} center
     * @param {number} outerRadius
     * @param {number} innerRadius
     * @param {number} startAngle
     * @param {number} endAngle
     */
    _createSlicePath(center: number, outerRadius: number, innerRadius: number, startAngle: number, endAngle: number): string;
}, "events"> & {
    props?: {
        data: Prop<PieChartDatum[]>;
        size: number;
        donut: false;
        donutWidth: number;
        showLabels: false;
        showLegend: true;
        centerLabel: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        centerSub: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { PieChartDatum } from "../types.js";
import type { Prop } from "../types.js";
