declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        data: Prop<ChartDataPoint[]>;
        height: number;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "primary";
            readonly enum: readonly ["primary", "secondary", "success", "warning", "error", "info"];
        }>;
        showLabels: true;
        showDots: true;
        showArea: false;
        smooth: true;
        fit: false;
        reference: Prop<number | null>;
        label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        _gradientId: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
    /**
     * The value range the chart spans: from zero, or with `fit`, the values'
     * own range with a margin above and below.
     *
     * @param {number[]} values
     * @returns {[number, number]}
     */
    _scale(values: number[]): [number, number];
    /** @param {string} areaPath */
    _area(areaPath: string): import("@bootstrapp/light/html").TemplateResult;
    /** @param {{ x: number, y: number }[]} points */
    _createPath(points: {
        x: number;
        y: number;
    }[]): string;
    /** @param {{ x: number, y: number }[]} points */
    _createSmoothPath(points: {
        x: number;
        y: number;
    }[]): string;
    /**
     * @param {{ x: number, y: number }[]} points
     * @param {number} baseY
     */
    _createAreaPath(points: {
        x: number;
        y: number;
    }[], baseY: number): string;
    /** @param {string | undefined} label */
    _formatLabel(label: string | undefined): string;
}, "events"> & {
    props?: {
        data: Prop<ChartDataPoint[]>;
        height: number;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "primary";
            readonly enum: readonly ["primary", "secondary", "success", "warning", "error", "info"];
        }>;
        showLabels: true;
        showDots: true;
        showArea: false;
        smooth: true;
        fit: false;
        reference: Prop<number | null>;
        label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        _gradientId: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { ChartDataPoint } from "../types.js";
import type { Prop } from "../types.js";
