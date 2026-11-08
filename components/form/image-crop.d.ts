declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        src: string;
        accept: string;
        capture: string;
        shape: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "circle";
            readonly enum: readonly ["circle", "square"];
        }>;
        aspect: string;
        outputSize: number;
        outputType: string;
        quality: number;
        maxBytes: number;
        maxZoom: number;
        hint: string;
        disabled: false;
        status: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "empty";
            readonly enum: readonly ["empty", "loading", "ready", "error"];
        }>;
        error: string;
        zoom: number;
        _picture: Prop<ImageBitmap | null>;
        _rect: Prop<CropRect | null>;
        _bounds: Prop<CropBounds | null>;
        _pointers: Prop<Map<number, CropPoint>>;
        _gesture: Prop<{
            rect: CropRect;
            scale: number;
        } | null>;
        _loads: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: 0;
            readonly reactive: false;
            readonly attribute: false;
        }>;
    };
    events: {
        loadstart: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        load: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly width: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly height: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
        change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly zoom: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
        error: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly message: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    };
    connected(): void;
    firstUpdated(): Promise<boolean> | undefined;
    /** @param {{ changedProps: Map<string, unknown> }} update */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): Promise<boolean> | undefined;
    disconnected(): void;
    _frame(): HTMLElement | null;
    pick(): void;
    /**
     * Opens a picture in the frame, zoomed out to cover it.
     * @param {Blob | string} source a file, a blob or an address
     * @returns {Promise<boolean>} whether it opened
     */
    load(source: Blob | string): Promise<boolean>;
    /**
     * What the frame shows as an image, or null when there is no picture or
     * no quality brings it under `maxBytes`.
     * @returns {Promise<Blob | null>}
     */
    toBlob(): Promise<Blob | null>;
    reset(): void;
    clear(): void;
    /** @param {CropRect} rect */
    _set(rect: CropRect): void;
    _view(): number;
    _draw(): void;
    /** @param {PointerEvent} e */
    _pressed(e: PointerEvent): void;
    /** @param {PointerEvent} e */
    _moved(e: PointerEvent): void;
    /** @param {PointerEvent} e */
    _lifted(e: PointerEvent): void;
    /** @param {WheelEvent} e */
    _wheeled(e: WheelEvent): void;
    /**
     * Safari's own pinch, on a trackpad and on iOS, arrives as gesture events
     * carrying the scale since the gesture began.
     * @param {Event} e
     * @param {"start" | "change"} phase
     */
    _safariPinch(e: Event, phase: "start" | "change"): void;
    /** @param {KeyboardEvent} e */
    _key(e: KeyboardEvent): void;
    /**
     * @param {CustomEvent<{ value: number }>} e
     * @param {boolean} done
     */
    _slid(e: CustomEvent<{
        value: number;
    }>, done: boolean): void;
    /** @param {Event} e */
    _picked(e: Event): void;
    /** @param {DragEvent} e */
    _dragged(e: DragEvent): void;
    /** @param {DragEvent} e */
    _dropped(e: DragEvent): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        src: string;
        accept: string;
        capture: string;
        shape: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "circle";
            readonly enum: readonly ["circle", "square"];
        }>;
        aspect: string;
        outputSize: number;
        outputType: string;
        quality: number;
        maxBytes: number;
        maxZoom: number;
        hint: string;
        disabled: false;
        status: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "empty";
            readonly enum: readonly ["empty", "loading", "ready", "error"];
        }>;
        error: string;
        zoom: number;
        _picture: Prop<ImageBitmap | null>;
        _rect: Prop<CropRect | null>;
        _bounds: Prop<CropBounds | null>;
        _pointers: Prop<Map<number, CropPoint>>;
        _gesture: Prop<{
            rect: CropRect;
            scale: number;
        } | null>;
        _loads: import("@lightstart/light/types").DeclaredTypeDefinition<number, {
            readonly defaultValue: 0;
            readonly reactive: false;
            readonly attribute: false;
        }>;
    } | undefined;
    events?: {
        loadstart: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@lightstart/light/types").TypeOptionsOrDefault>;
        load: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly width: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly height: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
        change: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly zoom: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
        error: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly message: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
import type { CropRect } from "../types.js";
import type { CropBounds } from "../types.js";
import type { CropPoint } from "../types.js";
