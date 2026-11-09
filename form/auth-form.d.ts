declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        mode: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "register";
            readonly enum: readonly ["login", "register"];
        }>;
        showTabs: true;
        showOAuth: true;
        showGuest: true;
        loginLabel: string;
        registerLabel: string;
        loginTitle: string;
        registerTitle: string;
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        submitLoginLabel: string;
        submitRegisterLabel: string;
        oauthDividerLabel: string;
        googleLabel: string;
        appleLabel: string;
        guestLabel: string;
        passwordLabel: string;
        passwordPlaceholder: string;
        confirmPasswordLabel: string;
        confirmPasswordPlaceholder: string;
        name: string;
        email: string;
        password: string;
        passwordConfirm: string;
        error: string;
        loading: false;
    };
    /** @param {"login" | "register"} newMode */
    handleModeChange(newMode: "login" | "register"): void;
    handleSubmit(): void;
    /** @param {"google" | "apple"} provider */
    handleOAuth(provider: "google" | "apple"): void;
    handleGuest(): void;
    /** @param {KeyboardEvent} e */
    handleKeyPress(e: KeyboardEvent): void;
    /** @param {string} message */
    setError(message: string): void;
    render(): import("@lightstart/light/html").TemplateResult;
    renderTabs(): import("@lightstart/light/html").TemplateResult;
    renderOAuthButtons(): import("@lightstart/light/html").TemplateResult;
    renderGuestOption(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        mode: import("@lightstart/light/types").DeclaredTypeDefinition<string, {
            readonly defaultValue: "register";
            readonly enum: readonly ["login", "register"];
        }>;
        showTabs: true;
        showOAuth: true;
        showGuest: true;
        loginLabel: string;
        registerLabel: string;
        loginTitle: string;
        registerTitle: string;
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        submitLoginLabel: string;
        submitRegisterLabel: string;
        oauthDividerLabel: string;
        googleLabel: string;
        appleLabel: string;
        guestLabel: string;
        passwordLabel: string;
        passwordPlaceholder: string;
        confirmPasswordLabel: string;
        confirmPasswordPlaceholder: string;
        name: string;
        email: string;
        password: string;
        passwordConfirm: string;
        error: string;
        loading: false;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
