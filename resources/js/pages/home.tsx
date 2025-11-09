import { Head } from '@inertiajs/react';
import TopBar from '../components/TopBar';
import type { TopBarConfig } from '../types/navigation';
import githubLogo from '../assets/github_logo.svg';
import linkedinLogo from '../assets/linkedin_logo.svg';
import heroBackground from '../assets/verthyindia_cover.jpeg';
import profilePicture from '../assets/profile_picture.jpeg';

const topBarConfig: TopBarConfig = {
    siteName: 'Daniel Arias Cámara',
    siteUrl: '#',
    socialLinks: [
        {
            name: 'GitHub',
            url: 'https://github.com/Danie1Arias',
            icon: githubLogo,
            ariaLabel: 'GitHub',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/daniel-a-2b90a811a/',
            icon: linkedinLogo,
            ariaLabel: 'LinkedIn',
        },
    ],
    contactButton: {
        label: 'Contact Me',
        href: '#contact',
    },
};

export default function Home() {
    return (
        <>
            <Head title="Daniel Arias Cámara" />
            <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
                <TopBar config={topBarConfig} />

                <main>
                    <section
                        id="hero"
                        className="relative border-b border-neutral-200 bg-cover bg-center bg-no-repeat py-10 md:py-10 dark:border-neutral-800"
                        style={{
                            backgroundImage: `url(${heroBackground})`,
                        }}
                    >
                        
                        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
                        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
                            <div className="order-1 md:order-2 flex justify-center items-center">
                                <img src={profilePicture} alt="Daniel Arias Cámara" className="h-70 w-70 md:h-90 md:w-90 object-cover rounded-full border-2 border-black dark:border-neutral-800" />
                            </div>
                            <div className="order-2 md:order-1">
                                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Hi, I'm Daniel Arias Cámara.</h1>
                                <p className="mt-4 max-w-prose text-white/90">
                                    Telecommunications Engineer, with a M.Sc. in Computer Security Engineering and Artificial Intelligence.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <a href="#projects" className="rounded-md bg-white px-4 py-2 font-medium text-neutral-900 hover:bg-neutral-100">View Projects</a>
                                    <a href="#contact" className="rounded-md border border-white/80 px-4 py-2 font-medium text-white hover:bg-white/10">Contact Me</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="about" className="border-b border-neutral-200 py-16 dark:border-neutral-800">
                        <div className="mx-auto max-w-6xl px-4">
                            <h2 className="text-2xl font-semibold">About</h2>
                            <p className="mt-4 max-w-3xl text-neutral-600 dark:text-neutral-300">
                                Brief bio, background, and what motivates you. You can expand this later.
                            </p>
                        </div>
                    </section>

                    <section id="projects" className="border-b border-neutral-200 py-16 dark:border-neutral-800">
                        <div className="mx-auto max-w-6xl px-4">
                            <div className="flex items-end justify-between">
                                <h2 className="text-2xl font-semibold">Projects</h2>
                                <a href="#" className="text-sm underline opacity-80 hover:opacity-100">See all</a>
                            </div>
                            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                <article className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
                                    <div className="h-40 w-full rounded-lg bg-neutral-100 dark:bg-neutral-800" />
                                    <h3 className="mt-4 text-lg font-medium">Project Title</h3>
                                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Short description of the project.</p>
                                </article>
                                <article className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
                                    <div className="h-40 w-full rounded-lg bg-neutral-100 dark:bg-neutral-800" />
                                    <h3 className="mt-4 text-lg font-medium">Project Title</h3>
                                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Short description of the project.</p>
                                </article>
                                <article className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
                                    <div className="h-40 w-full rounded-lg bg-neutral-100 dark:bg-neutral-800" />
                                    <h3 className="mt-4 text-lg font-medium">Project Title</h3>
                                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Short description of the project.</p>
                                </article>
                            </div>
                        </div>
                    </section>

                    <section id="experience" className="border-b border-neutral-200 py-16 dark:border-neutral-800">
                        <div className="mx-auto max-w-6xl px-4">
                            <h2 className="text-2xl font-semibold">Experience</h2>
                            <ul className="mt-6 space-y-6">
                                <li className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Role @ Company</p>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-300">What you did, stack, achievements.</p>
                                        </div>
                                        <span className="text-xs opacity-70">2023 — Present</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section id="skills" className="border-b border-neutral-200 py-16 dark:border-neutral-800">
                        <div className="mx-auto max-w-6xl px-4">
                            <h2 className="text-2xl font-semibold">Skills</h2>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <span className="rounded-full border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700">React</span>
                                <span className="rounded-full border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700">TypeScript</span>
                                <span className="rounded-full border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700">Node.js</span>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="py-16">
                        <div className="mx-auto max-w-6xl px-4">
                            <h2 className="text-2xl font-semibold">Contact</h2>
                            <p className="mt-4 max-w-prose text-neutral-600 dark:text-neutral-300">
                                Add your preferred contact method or a form here.
                            </p>
                            <div className="mt-6 flex gap-3">
                                <a href="mailto:you@example.com" className="rounded-md bg-neutral-900 px-4 py-2 text-white dark:bg-white dark:text-neutral-900">Email</a>
                                <a href="#" className="rounded-md border border-neutral-300 px-4 py-2 dark:border-neutral-700">LinkedIn</a>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="border-t border-neutral-200 py-10 dark:border-neutral-800">
                    <div className="mx-auto max-w-6xl px-4 text-sm opacity-70">
                        © {new Date().getFullYear()} Daniel Arias Cámara. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}


