/**
 * @bootstrapp/light/native/tui: the terminal host of the renderer, as one import.
 */
export { ATTR_BOLD, ATTR_DIM, ATTR_INVERSE, ATTR_ITALIC, ATTR_STRIKE, ATTR_UNDERLINE, COLOR_DEFAULT, DEFAULT_STYLE, Style, TRUECOLOR_FLAG, colorName } from "./style.js";
export { colorDepth, colorDepthOf, colorSgr, parseColor, setColorDepth, to256 } from "./color.js";
export type { ColorDepth } from "./color.js";
export { ChangeEvent, CustomEvent, FocusEvent, KeyEvent, MouseEvent, SubmitEvent, UIEvent, WheelEvent } from "./events.js";
export { focusables, hitTest, isFocusable, nextFocusable, scrollBoxOf } from "./focus.js";
export { FLUSH_AFTER, FLUSH_RENDER, FLUSH_VIEWS, FrameScheduler, frames } from "./scheduler.js";
export { HandlerEntry, TAnchor, TBox, TElement, TFragment, TInput, TNode, TRoot, TRun, TSpan, TText, asBool, asEnum, asNumber, asNumberOrNull, asString, childNodes, find } from "./node.js";
export { EVENT_NAMES, TagDefinition, createElement, isDefinedTag, isKnownProp, isKnownTag, kindOf, registerTag } from "./tags.js";
export { dumpTree, textOf } from "./dump.js";
export { codePointWidth, graphemeWidth, graphemes, stringWidth } from "./width.js";
export { Cell, InlineRun, WrappedLine, lineText, wrapRuns } from "./wrap.js";
export { ScrollState, Size, TextLayout, arrange, forgetLayout, inlineRuns, inputRows, layout, measure, scrollBy, scrollStateOf, textLayoutOf } from "./layout.js";
export { Caret, Clip, inputCaretCell, inputVisualRows, paint } from "./paint.js";
export { Screen, diffScreens } from "./screen.js";
export { ALT_SCREEN_OFF, ALT_SCREEN_ON, CLEAR, CSI, CURSOR_HIDE, CURSOR_SHOW, ESC, HOME, MOUSE_OFF, MOUSE_ON, PASTE_OFF, PASTE_ON, RESET, SYNC_END, SYNC_START, cup, sgrTransition } from "./ansi.js";
export { InputDecoder } from "./input.js";
export { backspace, clearInput, del, deleteWord, editorHandleKey, insertText, killToEnd, killToStart, lineEnd, lineStart, moveLeft, moveRight, moveRow, newline, setValue, submit, wordLeft, wordRight } from "./editor.js";
export { Terminal } from "./terminal.js";
export { Renderer } from "./renderer.js";
export { TermHost, TermPrepared } from "./host.js";
export { ClassProp, ClassStyler, STATE_FOCUS, STATE_FOCUS_WITHIN, applyClassProps, classStyler, configureClasses, propBit, reapplyClasses, setStates } from "./classes.js";
export { TSlotPart, projectSlots, rootStart } from "./slots.js";
export { Prop, View, define, mount, unmount } from "./view.js";
export { Line, LineSource, Run } from "./lines.js";
export { LineCopy, LinePress, LineView, lineTemplate } from "./line-view.js";
export { copyRows, rowText, selectRuns, sliceCells } from "./selection.js";
export { Thumb, barCell, thumbOf, topAt } from "./scrollbar.js";
export { SPINNER, TICK_MS, onTick, spinnerAt } from "./ticks.js";
