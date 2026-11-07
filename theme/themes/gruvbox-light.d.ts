declare namespace _default {
    let color: {
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
        surface: string;
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
        inverse: string;
        "inverse-lighter": string;
        "inverse-light": string;
        "inverse-dark": string;
        "inverse-darker": string;
        accent: string;
        hover: string;
        focus: string;
        "surface-inverse": string;
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
    namespace canvas {
        let background: string;
    }
    let text: {
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
    namespace font {
        let mono: string;
        let normal: string;
        let medium: string;
        let semibold: string;
        let bold: string;
        let black: string;
        let handwriting: string;
    }
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
        card: string;
        "card-hover": string;
        nav: string;
    };
    namespace border {
        export let width: string;
        let color_1: string;
        export { color_1 as color };
    }
    namespace dark {
        export namespace text_1 {
            let color_2: string;
            export { color_2 as color };
            export let secondary: string;
            export let muted: string;
            export let disabled: string;
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
            "surface-lighter": string;
            "surface-dark": string;
            "surface-darker": string;
            "surface-inverse": string;
            hover: string;
        };
        export { color_3 as color };
        export namespace border_1 {
            let color_4: string;
            export { color_4 as color };
        }
        export { border_1 as border };
    }
}
export default _default;
