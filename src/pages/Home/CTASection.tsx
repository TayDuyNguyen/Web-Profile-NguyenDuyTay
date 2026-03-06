import { useTranslation } from "react-i18next";

const CTASection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-primary rounded-[2.5rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                            {t("home.cta.title")}
                        </h2>
                        <p className="text-white/80 text-lg">
                            {t("home.cta.description")}
                        </p>
                        <button className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                            {t("home.cta.start_project")}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
