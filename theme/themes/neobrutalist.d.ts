declare namespace _default {
    namespace font {
        let family: string;
        let heading: string;
        let mono: string;
        let google: string[];
        let handwriting: string;
        namespace icon {
            let family_1: string;
            export { family_1 as family };
        }
        let normal: string;
        let medium: string;
        let semibold: string;
        let bold: string;
        let black: string;
    }
    namespace link {
        export { ink as color };
    }
    let text: {
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
    namespace canvas {
        let background: string;
    }
    let color: {
        primary: string;
        secondary: string;
        accent: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
        surface: string;
        "surface-light": string;
        "surface-dark": string;
        "surface-inverse": string;
        hover: string;
        focus: string;
        inverse: string;
    };
    let spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
    };
    namespace leading {
        export let tight: string;
        let normal_1: string;
        export { normal_1 as normal };
        export let relaxed: string;
    }
    namespace radius {
        let none: string;
        let sm: string;
        let md: string;
        let lg: string;
        let xl: string;
        let full: string;
        let field: string;
        let selector: string;
        let box: string;
        let card: string;
        let panel: string;
        let hero: string;
    }
    let shadow: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        field: string;
        box: string;
        focus: string;
        card: string;
        "card-hover": string;
        nav: string;
    };
    namespace border {
        export let width: string;
        export { edge as color };
    }
    namespace motion {
        let lift: string;
        let press: string;
    }
    namespace control {
        let weight: string;
        let transform: string;
        let tracking: string;
    }
    namespace lc {
        let button: {
            "border-color": string;
            "hover-shadow": string;
            "active-shadow": string;
            "primary-color": string;
            "warning-color": string;
            "success-color": string;
        };
        let checkbox: {
            "border-color": string;
            "checked-border-color": string;
        };
        let input: {
            "border-color": string;
            "focus-border-color": string;
        };
        let label: {
            "font-weight": string;
        };
        let table: {
            "header-font-weight": string;
        };
    }
    namespace dark {
        export namespace link_1 {
            let color_1: string;
            export { color_1 as color };
        }
        export { link_1 as link };
        export namespace text_1 {
            let color_2: string;
            export { color_2 as color };
            export let secondary: string;
            export let muted: string;
        }
        export { text_1 as text };
        export namespace canvas_1 {
            let background_1: string;
            export { background_1 as background };
        }
        export { canvas_1 as canvas };
        let color_3: {
            surface: string;
            "surface-light": string;
            "surface-dark": string;
            "surface-inverse": string;
            hover: string;
            focus: string;
            inverse: string;
        };
        export { color_3 as color };
        export namespace border_1 {
            let color_4: string;
            export { color_4 as color };
        }
        export { border_1 as border };
        let shadow_1: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            field: string;
            box: string;
            focus: string;
            card: string;
            "card-hover": string;
            nav: string;
        };
        export { shadow_1 as shadow };
        export namespace lc_1 {
            let button_1: {
                "border-color": string;
                "hover-shadow": string;
            };
            export { button_1 as button };
            let checkbox_1: {
                "border-color": string;
                "checked-border-color": string;
            };
            export { checkbox_1 as checkbox };
            let input_1: {
                "border-color": string;
                "focus-border-color": string;
            };
            export { input_1 as input };
        }
        export { lc_1 as lc };
    }
}
export default _default;
/**
 * Neobrutalist
 * Thick black borders, hard offset shadows, uppercase controls
 */
declare const ink: "#1a1a1a";
declare const edge: "#000000";
