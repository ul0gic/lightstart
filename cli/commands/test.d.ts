declare const _default: import("@lightstart/cli").Command<{
    readonly headed: {
        readonly flag: true;
        readonly description: "A visible browser";
    };
    readonly timeout: {
        readonly description: "How long one file may take (default: 420000ms)";
    };
    readonly root: {
        readonly description: "The folder to serve (default: the current folder)";
    };
    readonly files: {
        readonly positional: true;
        readonly rest: true;
        readonly description: "Test files (none: run the extension groups)";
    };
}>;
export default _default;
