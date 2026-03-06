import type { Project, ProjectMeta } from "../../../../constants/projectsData";
import { useTranslation } from "react-i18next";

interface Props {
    project: Project;
}

const ProjectMetaSection = ({ project }: Props) => {
    const { t } = useTranslation();

    return (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 border-b border-primary/10 pb-10">
            {project.metadata.map((meta: ProjectMeta, idx: number) => (
                <div key={idx} className="flex flex-col gap-1 p-4 rounded-xl bg-primary/5">
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">
                        {t(meta.labelKey)}
                    </p>
                    <p className="font-semibold text-slate-800">
                        {t(meta.valueKey)}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default ProjectMetaSection;
