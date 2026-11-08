declare namespace _default {
    export namespace font {
        export { fontFamily as family };
        export let mono: string;
        export namespace icon {
            let family: string;
        }
        export let normal: string;
        export let medium: string;
        export let semibold: string;
        export let bold: string;
        export let black: string;
        export let handwriting: string;
    }
    export namespace link {
        let color: string;
    }
    export let text: {
        secondary: string;
        color: string;
        muted: string;
        disabled: string;
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        hero: string;
        section: string;
        subhead: string;
        body: string;
        caption: string;
        eyebrow: string;
    };
    export namespace canvas {
        let background: string;
    }
    let color_1: {
        surface: string;
        "surface-light": string;
        "surface-lighter": string;
        "surface-dark": string;
        "surface-darker": string;
        primary: string;
        "primary-lighter": string;
        "primary-light": string;
        "primary-dark": string;
        "primary-darker": string;
        secondary: string;
        "secondary-lighter": string;
        "secondary-light": string;
        "secondary-dark": string;
        "secondary-darker": string;
        success: string;
        "success-lighter": string;
        "success-light": string;
        "success-dark": string;
        "success-darker": string;
        danger: string;
        "danger-lighter": string;
        "danger-light": string;
        "danger-dark": string;
        "danger-darker": string;
        warning: string;
        "warning-lighter": string;
        "warning-light": string;
        "warning-dark": string;
        "warning-darker": string;
        info: string;
        "info-lighter": string;
        "info-light": string;
        "info-dark": string;
        "info-darker": string;
        hover: string;
        focus: string;
        inverse: string;
        "inverse-lighter": string;
        "inverse-light": string;
        "inverse-dark": string;
        "inverse-darker": string;
        accent: string;
        "surface-inverse": string;
    };
    export { color_1 as color };
    export let spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
    };
    export namespace leading {
        export let tight: string;
        let normal_1: string;
        export { normal_1 as normal };
        export let relaxed: string;
    }
    export namespace radius {
        let none: string;
        let sm: string;
        let md: string;
        let lg: string;
        let xl: string;
        let full: string;
        let card: string;
        let panel: string;
        let hero: string;
    }
    export let shadow: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        card: string;
        "card-hover": string;
        nav: string;
    };
    export namespace border {
        export let width: string;
        let color_2: string;
        export { color_2 as color };
    }
    export namespace lc {
        export let input: {
            background: string;
            "border-color": string;
            color: string;
            placeholder: string;
            icon: string;
            "focus-background": string;
            "disabled-background": string;
            "error-border-color": string;
        };
        let panel_1: {
            background: string;
            "hover-background": string;
            "border-color": string;
            "header-background": string;
            "header-color": string;
            "header-border-color": string;
        };
        export { panel_1 as panel };
        export let modal: {
            background: string;
            overlay: string;
            shadow: string;
            "border-color": string;
        };
        export let dropdown: {
            "hover-background": string;
            "border-color": string;
            color: string;
            separator: string;
            shadow: string;
            background: string;
            "active-background": string;
        };
        export let search: {
            "active-result-background": string;
        };
        export let button: {
            background: string;
            color: string;
            "border-width": string;
            "border-color": string;
            "border-radius": string;
            "padding-x": string;
            "font-weight": string;
            "hover-background": string;
            "primary-color": string;
            "secondary-color": string;
            "danger-color": string;
            "warning-color": string;
            "success-color": string;
        };
        let card_1: {
            background: string;
            "border-color": string;
            "hover-border-color": string;
            header: {
                padding: string;
            };
            footer: {
                "border-style": string;
                padding: string;
            };
            color: string;
            "header-background-color": string;
            "header-border-color": string;
            "footer-background-color": string;
            "footer-border-color": string;
        };
        export { card_1 as card };
        export let table: {
            "border-color": string;
            "border-radius": string;
            "header-background": string;
            "header-color": string;
            "row-background": string;
            "row-hover-background": string;
            "cell-font-size": string;
            "cell-color": string;
            "border-width": string;
            shadow: string;
            "cell-padding": string;
        };
        export let badge: {
            "default-background": string;
            "default-color": string;
            "default-border-color": string;
            "success-background": string;
            "success-color": string;
            "success-border-color": string;
            "danger-background": string;
            "danger-color": string;
            "danger-border-color": string;
            "warning-background": string;
            "warning-color": string;
            "warning-border-color": string;
            "info-background": string;
            "info-color": string;
            "info-border-color": string;
        };
        export let list: {
            background: string;
            "hover-background": string;
            "selected-background": string;
            color: string;
            "muted-color": string;
        };
        export let tree: {
            background: string;
            "item-hover-background": string;
            "item-active-background": string;
            "item-indent": string;
            "item-icon-color": string;
        };
        export let tabs: {
            "list-background": string;
            "list-border-color": string;
            color: string;
            "active-color": string;
            background: string;
            "hover-background": string;
            "active-background": string;
            "active-border-color": string;
        };
    }
}
export default _default;
/**
 * Gruvbox Dark Theme
 * Dark theme with warm, retro groove colors
 * Based on the Gruvbox color scheme
 */
declare const fontFamily: "Manrope";
