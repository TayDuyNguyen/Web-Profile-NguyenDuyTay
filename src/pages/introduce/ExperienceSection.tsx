import { useTranslation } from "react-i18next";

const experienceIcons = ["auto_awesome", "brush", "edit"];

const ExperienceSection = () => {
    const { t } = useTranslation();

    const items = t("introduce.experience.items", { returnObjects: true }) as {
        role: string;
        company: string;
        time: string;
        desc: string;
    }[];

    return (
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                {t("introduce.experience.title")}
            </h2>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-primary/30 before:to-transparent">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                    >
                        {/* Timeline dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background-light text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <span className="material-symbols-outlined text-sm">
                                {experienceIcons[index]}
                            </span>
                        </div>

                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl border border-primary/10 bg-white/50 backdrop-blur-sm shadow-sm hover:border-primary/40 transition-all">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900">{item.role}</div>
                                <time className="text-xs font-medium text-primary uppercase">
                                    {item.time}
                                </time>
                            </div>
                            <div className="text-sm text-primary font-semibold mb-2">
                                {item.company}
                            </div>
                            <div className="text-slate-500 text-sm">{item.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;
