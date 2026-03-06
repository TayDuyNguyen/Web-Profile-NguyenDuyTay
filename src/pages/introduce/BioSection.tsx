import { useTranslation } from "react-i18next";

const BioSection = () => {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24 py-16 border-y border-primary/10">
            {/* Title */}
            <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-slate-900">{t("introduce.bio.title")}</h2>
                <div className="h-1 w-12 bg-primary mt-4"></div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>{t("introduce.bio.p1")}</p>
                <p>{t("introduce.bio.p2")}</p>

                <div className="grid grid-cols-2 gap-8 pt-6">
                    <div>
                        <p className="text-primary font-bold text-3xl">50+</p>
                        <p className="text-sm uppercase tracking-wider mt-1">
                            {t("introduce.bio.stats.projects")}
                        </p>
                    </div>
                    <div>
                        <p className="text-primary font-bold text-3xl">12</p>
                        <p className="text-sm uppercase tracking-wider mt-1">
                            {t("introduce.bio.stats.awards")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BioSection;
