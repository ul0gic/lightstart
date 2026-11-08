export namespace colorScheme {
    let dark: import("../signals/index.js").Signal<boolean>;
    let followsSystem: boolean;
    /**
     * Start from the mode the page declares.
     * @param {string} [mode] `"system"`, `"dark"`, or anything else for light
     */
    function start(mode?: string): void;
    /**
     * Record the reader's choice; from here the page stops following the OS,
     * now and on every later visit.
     * @param {boolean} on
     */
    function choose(on: boolean): void;
    function follow(): void;
    function toggle(): void;
}
export default colorScheme;
