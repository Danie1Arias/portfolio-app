import type { SocialLink as SocialLinkType } from '../../types/navigation';

type SocialLinkProps = {
    link: SocialLinkType;
    variant?: 'desktop' | 'mobile';
    onClose?: () => void;
};

export default function SocialLink({ link, variant = 'desktop', onClose }: SocialLinkProps) {
    const baseClasses = 'inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700';
    const iconClasses = link.invertIcon !== false ? 'h-5 w-5 brightness-0 invert' : 'h-5 w-5';

    if (variant === 'mobile') {
        return (
            <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
                className="flex items-center gap-3 rounded-md border border-neutral-200 px-4 py-3 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
                <img src={link.icon} alt={link.ariaLabel} className={iconClasses} />
                <span className="font-medium">{link.name}</span>
            </a>
        );
    }

    return (
        <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className={`${baseClasses} h-9 w-9`}
            aria-label={link.ariaLabel}
        >
            <img src={link.icon} alt={link.ariaLabel} className={iconClasses} />
        </a>
    );
}

