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
        centerLabel: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        centerSub: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    _colors: string[];
    render(): import("@bootstrapp/light/html").TemplateResult;
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
        centerLabel: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        centerSub: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { PieChartDatum } from "../types.js";
import type { Prop } from "../types.js";
