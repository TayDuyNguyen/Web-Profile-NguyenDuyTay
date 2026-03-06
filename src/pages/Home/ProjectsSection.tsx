import ProjectCard from "../../components/ui/ProjectCard";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { projectsData, type Project } from "../../constants/projectsData";

const ProjectsSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                            {t("home.projects.title")}
                        </h2>
                        <p className="text-slate-600 max-w-xl">
                            {t("home.projects.description")}
                        </p>
                    </div>
                    <Link
                        to="/projects"
                        className="text-primary font-bold flex items-center gap-2 group"
                    >
                        {t("home.projects.all_projects")}{" "}
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project: Project) => (
                        <Link key={project.id} to={`/projects/${project.id}`} className="block">
                            <ProjectCard
                                image={project.images}
                                category={project.category}
                                year="2025"
                                title={t(project.titleKey)}
                                description={t(project.descriptionKey)}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

