export function runnerPage({ file, importmap, harnessUrl, reportUrl, prelude }: {
    file: string;
    importmap: Record<string, string>;
    harnessUrl: string;
    reportUrl: string;
    prelude?: string;
}): string;
