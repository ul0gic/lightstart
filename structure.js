/** A range of columns within a line. */
export class Range {
    from;
    to;
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}
/** A block of a Markdown line, with the fields its `kind` uses. */
export class MdBlock {
    kind;
    level = 0;
    mark = null;
    edge = null;
    lang = "";
    ordered = false;
    task = null;
    checkbox = null;
    indent = 0;
    row = "";
    cells = [];
    constructor(kind) {
        this.kind = kind;
    }
}
/** An inline span of a Markdown line, with its marks and any target or name. */
export class MdSpan {
    type;
    from;
    to;
    open;
    close;
    url = "";
    name = "";
    display = "";
    constructor(type, from, to, open, close) {
        this.type = type;
        this.from = from;
        this.to = to;
        this.open = open;
        this.close = close;
    }
}
/** A line's quote depth and the ranges of its quote marks. */
export class MdQuote {
    depth;
    marks;
    constructor(depth, marks) {
        this.depth = depth;
        this.marks = marks;
    }
}
/** One Markdown line's block, quote and inline spans. */
export class MdLine {
    block;
    quote;
    spans;
    constructor(block, quote, spans) {
        this.block = block;
        this.quote = quote;
        this.spans = spans;
    }
}
/** A Markdown line's tokens and its structure, `md` null for another language. */
export class LineResult {
    tokens;
    md;
    constructor(tokens, md) {
        this.tokens = tokens;
        this.md = md;
    }
}
