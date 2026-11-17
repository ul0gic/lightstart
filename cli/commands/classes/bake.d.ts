declare const _default: import("@lightstart/cli").Command<{
    readonly entry: {
        readonly positional: true;
        readonly required: true;
        readonly description: "The app's entry module";
    };
    readonly out: {
        readonly short: "o";
        readonly required: true;
        readonly description: "The module to write";
    };
    readonly scheme: {
        readonly description: "The color schemes to bake, comma-separated (dark,light)";
    };
    readonly theme: {
        readonly description: "A theme module to bake instead of the default preset";
    };
    readonly check: {
        readonly flag: true;
        readonly description: "Compare with the file on disk instead of writing it";
    };
}>;
export default _default;
