declare namespace _default {
    export namespace font {
        export { fontFamily as family };
        export { fontFamily as heading };
        export let mono: string;
        export let google: never[];
        export let handwriting: string;
        export namespace icon {
            let family: string;
        }
        export let normal: string;
        export let medium: string;
        export let semibold: string;
        export let bold: string;
        export let black: string;
    }
    export namespace link {
        let color: string;
    }
    export let text: {
        color: string;
        secondary: string;
        muted: string;
        disabled: string;
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        hero: string;
        section: string;
        subhead: string;
        body: string;
        caption: string;
        eyebrow: string;
    };
    export let canvas: {
        background: string;
        "font-size": string;
    };
    let color_1: {
        primary: string;
        "primary-light": string;
        "primary-dark": string;
        accent: string;
        secondary: string;
        "secondary-light": string;
        "secondary-dark": string;
        success: string;
        "success-light": string;
        "success-dark": string;
        danger: string;
        "danger-light": string;
        "danger-dark": string;
        warning: string;
        "warning-light": string;
        info: string;
        "info-light": string;
        surface: string;
        "surface-light": string;
        "surface-dark": string;
        "surface-inverse": string;
        hover: string;
        focus: string;
        inverse: string;
        "inverse-dark": string;
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
        let card: string;
        let panel: string;
        let hero: string;
        let full: string;
        let field: string;
        let selector: string;
        let box: string;
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
        field: string;
        box: string;
        focus: string;
    };
    export namespace control {
        let weight: string;
        let transform: string;
        let tracking: string;
    }
    export namespace border {
        export let width: string;
        let color_2: string;
        export { color_2 as color };
    }
    export namespace lc {
        let button: {
            background: string;
            "border-color": string;
            "default-hover-background": string;
        };
    }
    export namespace dark {
        export namespace link_1 {
            let color_3: string;
            export { color_3 as color };
        }
        export { link_1 as link };
        export namespace text_1 {
            let color_4: string;
            export { color_4 as color };
            export let secondary: string;
            export let muted: string;
            export let disabled: string;
        }
        export { text_1 as text };
        export namespace canvas_1 {
            let background: string;
        }
        export { canvas_1 as canvas };
        let color_5: {
            primary: string;
            "primary-light": string;
            "primary-dark": string;
            secondary: string;
            "secondary-light": string;
            "secondary-dark": string;
            surface: string;
            "surface-light": string;
            "surface-dark": string;
            "surface-inverse": string;
            hover: string;
            focus: string;
            inverse: string;
            "inverse-dark": string;
        };
        export { color_5 as color };
        let shadow_1: {
            md: string;
            lg: string;
            "card-hover": string;
            focus: string;
        };
        export { shadow_1 as shadow };
        export namespace border_1 {
            let color_6: string;
            export { color_6 as color };
        }
        export { border_1 as border };
        export namespace lc_1 {
            let button_1: {
                background: string;
                "border-color": string;
                "default-hover-background": string;
            };
            export { button_1 as button };
        }
        export { lc_1 as lc };
    }
}
export default _default;
/**
 * Default theme
 * The framework's own look: ink and one signal colour on cool grey, hairline
 * edges, the platform's own type
 */
declare const fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
