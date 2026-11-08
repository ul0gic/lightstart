declare const _default: Omit<{
    tag: string;
    props: {
        _internals: Prop<ElementInternals | null>;
        name: string;
        accept: string;
        multiple: false;
        disabled: false;
        required: false;
        maxSize: Prop<number | null>;
        showPreview: true;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "dropzone"];
        }>;
        value: Prop<string | File | Array<string | File> | null>;
        dragOver: false;
        error: string;
        _objectUrls: Prop<Map<File, string>>;
    };
    style: boolean;
    formAssociated: boolean;
    connected(): void;
    /**
     * The value as the list it is, whatever shape it was handed in.
     * @returns {Array<string | File>}
     */
    readonly entries: Array<string | File>;
    /**
     * Only the Files, for a caller that has to upload something.
     * @returns {File[]}
     */
    readonly files: File[];
    /**
     * One object URL per File, made once and revoked when the File goes. A URL
     * made in render leaks a blob per frame, and the browser holds the blob
     * alive until the document does.
     * @param {File} file
     */
    _previewUrl(file: File): string;
    /** @param {Array<string | File>} keeping */
    _revokeGone(keeping: Array<string | File>): void;
    _revokeAll(): void;
    /** @param {Array<string | File>} entries */
    _commit(entries: Array<string | File>): void;
    /** @param {Event} e */
    handleFileSelect(e: Event): void;
    /** @param {DragEvent} e */
    handleDrop(e: DragEvent): void;
    /** @param {Event} e */
    handleDragOver(e: Event): void;
    /** @param {Event} e */
    handleDragLeave(e: Event): void;
    /** @param {File[]} files */
    _processFiles(files: File[]): void;
    _formData(): FormData;
    /** @param {number} index */
    removeFile(index: number): void;
    /** @param {File} file */
    _isImage(file: File): boolean;
    _describe(entry: string | File): {
        name: string;
        size: string;
        preview: string | null;
    };
    render(): import("@lightstart/light/html").TemplateResult;
    _renderDefault(): import("@lightstart/light/html").TemplateResult;
    _renderDropzone(): import("@lightstart/light/html").TemplateResult;
    _renderFileList(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        _internals: Prop<ElementInternals | null>;
        name: string;
        accept: string;
        multiple: false;
        disabled: false;
        required: false;
        maxSize: Prop<number | null>;
        showPreview: true;
        variant: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "default";
            readonly enum: readonly ["default", "dropzone"];
        }>;
        value: Prop<string | File | Array<string | File> | null>;
        dragOver: false;
        error: string;
        _objectUrls: Prop<Map<File, string>>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
