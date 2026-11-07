export function parseClass(raw: string): {
    raw: string;
    variants: string[];
    important: boolean;
    negative: boolean;
    base: string;
    stem: string;
    modifier: string | null;
} | null;
export function arbitraryValue(inner: string): string;
export function parseArbitrary(rest: string): {
    type: string;
    value: string;
} | {
    type: null;
    value: string;
} | null;
