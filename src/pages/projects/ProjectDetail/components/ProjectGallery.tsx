import type { Project } from "../../../../constants/projectsData";
import { useTranslation } from "react-i18next";

interface Props {
    project: Project;
}

const ProjectGallery = ({ project }: Props) => {
    const { t } = useTranslation();

    return (
        <section className="mb-16">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">photo_library</span>
                {t("projects.detail.gallery")}
            </h3>
            <div className="flex flex-col gap-8">
                {project.images.slice(0, 5).map((img, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl overflow-hidden border border-primary/10 shadow-sm bg-white"
                    >
                        <img
                            src={img}
                            alt={`${t(project.titleKey)} - ${idx + 1}`}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectGallery;
