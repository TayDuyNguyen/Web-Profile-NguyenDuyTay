import { useTranslation } from "react-i18next";

const SkillsPage = () => {
    const { t } = useTranslation();

    const technicalSkills = [
        { key: "figma", icon: "draw" },
        { key: "adobe", icon: "palette" },
        { key: "ae", icon: "movie" },
        { key: "webflow", icon: "code" },
        { key: "react", icon: "layers" },
        { key: "design_system", icon: "dashboard_customize" }
    ];

    const processSteps = [
        { key: "research", icon: "search" },
        { key: "wireframe", icon: "view_quilt" },
        { key: "prototype", icon: "ads_click" },
        { key: "test", icon: "check_circle" }
    ];

    return (
        <div className="min-h-screen bg-background-light">
            <main className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-6 md:px-20 lg:px-40 py-12">
                {/* Hero Section */}
                <section className="mb-16">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <span className="inline-block w-fit px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
                            {t("skills.hero.badge")}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900">
                            {t("skills.hero.title")}
                        </h1>
                        <p className="text-lg text-slate-600">
                            {t("skills.hero.description")}
                        </p>
                    </div>
                </section>

                {/* Technical Skills Grid */}
                <section className="mb-20">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">terminal</span>
                            {t("skills.technical.title")}
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {technicalSkills.map((skill, index) => (
                            <div key={index} className="group flex flex-col gap-4 rounded-xl border border-primary/10 bg-white p-6 transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-2xl">{skill.icon}</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        {t(`skills.technical.skills.${index}.title`)}
                                    </h3>
                                    <p className="text-xs text-slate-500">
                                        {t(`skills.technical.skills.${index}.desc`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Design Process Visual Guide */}
                <section className="mb-20">
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-primary">schema</span>
                            {t("skills.process.title")}
                        </h2>
                        <p className="text-slate-600">
                            {t("skills.process.subtitle")}
                        </p>
                    </div>
                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Connection Line (Desktop) */}
                        <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-primary/10 -z-10"></div>

                        {processSteps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center group">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white border-4 border-primary shadow-lg transition-transform group-hover:scale-110">
                                    <span className="material-symbols-outlined text-3xl text-primary">{step.icon}</span>
                                </div>
                                <div className="px-4">
                                    <h4 className="mb-2 text-lg font-bold text-slate-900">
                                        {t(`skills.process.steps.${index}.title`)}
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {t(`skills.process.steps.${index}.desc`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tools Section / CTA */}
                <section className="rounded-2xl bg-primary/5 p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 tracking-tight">
                                {t("skills.cta.title")}
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                {t("skills.cta.description")}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[20px]">send</span>
                                    {t("skills.cta.contact_btn")}
                                </button>
                                <button className="px-8 py-3 bg-white text-primary font-bold rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
                                    {t("skills.cta.portfolio_btn")}
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-primary to-purple-400 overflow-hidden shadow-2xl relative">
                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                    <span className="material-symbols-outlined text-[200px] text-white">blur_on</span>
                                </div>
                                {/* Removed the arbitrary googleusercontent image from HTML for a clean background or generic dev placeholder */}
                                <img
                                    alt="Workspace"
                                    className="w-full h-full object-cover mix-blend-overlay"
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 p-4 bg-white rounded-lg shadow-xl border border-primary/10">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined">bolt</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                                            {t("skills.cta.status_label")}
                                        </p>
                                        <p className="text-sm font-bold text-slate-900">
                                            {t("skills.cta.status_value")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SkillsPage;
