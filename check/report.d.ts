export function resolveFinding(finding: Finding, lineAt: (rel: string, offset: number) => {
    line: number;
    col: number;
}): {
    file: string;
    line: number;
    col: number;
    message: string;
};
import type { Finding } from "./types.js";
