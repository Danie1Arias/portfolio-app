export type SocialLink = {
    name: string;
    url: string;
    icon: string;
    ariaLabel: string;
    invertIcon?: boolean;
};

export type TopBarConfig = {
    siteName: string;
    siteUrl?: string;
    socialLinks: SocialLink[];
    contactButton: {
        label: string;
        href: string;
    };
};

