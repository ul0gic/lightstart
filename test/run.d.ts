export const PLAYWRIGHT_HINT: "Browser tests need Playwright.\n  Install it where you are running from:  npm i -D playwright && npx playwright install chromium";
export function runFiles({ files, runnerUrl, headless, timeoutMs, log, frame }: {
    files: Array<{
        label: string;
        url: string;
    }>;
    runnerUrl: (fileUrl: string) => string;
    headless?: boolean;
    timeoutMs?: number;
    log?: {
        log: (msg: string) => void;
        error: (msg: string) => void;
    };
    frame?: (frame: string) => string;
}): Promise<boolean>;
