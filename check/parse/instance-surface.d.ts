export function findUndeclaredInstanceFields({ literal, sf, declared, skip }: {
    literal: ObjectLiteralExpression;
    sf: SourceFile;
    declared: Set<string>;
    skip?: (name: string) => boolean;
}): Array<{
    name: string;
    offset: number;
}>;
export function declaredPropertyNames(literal: ObjectLiteralExpression): string[];
export function collectMixinNames(read: (rel: string) => string | null, fromFile: string, mixins: Array<{
    spec: string;
    exported: string;
}>, into: Set<string>, selfPrefix?: string): void;
export function collectExtendsNames(sourceOf: (tag: string) => string | null, tag: string | null, into: Set<string>, seen?: Set<string>): void;
import type { ObjectLiteralExpression } from "typescript";
import type { SourceFile } from "typescript";
