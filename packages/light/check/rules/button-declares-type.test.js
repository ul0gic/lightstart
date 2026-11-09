import assert from "node:assert/strict";
import test from "node:test";
import { runRuleOn } from "../test-utils.js";
import rule from "./button-declares-type.js";

const component = (body) => `import { html } from "@lightstart/light/html";
export default {
  tag: "fx-chip",
  render() { return html\`${body}\`; },
};
`;

test("fires on a button with no type", async () => {
  const findings = await runRuleOn(rule, { "views/chip.js": component('<span><slot></slot><button class="close" @click=${this.close}>x</button></span>') });
  assert.equal(findings.length, 1);
  assert.match(findings[0].message, /type="button"/);
});

test("silent on type=\"button\", type=\"submit\" and type=\"reset\"", async () => {
  const findings = await runRuleOn(rule, { "views/chip.js": component('<button type="button">a</button><button type="submit">b</button><button type="reset">c</button>') });
  assert.equal(findings.length, 0);
});

test("a type bound to an expression is left to the author", async () => {
  const findings = await runRuleOn(rule, { "views/chip.js": component('<button type=${this.type === "submit" ? "submit" : "button"}>a</button>') });
  assert.equal(findings.length, 0);
});

test("fires once per button, each on its own line", async () => {
  const findings = await runRuleOn(rule, { "views/chip.js": component('<button>a</button>\n<button type="button">b</button>\n<button aria-label="c"></button>') });
  assert.equal(findings.length, 2);
  assert.equal(findings[1].line, findings[0].line + 2);
});

test("another element with no type has nothing to declare", async () => {
  const findings = await runRuleOn(rule, { "views/chip.js": component('<input /><a href="/x">x</a><lc-button>y</lc-button>') });
  assert.equal(findings.length, 0);
});
