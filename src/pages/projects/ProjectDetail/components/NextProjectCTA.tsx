import { Link } from "react-router-dom";
import type { Project } from "../../../../constants/projectsData";
import { useTranslation } from "react-i18next";

interface Props {
    nextProject: Project;
}

const NextProjectCTA = ({ nextProject }: Props) => {
    const { t } = useTranslation();

    return (
        <section className="bg-primary/5 rounded-2xl p-8 mb-10 border border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                    <h4 className="text-sm font-bold text-primary uppercase tracking-widest">
                        {t("projects.detail.next_project")}
                    </h4>
                    <h2 className="text-2xl font-bold">{t(nextProject.titleKey)}</h2>
                    <p className="text-slate-600">{t(nextProject.descriptionKey)}</p>
                </div>
                <Link
                    to={`/projects/${nextProject.id}`}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:translate-x-1 transition-all duration-300 whitespace-nowrap"
                >
                    {t("projects.detail.next_btn")}
                    <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
            </div>
        </section>
    );
};

export default NextProjectCTA;
