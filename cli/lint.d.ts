export function eslintPath(projectDir: string): string | null;
export function lintProject(projectDir: string, options?: {
    fix?: boolean;
    log?: {
        error(message: string): void;
    };
}): Promise<number>;
