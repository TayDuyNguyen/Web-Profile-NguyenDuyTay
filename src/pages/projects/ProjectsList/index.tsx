import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { projectsData, type Project } from "../../../constants/projectsData";
import FilterBar from "./components/FilterBar";
import ProjectGridCard from "./components/ProjectGridCard";

const FILTERS = [
    { key: "all" as const, labelKey: "projects.filter.all" },
    { key: "E-Travel" as const, label: "E-Travel" },
    { key: "E-learning" as const, label: "E-learning" },
    { key: "E-shopping" as const, label: "E-shopping" },
    { key: "Mobile App" as const, label: "Mobile App" },
];

const ProjectsPage = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState("all");

    const filters = FILTERS.map((f) => ({
        key: f.key,
        label: "labelKey" in f ? t(f.labelKey as string) : f.label,
    }));

    const filteredProjects = useMemo<Project[]>(() => {
        if (activeFilter === "all") return projectsData;
        return projectsData.filter((p) => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <div className="min-h-screen bg-background-light">
            <div className="pt-10 pb-10 px-6 md:px-20 lg:px-40 max-w-[1440px] mx-auto">
                {/* Page Header */}
                <div className="flex flex-col gap-3 mb-10">
                    <h1 className="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-tight">
                        {t("projects.title")}
                    </h1>
                    <p className="text-slate-600 text-lg max-w-2xl">
                        {t("projects.description")}
                    </p>
                </div>

                {/* Filter */}
                <FilterBar
                    filters={filters}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectGridCard key={project.id} project={project} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-24 text-slate-400 text-lg">
                        {t("projects.no_results")}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;
