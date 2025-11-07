import type { TopBarConfig } from '../../types/navigation';
import ContactButton from './ContactButton';
import SocialLink from './SocialLink';

type MobileSideMenuProps = {
    config: TopBarConfig;
    isOpen: boolean;
    onClose: () => void;
};

export default function MobileSideMenu({ config, isOpen, onClose }: MobileSideMenuProps) {
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/50 transition-opacity md:hidden"
                onClick={onClose}
                aria-hidden="true"
            />
            {/* Side Menu */}
            <aside
                className="fixed right-0 top-0 z-50 h-full w-64 transform border-l border-neutral-200 bg-white shadow-lg transition-transform duration-300 ease-in-out dark:border-neutral-800 dark:bg-neutral-900 md:hidden translate-x-0"
                aria-label="Mobile menu"
            >
                <div className="flex h-full flex-col p-6">
                    <MenuHeader siteName={config.siteName} onClose={onClose} />
                    <nav className="flex flex-col gap-4">
                        {config.socialLinks.map((link) => (
                            <SocialLink
                                key={link.name}
                                link={link}
                                variant="mobile"
                                onClose={onClose}
                            />
                        ))}
                        <ContactButton
                            label={config.contactButton.label}
                            href={config.contactButton.href}
                            variant="mobile"
                            onClose={onClose}
                        />
                    </nav>
                </div>
            </aside>
        </>
    );
}

type MenuHeaderProps = {
    siteName: string;
    onClose: () => void;
};

function MenuHeader({ siteName, onClose }: MenuHeaderProps) {
    return (
        <div className="mb-8 flex items-center justify-between">
            <span className="font-semibold">{siteName}</span>
            <button
                type="button"
                onClick={onClose}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                aria-label="Close menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
        </div>
    );
}

