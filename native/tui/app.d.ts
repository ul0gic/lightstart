/**
 * @bootstrapp/light/native/app: an app on a terminal in one call. `runApp`
 * puts a renderer over the terminal given (a `Terminal` on the screen, a
 * `TestTerminal` in a test), installs the classes styler when the app brings
 * one, mounts the app's view at the root, gives `focus` the focus from the
 * first frame (an `autofocus` attribute does the same from a template) and
 * starts the renderer. A key goes to `onKey` first, before the focused
 * element sees it; a Ctrl+C it did not take quits the process. Answers the
 * renderer.
 */
import { ClassStyler } from "./classes.js";
import { KeyEvent } from "./events.js";
import { TElement } from "./node.js";
import { Renderer } from "./renderer.js";
import { Terminal } from "./terminal.js";
import { View } from "./view.js";
/** What `runApp` takes: the app's view, the terminal, the classes styler when there is one, the element focused from the start, and the app's own keys. */
export interface AppOptions {
    app: View;
    term: Terminal;
    classes?: ClassStyler | null;
    focus?: TElement | null;
    onKey?: ((renderer: Renderer, e: KeyEvent) => boolean) | null;
}
export declare const runApp: ({ app, term, classes, focus, onKey }: AppOptions) => Renderer;
