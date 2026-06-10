const PageHeader = ({ eyebrow, title, description }) => {
    return (
        <section className="w-full pt-6 lg:pt-10 pb-8 lg:pb-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-[2rem] border border-slate-100 bg-slate-50/90 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 shadow-sm">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-blue-600">
                        {eyebrow}
                    </span>
                    <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight max-w-3xl">
                        {title}
                    </h1>
                    <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;