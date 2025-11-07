import type { TopBarConfig } from '../../types/navigation';
import ContactButton from './ContactButton';
import SocialLink from './SocialLink';

type DesktopNavProps = {
    config: TopBarConfig;
};

export default function DesktopNav({ config }: DesktopNavProps) {
    return (
        <nav className="hidden items-center gap-4 text-sm md:flex">
            {config.socialLinks.map((link) => (
                <SocialLink key={link.name} link={link} variant="desktop" />
            ))}
            <ContactButton
                label={config.contactButton.label}
                href={config.contactButton.href}
                variant="desktop"
            />
        </nav>
    );
}

