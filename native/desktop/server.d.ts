/** @import { Reply } from "@lightstart/server" */
/** @import { NodeServer } from "@lightstart/server/node" */
/** The handle `createAssetServer` answers: the port and token the URL needs, and a way to stop. */
export class AssetServer {
    /** @param {string} token */
    constructor(token: string);
    token: string;
    port: number;
    /** @type {NodeServer | null} */
    node: NodeServer | null;
    closed: boolean;
    /** @param {string} path a path inside the served tree, such as "index.html" */
    url(path: string): string;
    close(): void;
}
export function createAssetServer(webDir: string, lightDir: string, listening: (server: AssetServer) => void): AssetServer;
import type { NodeServer } from "@lightstart/server/node";
