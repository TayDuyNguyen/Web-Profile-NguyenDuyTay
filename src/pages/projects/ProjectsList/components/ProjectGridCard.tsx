import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Project } from "../../../../constants/projectsData";
import { useTranslation } from "react-i18next";

interface Props {
    project: Project;
}

const ProjectGridCard = ({ project }: Props) => {
    const { t } = useTranslation();

    return (
        <Link
            to={`/projects/${project.id}`}
            className="group flex flex-col gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
        >
            {/* Image Carousel */}
            <div className="relative w-full aspect-16/10 overflow-hidden rounded-xl bg-slate-200">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    autoplay={{ delay: 2500 }}
                    loop={project.images.length > 1}
                    className="w-full h-full"
                >
                    {project.images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <img
                                src={img}
                                alt={t(project.titleKey)}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
                    {project.category}
                </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2 px-1">
                <h3 className="text-slate-900 text-xl font-bold group-hover:text-primary transition-colors">
                    {t(project.titleKey)}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-2">
                    {t(project.descriptionKey)}
                </p>
                <span className="flex items-center gap-1 text-primary text-sm font-bold mt-1">
                    {t("projects.view_detail")}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                    </span>
                </span>
            </div>
        </Link>
    );
};

export default ProjectGridCard;
