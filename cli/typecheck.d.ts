export function tscPath(projectDir: string): string | null;
export function attribute(output: string, projectDir: string): {
    own: string[];
    foreign: string[];
};
export function typecheckProject(projectDir: string, options?: {
    log?: {
        error(message: string): void;
        warn?(message: string): void;
    };
}): Promise<number>;
