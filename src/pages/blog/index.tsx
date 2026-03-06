import { useTranslation } from "react-i18next";

const BlogPage = () => {
    const { t } = useTranslation();

    const filters = [
        t("blog.filters.all"),
        t("blog.filters.ui_ux"),
        t("blog.filters.typography"),
        t("blog.filters.branding"),
        t("blog.filters.tools"),
        t("blog.filters.case_study"),
    ];

    const posts = [
        {
            category: t("blog.posts.1.category"),
            title: t("blog.posts.1.title"),
            description: t("blog.posts.1.description"),
            date: t("blog.posts.1.date"),
            readTime: t("blog.posts.1.read_time"),
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
        },
        {
            category: t("blog.posts.2.category"),
            title: t("blog.posts.2.title"),
            description: t("blog.posts.2.description"),
            date: t("blog.posts.2.date"),
            readTime: t("blog.posts.2.read_time"),
            image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=800&q=80",
        },
        {
            category: t("blog.posts.3.category"),
            title: t("blog.posts.3.title"),
            description: t("blog.posts.3.description"),
            date: t("blog.posts.3.date"),
            readTime: t("blog.posts.3.read_time"),
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
        },
        {
            category: t("blog.posts.4.category"),
            title: t("blog.posts.4.title"),
            description: t("blog.posts.4.description"),
            date: t("blog.posts.4.date"),
            readTime: t("blog.posts.4.read_time"),
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        },
    ];

    return (
        <div className="min-h-screen bg-background-light">
            <main className="flex flex-1 justify-center py-10">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-6">
                    {/* Hero Title Section */}
                    <div className="flex flex-col gap-4 mb-8">
                        <h1 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-tight">
                            {t("blog.hero.title")}
                        </h1>
                        <p className="text-slate-600 text-lg font-normal max-w-2xl leading-relaxed">
                            {t("blog.hero.description")}
                        </p>
                    </div>

                    {/* Search & Filters */}
                    <div className="flex flex-col gap-6 mb-12">
                        <div className="w-full">
                            <label className="flex flex-col h-14 w-full">
                                <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm bg-white border border-primary/10">
                                    <div className="text-primary flex items-center justify-center px-5">
                                        <span className="material-symbols-outlined text-2xl">search</span>
                                    </div>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 h-full placeholder:text-slate-400 text-base font-normal px-0"
                                        placeholder={t("blog.search.placeholder")}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {filters.map((filter, index) => (
                                <button
                                    key={index}
                                    className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 transition-colors ${index === 0
                                        ? "bg-primary text-white"
                                        : "bg-white border border-primary/10 text-slate-700 hover:bg-primary/5"
                                        }`}
                                >
                                    <span className="text-sm font-medium">{filter}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Featured Post */}
                    <div className="mb-12">
                        <div className="group flex flex-col items-stretch justify-start rounded-xl overflow-hidden md:flex-row bg-white border border-primary/5 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div
                                className="w-full md:w-1/2 bg-center bg-no-repeat aspect-video bg-cover"
                                style={{
                                    backgroundImage: `url("https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=80")`,
                                }}
                            ></div>
                            <div className="flex w-full grow flex-col items-stretch justify-center gap-4 p-6 md:p-8">
                                <div className="flex items-center gap-2">
                                    <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">
                                        {t("blog.featured.badge")}
                                    </span>
                                    <span className="text-slate-400 text-xs">•</span>
                                    <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                                        {t("blog.posts.0.category")}
                                    </span>
                                </div>
                                <h2 className="text-slate-900 text-2xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors cursor-pointer">
                                    {t("blog.posts.0.title")}
                                </h2>
                                <p className="text-slate-600 text-base font-normal leading-relaxed line-clamp-2">
                                    {t("blog.posts.0.description")}
                                </p>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="h-8 w-8 rounded-full bg-slate-200 bg-cover bg-center"
                                            style={{
                                                backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80')`,
                                            }}
                                        ></div>
                                        <div className="flex flex-col">
                                            <p className="text-slate-900 text-sm font-semibold">
                                                {t("blog.posts.0.author")}
                                            </p>
                                            <p className="text-slate-500 text-xs">
                                                {t("blog.posts.0.read_time")}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all">
                                        {t("blog.featured.read_more")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {posts.map((post, index) => (
                            <div key={index} className="group flex flex-col gap-4 bg-transparent cursor-pointer">
                                <div
                                    className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-xl overflow-hidden"
                                    style={{ backgroundImage: `url("${post.image}")` }}
                                ></div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-primary text-xs font-bold uppercase tracking-widest">
                                        {post.category}
                                    </p>
                                    <h3 className="text-slate-900 text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm font-normal line-clamp-2">
                                        {post.description}
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-slate-500 text-xs">{post.date}</span>
                                        <span className="text-slate-300">•</span>
                                        <span className="text-slate-500 text-xs">{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-2 pt-8 border-t border-primary/10">
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-primary/10 hover:bg-primary/5 text-slate-600">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">
                            1
                        </button>
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-primary/10 hover:bg-primary/5 text-slate-700">
                            2
                        </button>
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-primary/10 hover:bg-primary/5 text-slate-700">
                            3
                        </button>
                        <span className="text-slate-400 mx-1">...</span>
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-primary/10 hover:bg-primary/5 text-slate-700">
                            12
                        </button>
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-primary/10 hover:bg-primary/5 text-slate-600">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </main>

            {/* Newsletter / Footer */}
            <footer className="bg-white border-t border-primary/10 py-16 px-6 mt-12">
                <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-slate-900 text-2xl font-bold mb-4">
                            {t("blog.newsletter.title")}
                        </h3>
                        <p className="text-slate-600 mb-6">
                            {t("blog.newsletter.description")}
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="flex-1 rounded-lg border border-primary/10 bg-background-light px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                placeholder={t("blog.newsletter.placeholder")}
                                type="email"
                            />
                            <button className="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                                {t("blog.newsletter.button")}
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col items-start md:items-end justify-between">
                        {/* Remove redundant name heading as we have the common footer or keep minimal version */}
                        <div className="flex items-center gap-3 text-primary mb-6">
                            <div className="h-6 w-6 flex items-center justify-center bg-primary text-white rounded-md">
                                <span className="material-symbols-outlined text-sm">palette</span>
                            </div>
                            <h2 className="text-slate-900 text-lg font-bold uppercase tracking-tighter">
                                NGUYEN VAN A
                            </h2>
                        </div>
                        <div className="flex gap-6 mb-8">
                            <a className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined">public</span>
                            </a>
                            <a className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined">alternate_email</span>
                            </a>
                            <a className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined">share</span>
                            </a>
                        </div>
                        <p className="text-slate-500 text-sm">
                            {t("blog.footer.copyright")}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BlogPage;
