import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projectsData, type Project } from "../../../constants/projectsData";
import ProjectHero from "./components/ProjectHero";
import ProjectMetaSection from "./components/ProjectMetaSection";
import ProblemSolution from "./components/ProblemSolution";
import ProjectGallery from "./components/ProjectGallery";
import NextProjectCTA from "./components/NextProjectCTA";

const ProjectDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const projectIndex = projectsData.findIndex((p) => p.id === id);
    const project = projectsData[projectIndex] as Project | undefined;
    const nextProject =
        project != null
            ? (projectsData[(projectIndex + 1) % projectsData.length] as Project)
            : null;

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-6">
                <span className="material-symbols-outlined text-6xl text-slate-300">
                    search_off
                </span>
                <p className="text-2xl font-bold text-slate-400">
                    {t("projects.not_found")}
                </p>
                <Link
                    to="/projects"
                    className="px-6 py-3 bg-primary text-white rounded-xl font-bold"
                >
                    {t("projects.back_to_projects")}
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background-light">
            <div className="max-w-[960px] mx-auto px-4 py-8">
                {/* Back button */}
                <button
                    onClick={() => navigate("/projects")}
                    className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 group"
                >
                    <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">
                        arrow_back
                    </span>
                    {t("projects.back_to_projects")}
                </button>

                <ProjectHero project={project} />
                <ProjectMetaSection project={project} />
                <ProblemSolution project={project} />
                <ProjectGallery project={project} />
                {nextProject && <NextProjectCTA nextProject={nextProject} />}
            </div>
        </div>
    );
};

export default ProjectDetailPage;
