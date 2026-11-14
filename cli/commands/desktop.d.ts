declare const _default: import("@lightstart/cli").Command<{
    readonly command: {
        readonly positional: true;
        readonly description: "shim, smoke, build, run or dev";
    };
    readonly rest: {
        readonly positional: true;
        readonly rest: true;
        readonly description: "The subcommand's arguments";
    };
    readonly target: {
        readonly description: "linux, mac or win (default: linux)";
    };
    readonly wait: {
        readonly flag: true;
        readonly description: "smoke: keep the window until it is closed";
    };
    readonly web: {
        readonly description: "build/run: the page folder";
    };
    readonly out: {
        readonly description: "build/run: the output folder";
    };
    readonly name: {
        readonly description: "build/run: the executable name";
    };
    readonly "keep-light": {
        readonly flag: true;
        readonly description: "build/run: reuse light's staged files";
    };
    readonly "no-web": {
        readonly flag: true;
        readonly description: "build/run: build only the executable";
    };
    readonly "npm-static": {
        readonly description: "build/run: a package the backend imports bare";
    };
    readonly port: {
        readonly description: "dev: the port to serve on";
    };
    readonly attach: {
        readonly flag: true;
        readonly description: "dev: reuse a server already answering";
    };
}>;
export default _default;
