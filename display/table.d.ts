declare const _default: Omit<{
    mixins: [{
        connected(this: import("@lightstart/light").default & Record<"_syncOverflow", () => void>): void;
    } & {
        props?: {} | undefined;
        events?: {} | undefined;
    }];
    tag: string;
    style: boolean;
    dataQuery: boolean;
    props: {
        columns: Prop<(string | TableColumn)[]>;
        rows: Prop<TableRow[]>;
        selectRow: Prop<TableRowSelect | null>;
        isSelected: Prop<TableRowSelected | null>;
        sortable: false;
        sortBy: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        sortDir: string;
        emptyMessage: string;
        label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        _overflow: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
            readonly defaultValue: false;
        }>;
    };
    updated(): void;
    _syncOverflow(): void;
    /** @param {string} name */
    handleSort(name: string): void;
    /** @param {string | TableColumn} column */
    renderHead(column: string | TableColumn): import("@lightstart/light/html").TemplateResult;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        columns: Prop<(string | TableColumn)[]>;
        rows: Prop<TableRow[]>;
        selectRow: Prop<TableRowSelect | null>;
        isSelected: Prop<TableRowSelected | null>;
        sortable: false;
        sortBy: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        sortDir: string;
        emptyMessage: string;
        label: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        _overflow: import("@lightstart/light/types").DeclaredTypeDefinition<boolean, {
            readonly attribute: false;
            readonly defaultValue: false;
        }>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [{
        connected(this: import("@lightstart/light").default & Record<"_syncOverflow", () => void>): void;
    } & {
        props?: {} | undefined;
        events?: {} | undefined;
    }] | undefined;
};
export default _default;
import type { TableColumn } from "../types.js";
import type { Prop } from "../types.js";
import type { TableRow } from "../types.js";
import type { TableRowSelect } from "../types.js";
import type { TableRowSelected } from "../types.js";
