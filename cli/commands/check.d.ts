declare const _default: import("@lightstart/cli").Command<{
    readonly root: {
        readonly description: "The project root (default: the nearest package.json above each target)";
    };
    readonly rule: {
        readonly description: "Run one rule by id";
    };
    readonly json: {
        readonly flag: true;
        readonly description: "Print the result as JSON";
    };
    readonly targets: {
        readonly positional: true;
        readonly rest: true;
        readonly description: "Each folder to check (default: the current folder)";
    };
}>;
export default _default;
