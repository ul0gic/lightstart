declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        data: Prop<SparklineDatum[]>;
        width: number;
        height: number;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "primary";
            readonly enum: readonly ["primary", "secondary", "success", "warning", "error"];
        }>;
        showArea: false;
        smooth: true;
        label: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        _gradientId: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
    };
    render(): import("@bootstrapp/light/html").TemplateResult;
    _normalizeData(): number[];
    /** @param {string} areaPath */
    _area(areaPath: string): import("@bootstrapp/light/html").TemplateResult;
    /** @param {{ x: number, y: number, value: number }[]} points */
    _createPath(points: {
        x: number;
        y: number;
        value: number;
    }[]): string;
    /** @param {{ x: number, y: number, value: number }[]} points */
    _createSmoothPath(points: {
        x: number;
        y: number;
        value: number;
    }[]): string;
    /**
     * @param {{ x: number, y: number, value: number }[]} points
     * @param {number} baseY
     */
    _createAreaPath(points: {
        x: number;
        y: number;
        value: number;
    }[], baseY: number): string;
}, "events"> & {
    props?: {
        data: Prop<SparklineDatum[]>;
        width: number;
        height: number;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "primary";
            readonly enum: readonly ["primary", "secondary", "success", "warning", "error"];
        }>;
        showArea: false;
        smooth: true;
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
import type { SparklineDatum } from "../types.js";
import type { Prop } from "../types.js";
