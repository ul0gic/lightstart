export function sourceFile(source: string, filename: string): SourceFile;
export function defaultExportExpression(sf: SourceFile): Expression | null;
export function localInitializer(sf: SourceFile, name: string): Expression | null;
export function resolveLocal(expr: Node | undefined | null, seen?: Set<string>): Expression | null;
export function unwrapToLiteral(expr: Node | undefined | null, seen?: Set<string>): ObjectLiteralExpression | null;
export function nameOf(node: Node | undefined): string | null;
export function unwrapParens(expr: Expression | null | undefined): Expression | null | undefined;
export function typeCallOf(p: Node): import("typescript").CallExpression | null;
export function typeOption(p: Node, option: string): Expression | undefined;
export function hasNonNullDefault(p: Node): boolean;
export function importBinding(sf: import("typescript").SourceFile, localName: string): {
    spec: string;
    exported: string;
} | null;
export function defaultImportBinding(sf: SourceFile, matches: (spec: string) => boolean): string | null;
export function exportedInitializer(sf: import("typescript").SourceFile, name: string): import("typescript").Expression | null;
export function mixinBindings(sf: import("typescript").SourceFile, literal: import("typescript").ObjectLiteralExpression): Array<{
    spec: string;
    exported: string;
}>;
import type { SourceFile } from "typescript";
import type { Expression } from "typescript";
import type { Node } from "typescript";
import type { ObjectLiteralExpression } from "typescript";
