import githubLogo from '../assets/github_logo.svg';
import linkedinLogo from '../assets/linkedin_logo.svg';

type TopBarProps = {
    siteName: string;
    githubUrl?: string;
    linkedinUrl?: string;
    contactHref?: string;
};

export default function TopBar({
    siteName,
    githubUrl = '#',
    linkedinUrl = '#',
    contactHref = '#contact',
}: TopBarProps) {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <a href="#" className="font-semibold">
                    {siteName}
                </a>
                <nav className="flex items-center gap-4 text-sm">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        aria-label="GitHub"
                    >
                        <img src={githubLogo} alt="GitHub" className="h-5 w-5 brightness-0 invert" />
                    </a>
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        aria-label="LinkedIn"
                    >
                        <img src={linkedinLogo} alt="LinkedIn" className="h-5 w-5 brightness-0 invert" />
                    </a>
                    <a
                        href={contactHref}
                        className="rounded-md border border-neutral-300 px-4 py-2 font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                    >
                        Contact me
                    </a>
                </nav>
            </div>
        </header>
    );
}
