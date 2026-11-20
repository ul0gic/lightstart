export function renderToString(template: unknown, options?: {
    markers?: boolean;
}): string;
export function renderToStringAsync(template: unknown, options?: {
    markers?: boolean;
    onError?: (error: unknown) => void;
}): Promise<string>;
