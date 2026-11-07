export function parseHex(value: unknown): {
    hex: string;
    alpha: number | null;
};
export function formatHex(hex: string, alpha: number | null, withAlpha: boolean): string;
export function sameColor(a: unknown, b: unknown): boolean;
