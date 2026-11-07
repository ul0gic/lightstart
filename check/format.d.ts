export function paint(code: string, text: string): string;
export function formatFinding(finding: {
    ruleId: string;
    severity: string;
    file: string;
    line: number;
    col: number;
    message: string;
}): string;
export function formatSummary(stats: {
    files: number;
    rules: number;
    errors: number;
    warnings: number;
    durationMs: number;
}): string;
