import { defineRule } from "../define.js";
import { elements } from "../parse/markup.js";

export default defineRule({
  severity: "error",
  description: "A <button> a template draws declares its type: type=\"button\", or type=\"submit\" where that is meant",
  why: "a button with no type is a submit button. Inside a form the browser takes the first one as the form's default button, so Enter in any field clicks it. lc-tag's close button had none, and lc-select draws an lc-tag for each chosen value: every Enter in a field before it removed a value, with nothing on screen saying so. 37 of the 75 buttons the components drew had no type when this rule was written",
  check(ctx) {
    for (const file of ctx.componentFiles()) {
      if (!ctx.viewsIn(file).some((view) => view.isComponent && view.tag)) continue;
      for (const template of ctx.markup(file))
        for (const el of elements(template)) {
          if (el.tag !== "button" || el.attrs.some((attr) => attr.name === "type")) continue;
          ctx.report({
            file,
            offset: el.offset,
            message: "<button> declares no type, so it submits the form it is drawn in; write type=\"button\", or type=\"submit\" where that is meant",
          });
        }
    }
  },
});
