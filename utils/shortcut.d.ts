export function parseShortcut(text: string): Shortcut;
export function matchesShortcut(event: {
    key: string;
    ctrlKey: boolean;
    metaKey: boolean;
    altKey: boolean;
    shiftKey: boolean;
}, shortcut: Shortcut): boolean;
export function shortcutKeys(shortcut: Shortcut, os: string): string[];
export type Shortcut = {
    key: string;
    mod: boolean;
    ctrl: boolean;
    meta: boolean;
    alt: boolean;
    shift: boolean;
};
