import { useState } from 'react';
import type { TopBarConfig } from '../../types/navigation';
import DesktopNav from './DesktopNav';
import MobileMenuButton from './MobileMenuButton';
import MobileSideMenu from './MobileSideMenu';

type TopBarProps = {
    config: TopBarConfig;
};

export default function TopBar({ config }: TopBarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <SiteLogo siteName={config.siteName} siteUrl={config.siteUrl} />
                    <DesktopNav config={config} />
                    <MobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
                </div>
            </header>
            <MobileSideMenu config={config} isOpen={isMenuOpen} onClose={closeMenu} />
        </>
    );
}

type SiteLogoProps = {
    siteName: string;
    siteUrl?: string;
};

function SiteLogo({ siteName, siteUrl = '#' }: SiteLogoProps) {
    return (
        <a href={siteUrl} className="font-semibold">
            {siteName}
        </a>
    );
}

