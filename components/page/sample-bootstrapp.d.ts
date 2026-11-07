declare const _default: {
    header: {
        type: string;
        props: {
            brand: {
                logo: string;
                name: string;
                href: string;
            };
            links: {
                label: string;
                href: string;
            }[];
            actions: {
                label: string;
                href: string;
                variant: string;
            }[];
        };
    };
    footer: {
        type: string;
        props: {
            brand: {
                logo: string;
                name: string;
            };
            tagline: string;
            columns: {
                title: string;
                links: {
                    label: string;
                    href: string;
                }[];
            }[];
            copyright: string;
        };
    };
    sections: ({
        type: string;
        props: {
            decorations: import("@bootstrapp/light/html").TemplateResult;
            eyebrow: {
                badge: string;
                label: string;
                meta: string;
                href: string;
            };
            headline: string;
            subheadline: string;
            ctas: {
                label: string;
                href: string;
                variant: string;
            }[];
        };
    } | {
        type: string;
        props: {
            sectionId: string;
            stepMockups: import("@bootstrapp/light/html").TemplateResult[];
            eyebrow: string;
            eyebrowIcon: string;
            headline: string;
            subheadline: string;
            steps: {
                number: string;
                icon: string;
                iconColor: string;
                iconBgColor: string;
                iconBorderColor: string;
                mockupGradientFrom: string;
                mockupGradientTo: string;
                title: string;
                description: string;
                cta: {
                    label: string;
                    href: string;
                };
            }[];
            footerCta: {
                label: string;
                icon: string;
                href: string;
            };
        };
    } | {
        type: string;
        props: {
            sectionId: string;
            variant: string;
            eyebrow: string;
            headline: string;
            subheadline: string;
            features: {
                icon: string;
                title: string;
                description: string;
            }[];
        };
    } | {
        type: string;
        props: {
            sectionId: string;
            eyebrow: string;
            headline: string;
            subheadline: string;
            testimonials: {
                quote: string;
                author: string;
                role: string;
                avatar: string;
                rating: number;
            }[];
        };
    } | {
        type: string;
        props: {
            sectionId: string;
            eyebrow: string;
            headline: string;
            items: {
                question: string;
                answer: string;
            }[];
        };
    } | {
        type: string;
        props: {
            variant: string;
            headline: string;
            subheadline: string;
            ctas: {
                label: string;
                href: string;
                variant: string;
            }[];
        };
    })[];
};
export default _default;
