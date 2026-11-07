/** The handle `createAssetServer` answers: the port and token the URL needs, and a way to stop. */
export class AssetServer {
    /**
     * @param {string} token
     * @param {import("node:http").Server} server
     */
    constructor(token: string, server: import("node:http").Server);
    token: string;
    server: import("node:http").Server<typeof import("node:http").IncomingMessage, typeof import("node:http").ServerResponse>;
    port: number;
    /** @param {string} path a path inside the served tree, such as "index.html" */
    url(path: string): string;
    close(): void;
}
export function createAssetServer(webDir: string, lightDir: string, listening: (server: AssetServer) => void): AssetServer;
