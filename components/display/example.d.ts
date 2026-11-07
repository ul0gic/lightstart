declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        preview: Prop<(() => import("@bootstrapp/light/html").TemplateValue) | null>;
        code: string;
        language: string;
        title: string;
        description: string;
        view: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "preview";
            readonly enum: readonly ["preview", "code", "both"];
        }>;
        viewport: number;
        viewports: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        skin: string;
        align: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "center";
            readonly enum: readonly ["start", "center"];
        }>;
    };
    events: {
        "view-change": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        "viewport-change": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    _viewOptions(): {
        value: string;
        label: string;
    }[];
    _viewportOptions(): {
        value: string;
        label: string;
        icon: string;
    }[];
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        preview: Prop<(() => import("@bootstrapp/light/html").TemplateValue) | null>;
        code: string;
        language: string;
        title: string;
        description: string;
        view: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "preview";
            readonly enum: readonly ["preview", "code", "both"];
        }>;
        viewport: number;
        viewports: import("@bootstrapp/light/types").DeclaredTypeDefinition<boolean, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        skin: string;
        align: import("@bootstrapp/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "center";
            readonly enum: readonly ["start", "center"];
        }>;
    } | undefined;
    events?: {
        "view-change": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        "viewport-change": import("@bootstrapp/light/types").DeclaredTypeDefinition<Record<string, unknown>, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
