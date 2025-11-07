export type SocialLink = {
    name: string;
    url: string;
    icon: string;
    ariaLabel: string;
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

