declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        rows: Prop<KanbanRow[]>;
        columns: Prop<KanbanColumn[]>;
        groupByField: string;
        addable: false;
        nestable: false;
        addPlaceholder: string;
        onMove: Prop<KanbanMove | null>;
        onAdd: Prop<KanbanAdd | null>;
        onSelect: Prop<KanbanSelect | null>;
        renderItem: Prop<KanbanRowRenderer | null>;
        renderColumnActions: Prop<KanbanColumnRenderer | null>;
        newTitles: Prop<Record<string, string>>;
        dropTarget: Prop<KanbanDropTarget | null>;
    };
    /** @returns {KanbanColumn[]} */
    _resolvedColumns(): KanbanColumn[];
    /** @param {string} name */
    _rowsForColumn(name: string): KanbanRow[];
    /**
     * @param {DragEvent} e
     * @param {string} columnName
     */
    _handleColumnDrop(e: DragEvent, columnName: string): void;
    /**
     * @param {DragEvent} e
     * @param {string | number} rowId
     * @param {string} columnName
     */
    _handleCardDragOver(e: DragEvent, rowId: string | number, columnName: string): void;
    /**
     * @param {DragEvent} e
     * @param {string | number} rowId
     */
    _handleCardDragLeave(e: DragEvent, rowId: string | number): void;
    /**
     * @param {DragEvent} e
     * @param {string | number} rowId
     * @param {string} columnName
     */
    _handleCardDrop(e: DragEvent, rowId: string | number, columnName: string): void;
    /** @param {string} columnName */
    _submitAdd(columnName: string): void;
    /** @param {KanbanRow} row */
    _defaultCard(row: KanbanRow): import("@lightstart/light/html").TemplateResult;
    /**
     * @param {string | number} rowId
     * @param {string} columnName
     */
    _cardWrapperClass(rowId: string | number, columnName: string): string;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        rows: Prop<KanbanRow[]>;
        columns: Prop<KanbanColumn[]>;
        groupByField: string;
        addable: false;
        nestable: false;
        addPlaceholder: string;
        onMove: Prop<KanbanMove | null>;
        onAdd: Prop<KanbanAdd | null>;
        onSelect: Prop<KanbanSelect | null>;
        renderItem: Prop<KanbanRowRenderer | null>;
        renderColumnActions: Prop<KanbanColumnRenderer | null>;
        newTitles: Prop<Record<string, string>>;
        dropTarget: Prop<KanbanDropTarget | null>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { KanbanRow } from "../types.js";
import type { Prop } from "../types.js";
import type { KanbanColumn } from "../types.js";
import type { KanbanMove } from "../types.js";
import type { KanbanAdd } from "../types.js";
import type { KanbanSelect } from "../types.js";
import type { KanbanRowRenderer } from "../types.js";
import type { KanbanColumnRenderer } from "../types.js";
import type { KanbanDropTarget } from "../types.js";
