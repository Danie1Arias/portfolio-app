type ContactButtonProps = {
    label: string;
    href: string;
    variant?: 'desktop' | 'mobile';
    onClose?: () => void;
};

export default function ContactButton({ label, href, variant = 'desktop', onClose }: ContactButtonProps) {
    const baseClasses = 'rounded-md border border-neutral-300 font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800';

    if (variant === 'mobile') {
        return (
            <a
                href={href}
                onClick={onClose}
                className={`${baseClasses} px-4 py-3 text-center`}
            >
                {label}
            </a>
        );
    }

    return (
        <a
            href={href}
            className={`${baseClasses} px-4 py-2`}
        >
            {label}
        </a>
    );
}

