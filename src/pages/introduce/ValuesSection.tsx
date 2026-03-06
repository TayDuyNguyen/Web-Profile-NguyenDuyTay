import { useTranslation } from "react-i18next";

const valueIcons = ["lightbulb", "diversity_3", "psychology"];

const ValuesSection = () => {
    const { t } = useTranslation();

    const items = t("introduce.values.items", { returnObjects: true }) as {
        title: string;
        desc: string;
    }[];

    return (
        <div className="mb-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {t("introduce.values.title")}
                </h2>
                <p className="text-slate-500">{t("introduce.values.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-2xl bg-white border border-primary/5 hover:bg-primary/5 transition-all group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">{valueIcons[index]}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ValuesSection;
