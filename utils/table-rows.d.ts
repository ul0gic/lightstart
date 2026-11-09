export function columnName(column: string | TableColumn): string;
export function sortValueOf(row: TableRow, column: string | TableColumn): unknown;
export function sortRows(rows: TableRow[], columns: (string | TableColumn)[], sortBy: string, sortDir: string): TableRow[];
export function pageCount(total: number, size: number): number;
export function clampPage(page: number, total: number, size: number): number;
export function pageRows<T>(rows: T[], page: number, size: number): T[];
export function rangeOf(page: number, size: number, total: number): {
    from: number;
    to: number;
    total: number;
};
import type { TableColumn } from "../types.js";
import type { TableRow } from "../types.js";
