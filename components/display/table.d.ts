declare const _default: Omit<{
    tag: string;
    style: boolean;
    dataQuery: boolean;
    props: {
        columns: Prop<(string | TableColumn)[]>;
        rows: Prop<TableRow[]>;
        selectRow: Prop<TableRowSelect | null>;
        isSelected: Prop<TableRowSelected | null>;
        sortable: false;
        sortBy: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        sortDir: string;
        emptyMessage: string;
    };
    /** @param {string} name */
    handleSort(name: string): void;
    /** @param {string | TableColumn} column */
    renderHead(column: string | TableColumn): import("@bootstrapp/light/html").TemplateResult;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        columns: Prop<(string | TableColumn)[]>;
        rows: Prop<TableRow[]>;
        selectRow: Prop<TableRowSelect | null>;
        isSelected: Prop<TableRowSelected | null>;
        sortable: false;
        sortBy: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        sortDir: string;
        emptyMessage: string;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { TableColumn } from "../types.js";
import type { Prop } from "../types.js";
import type { TableRow } from "../types.js";
import type { TableRowSelect } from "../types.js";
import type { TableRowSelected } from "../types.js";
