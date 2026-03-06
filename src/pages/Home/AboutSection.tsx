import { useTranslation } from "react-i18next";

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-background-light" id="about">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <div className="relative">
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                        <img
                            alt="Office vibe"
                            className="rounded-3xl shadow-2xl relative z-10"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt7VTLEcvKngsHGd6NX0lDK7tifWbgc_5QhRzY0IZi8bm767o_5IbGzecTaUJOb0r8W_CIf4tOuEJ9tW14Qe1aPhFfaEz2LOce5v2_g8x4LCv_YG87MmaGT09Q1D4NI82ZmN_Zz1tvcxMz-TFYSZfO5FpM76i0cJrIFHXEdEv72PyzdtTaqyfane2-RsI8muzC9QU3S8tL79xnLntk4-nQxolCuAe-LSCh674JLzaoISwNLhKxMyEeXKiXNIuVHauvRXl74175UGo"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-slate-900">{t("home.about.title")}</h2>
                        <p className="text-lg text-slate-600 leading-relaxed italic">
                            {t("home.about.philosophy")}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            {t("home.about.description")}
                        </p>
                        <div className="pt-4">
                            <button className="text-slate-900 font-bold flex items-center gap-2 hover:text-primary transition-colors underline decoration-primary decoration-2 underline-offset-8">
                                {t("home.about.learn_more")}{" "}
                                <span className="material-symbols-outlined">expand_circle_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
