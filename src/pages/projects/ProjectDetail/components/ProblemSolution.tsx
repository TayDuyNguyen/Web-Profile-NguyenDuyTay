import type { Project } from "../../../../constants/projectsData";
import { useTranslation } from "react-i18next";

interface Props {
    project: Project;
}

const ProblemSolution = ({ project }: Props) => {
    const { t } = useTranslation();

    return (
        <section className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Problem */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-3xl">error</span>
                    </div>
                    <h2 className="text-2xl font-bold">{t("projects.detail.problem")}</h2>
                </div>
                <div className="space-y-3">
                    <p className="text-lg font-medium text-slate-700">
                        {t(project.problemTitleKey)}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        {t(project.problemDescKey)}
                    </p>
                </div>
            </div>

            {/* Solution */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-3xl">lightbulb</span>
                    </div>
                    <h2 className="text-2xl font-bold">{t("projects.detail.solution")}</h2>
                </div>
                <div className="space-y-3">
                    <p className="text-lg font-medium text-slate-700">
                        {t(project.solutionTitleKey)}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        {t(project.solutionDescKey)}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
