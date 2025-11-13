type CardProps = {
    imageName: string;
    title: string;
    subtitle: string;
    timeframe: string;
};

export default function Card({ imageName, title, subtitle, timeframe }: CardProps) {
    const imageSrc = new URL(`../../assets/${imageName}`, import.meta.url).href;

    return (
        <article className="rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="flex items-start gap-4">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="h-14 w-14 rounded-full object-cover shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-700"
                    />
                    <div>
                        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">{subtitle}</p>
                        <span className="mt-2 block text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400 sm:hidden">
                            {timeframe}
                        </span>
                    </div>
                </div>
                <span className="hidden text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400 sm:block">
                    {timeframe}
                </span>
            </div>
        </article>
    );
}


