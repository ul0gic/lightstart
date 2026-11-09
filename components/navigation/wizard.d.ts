declare const _default: Omit<{
    tag: string;
    style: boolean;
    props: {
        currentStep: number;
        totalSteps: number;
        showProgress: true;
        showStepCounter: true;
        showHeader: true;
        showNavigation: true;
        modal: false;
        backLabel: string;
        nextLabel: string;
        cancelLabel: string;
        finishLabel: string;
        stepLabel: string;
        canProceed: import("@lightstart/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
    };
    nextStep(): boolean;
    prevStep(): boolean;
    /** @param {number} step */
    goToStep(step: number): boolean;
    handleBackClick(): void;
    handleNextClick(): void;
    updated(): void;
    render(): import("@lightstart/light/html").TemplateResult;
}, "events"> & {
    props?: {
        currentStep: number;
        totalSteps: number;
        showProgress: true;
        showStepCounter: true;
        showHeader: true;
        showNavigation: true;
        modal: false;
        backLabel: string;
        nextLabel: string;
        cancelLabel: string;
        finishLabel: string;
        stepLabel: string;
        canProceed: import("@lightstart/light/types").TypeDefinition<(...args: unknown[]) => unknown>;
    } | undefined;
    events?: {} | undefined;
    mixins?: [] | undefined;
};
export default _default;
