export function clampRect(rect: {
    x: number;
    y: number;
    w: number;
    h: number;
}, viewport: {
    width: number;
    height: number;
}, mins?: {
    minWidth?: number;
    minHeight?: number;
}): {
    x: number;
    y: number;
    w: number;
    h: number;
};
export function loadRect(storage: {
    getItem: (key: string) => string | null;
}, key: string, fallback: {
    x: number;
    y: number;
    w: number;
    h: number;
}): {
    x: number;
    y: number;
    w: number;
    h: number;
};
export function saveRect(storage: {
    setItem: (key: string, value: string) => void;
}, key: string, rect: {
    x: number;
    y: number;
    w: number;
    h: number;
}): void;
