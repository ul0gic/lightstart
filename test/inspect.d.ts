export function inspect(value: unknown, { depth, indent, seen }?: {
    depth?: number;
    indent?: number;
    seen?: Set<object>;
}): string;
export function diffLines(actual: unknown, expected: unknown): string[];
