import { useTranslation } from "react-i18next";

const IntroHeroSection = () => {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            {/* Portrait Image */}
            <div className="lg:col-span-5">
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
                    <div className="absolute inset-0 bg-linear-to-t from-background-dark/40 to-transparent z-10"></div>
                    <img
                        alt={t("introduce.hero.name")}
                        className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfaPlZU9KU2_NS5HAAQIF1gtmTd2GSOAdmtwinz9aRTVGy5teDyUbytBYH9KaTCH9YQp8kHm70Oa0lzfNIZcMAO6kMXRlZO0KaQcmW8mg9G_7x9oz30lCYXtoaMFaqqqQuGPWGwubxSL4aWezPl14EkNpxn8Ts2QXNr0yO70-G9C0DdRuZaQlJRzCW1be7hAMJuRc8M8gRsqVSu3nrmVWa5eEyNKPXHJTwqx_Hma2vfcBRBvUOAJEDeGwgAPaphBz2Q4i9pYZuaic"
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8">
                <div>
                    <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                        {t("introduce.hero.greeting")}
                    </h4>
                    <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1]">
                        {t("introduce.hero.name").split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="text-primary">
                            {t("introduce.hero.name").split(" ").slice(-1)}
                        </span>
                    </h1>
                    <p className="text-xl text-slate-500 mt-6 max-w-2xl font-light">
                        {t("introduce.hero.role")}. {t("introduce.hero.description")}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                        <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                        <span className="text-sm font-medium">{t("introduce.hero.location")}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
                        <span className="material-symbols-outlined text-primary text-sm">work</span>
                        <span className="text-sm font-medium">{t("introduce.hero.experience")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroHeroSection;
