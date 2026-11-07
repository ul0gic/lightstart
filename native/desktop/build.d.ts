export function shim(target: string): string;
export function smoke(target: string, wait: boolean): boolean;
/** What `build` answers: where the executable and the page landed. */
export class Built {
    /**
     * @param {string} exe
     * @param {string} web
     */
    constructor(exe: string, web: string);
    exe: string;
    web: string;
}
export function compileBackend(backend: string, exe: string, target: string, npmStatic: string[]): string;
export function build(backend: string, web: string, out: string, name: string, target: string, keepLight: boolean, noWeb?: boolean, npmStatic?: string[]): Promise<Built>;
export function desktop(argv: string[]): Promise<number>;
export type Staged = {
    dir: string;
    manifest: {
        exports: Record<string, string | {
            types: string;
            default: string;
        }>;
    };
};
