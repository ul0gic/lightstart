declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        columns: Prop<(string | TableColumn)[]>;
        rows: Prop<TableRow[]>;
        query: Prop<DataTableQuery | null>;
        pageSize: number;
        pageSizes: Prop<number[]>;
        page: number;
        sortBy: string;
        sortDir: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "asc";
            readonly enum: readonly ["asc", "desc"];
        }>;
        sortable: true;
        selectRow: Prop<TableRowSelect | null>;
        isSelected: Prop<TableRowSelected | null>;
        emptyMessage: string;
        compact: false;
        total: number;
        _queryKey: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
        _query: Prop<Record<string, unknown> | null>;
    };
    events: {
        "page-change": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly page: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly pageSize: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
        sort: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly sortBy: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly sortDir: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    };
    /** @param {{ changedProps: Map<string, unknown> }} detail */
    willUpdate({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    _count(): number;
    /** @param {number} page */
    _go(page: number): void;
    /** @param {number} size */
    _resize(size: number): void;
    /** @param {CustomEvent<{ sortBy: string, sortDir: string }>} e */
    _sort(e: CustomEvent<{
        sortBy: string;
        sortDir: string;
    }>): void;
    _pageQuery(): Record<string, unknown> | null;
    _renderFooter(): import("@lightstart/light/html").TemplateResult | "";
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        columns: Prop<(string | TableColumn)[]>;
        rows: Prop<TableRow[]>;
        query: Prop<DataTableQuery | null>;
        pageSize: number;
        pageSizes: Prop<number[]>;
        page: number;
        sortBy: string;
        sortDir: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "asc";
            readonly enum: readonly ["asc", "desc"];
        }>;
        sortable: true;
        selectRow: Prop<TableRowSelect | null>;
        isSelected: Prop<TableRowSelected | null>;
        emptyMessage: string;
        compact: false;
        total: number;
        _queryKey: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly reactive: false;
            readonly defaultValue: "";
        }>;
        _query: Prop<Record<string, unknown> | null>;
    } | undefined;
    events?: {
        "page-change": import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly page: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly pageSize: import("@lightstart/light/types").DeclaredTypeDefinition<number, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
        sort: import("@lightstart/light/types").DeclaredTypeDefinition<Record<string, unknown>, {
            readonly sortBy: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
            readonly sortDir: import("@lightstart/light/types").DeclaredTypeDefinition<string, import("@lightstart/light/types").TypeOptionsOrDefault>;
        }>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { TableColumn } from "../types.js";
import type { Prop } from "../types.js";
import type { TableRow } from "../types.js";
import type { DataTableQuery } from "../types.js";
import type { TableRowSelect } from "../types.js";
import type { TableRowSelected } from "../types.js";
