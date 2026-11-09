export function attachLongPress(host: HTMLElement, { delay, moveTolerance }?: {
    delay?: number;
    moveTolerance?: number;
}): () => void;
