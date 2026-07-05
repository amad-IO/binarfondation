const PageHeader = ({ eyebrow, title, description }) => {
    return (
        <section className="w-full pt-6 lg:pt-10 pb-8 lg:pb-12 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="rounded-[2rem] border border-blue-100/70 bg-gradient-to-br from-blue-50 via-white to-amber-50 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 shadow-[0_18px_45px_rgba(59,130,246,0.08)]">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-blue-700">
                        {eyebrow}
                    </span>
                    <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight max-w-4xl">
                        {title}
                    </h1>
                    <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;