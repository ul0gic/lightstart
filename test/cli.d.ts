export function runTestFiles({ files, root, headless, timeoutMs, render }: {
    files: string[];
    root: string;
    headless?: boolean;
    timeoutMs?: number;
    render?: (options: RunnerPageOptions) => string;
}): Promise<boolean>;
export function test(argv: string[]): Promise<boolean>;
export function runTestCommand(ctx: CommandContext, args: Record<string, unknown>): Promise<boolean>;
import type { RunnerPageOptions } from "../cli/extensions.js";
import type { CommandContext } from "@lightstart/cli";
