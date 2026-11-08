export function importmapFor(root: string): {
    imports: Record<string, string>;
    lightDir: string;
};
export const RUNNER_PATH: "/__light/runner";
export function serve(root: string, port?: number): Promise<{
    server: import("node:http").Server;
    url: string;
}>;
export function serveCommand(args: string[]): Promise<number>;
