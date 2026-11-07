export function loaded<T>(res: {
    value: {
        value: T | null | undefined;
    };
    error: {
        value: unknown;
    };
    pending: {
        value: boolean;
    };
    ensure(): unknown;
}, render: (value: T) => unknown, { loading, empty, error, ensure }?: {
    loading?: () => unknown;
    empty?: () => unknown;
    error?: (err: unknown) => unknown;
    ensure?: boolean;
}): () => unknown;
