declare const _default: Omit<{
    mixins: [{
        props: {
            _overlayId: Prop<string | null>;
        };
        updated({ changedProps }: {
            changedProps: Map<string, unknown>;
        }): void;
        disconnected(): void;
    } & {
        props?: {
            _overlayId: Prop<string | null>;
        } | undefined;
        events?: {} | undefined;
    }];
    tag: string;
    icons: string[];
    props: {
        open: false;
        title: string;
        message: string;
        variant: Prop<AlertVariant>;
        confirmText: string;
        cancelText: string;
        showCancel: false;
        closeOnBackdropClick: false;
    };
    events: {
        open: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        confirm: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        cancel: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    };
    style: boolean;
    /** @type {HTMLDialogElement | null} */
    _dialog: HTMLDialogElement | null;
    connected(): void;
    /** @param {{ changedProps: Map<string, unknown> }} arg */
    updated({ changedProps }: {
        changedProps: Map<string, unknown>;
    }): void;
    show(): void;
    close(confirmed?: boolean): void;
    confirm(): void;
    cancel(): void;
    /** @param {Event} e */
    handleBackdropClick(e: Event): void;
    /** @param {AlertVariant} variant */
    _getIcon(variant: AlertVariant): string | null;
    render(): import("@bootstrapp/light/html").TemplateResult;
}, "events"> & {
    props?: {
        open: false;
        title: string;
        message: string;
        variant: Prop<AlertVariant>;
        confirmText: string;
        cancelText: string;
        showCancel: false;
        closeOnBackdropClick: false;
    } | undefined;
    events?: {
        open: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        confirm: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
        cancel: import("@bootstrapp/light/types").DeclaredTypeDefinition<unknown, import("@bootstrapp/light/types").TypeOptionsOrDefault>;
    } | undefined;
    mixins?: [{
        props: {
            _overlayId: Prop<string | null>;
        };
        updated({ changedProps }: {
            changedProps: Map<string, unknown>;
        }): void;
        disconnected(): void;
    } & {
        props?: {
            _overlayId: Prop<string | null>;
        } | undefined;
        events?: {} | undefined;
    }] | undefined;
};
export default _default;
import type { Prop } from "../types.js";
import type { AlertVariant } from "../types.js";
