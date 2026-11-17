/**
 * @file A Markdown table as data: the cells in columns, each column's alignment and its rows. The
 * terminal renderer (`@lightstart/tui-markdown/table.ts`) lays one out; the parser fills one from a GFM
 * header, delimiter and body. A cell is its text: a renderer parses it with `parseInline`. `\|` is
 * a bar in a cell, and a bar inside `code` does not split it.
 */
import { Block } from "./nodes.js";
/** A table block: its header, the alignments under it and its rows, all cells as text. */
export class Table extends Block {
    header;
    aligns;
    rows;
    constructor(header, aligns, rows) {
        super();
        this.header = header;
        this.aligns = aligns;
        this.rows = rows;
    }
}
/** The cells of a row: split on bars outside code spans, `\|` a bar in a cell, the outer bars dropped. */
export const cells = (line) => {
    const out = [];
    let buf = "";
    let ticks = 0;
    for (let i = 0; i < line.length; i++) {
        const c = line.charAt(i);
        if (c === "\\" && line.charAt(i + 1) === "|") {
            buf += "|";
            i++;
            continue;
        }
        if (c === "`") {
            let n = 1;
            while (line.charAt(i + n) === "`")
                n++;
            if (ticks === 0)
                ticks = n;
            else if (ticks === n)
                ticks = 0;
            buf += "`".repeat(n);
            i += n - 1;
            continue;
        }
        if (c === "|" && ticks === 0) {
            out.push(buf);
            buf = "";
            continue;
        }
        buf += c;
    }
    out.push(buf);
    const t = line.trim();
    if (t.startsWith("|"))
        out.shift();
    if (t.endsWith("|") && !t.endsWith("\\|"))
        out.pop();
    return out.map((c) => c.trim());
};
/** Whether `line` is the row under a header that gives each column's alignment: dashes, with a colon at either end. */
const isDelimiter = (line) => {
    if (!line.includes("-"))
        return false;
    const cs = cells(line);
    return cs.length > 0 && cs.every((c) => /^:?-+:?$/.test(c));
};
const alignOf = (c) => (c.startsWith(":") && c.endsWith(":") ? "center" : c.endsWith(":") ? "right" : "left");
/** The table whose header stands at `lines[at]` over a delimiter row, and the index after its last row; null when none does. */
export const parseTable = (lines, at) => {
    if (at + 1 >= lines.length || !lines[at].includes("|") || !isDelimiter(lines[at + 1]))
        return null;
    const header = cells(lines[at]);
    const delimiter = cells(lines[at + 1]);
    if (header.length === 0 || header.length !== delimiter.length)
        return null;
    const rows = [];
    let end = at + 2;
    while (end < lines.length && lines[end].includes("|") && lines[end].trim().length > 0) {
        const row = cells(lines[end]);
        while (row.length < header.length)
            row.push("");
        rows.push(row.slice(0, header.length));
        end++;
    }
    return { table: new Table(header, delimiter.map((c) => alignOf(c)), rows), end };
};
