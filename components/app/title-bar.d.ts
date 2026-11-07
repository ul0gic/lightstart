declare const _default: Omit<{
    tag: string;
    props: {
        title: string;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "unified", "hidden"];
        }>;
        showControls: true;
        draggable: true;
        maximized: false;
    };
    style: boolean;
    connected(): void;
    /** @param {WindowHost} host */
    syncHost(host: WindowHost): void;
    /** @param {MouseEvent} e */
    handleBarMouseDown(e: MouseEvent): void;
    handleMinimize(): void;
    handleMaximize(): void;
    handleClose(): void;
    drawsControls(): boolean;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        title: string;
        variant: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "unified", "hidden"];
        }>;
        showControls: true;
        draggable: true;
        maximized: false;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { WindowHost } from "../../env/types.js";
