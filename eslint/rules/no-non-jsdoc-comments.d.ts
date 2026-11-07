export default rule;
export type Comment = ReturnType<import("eslint").SourceCode["getAllComments"]>[number];
export type SourceLocation = import("eslint").AST.SourceLocation;
/** @type {import("eslint").Rule.RuleModule} */
declare const rule: import("eslint").Rule.RuleModule;
