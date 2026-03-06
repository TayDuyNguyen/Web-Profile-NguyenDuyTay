import { Autoplay, Navigation, Pagination as SwiperPagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Project } from "../../../../constants/projectsData";
import { useTranslation } from "react-i18next";

interface Props {
    project: Project;
}

const ProjectHero = ({ project }: Props) => {
    const { t } = useTranslation();

    return (
        <section className="mb-10">
            <div className="relative overflow-hidden rounded-2xl h-[280px] md:h-[440px] bg-primary/5 shadow-lg">
                <Swiper
                    modules={[Autoplay, Navigation, SwiperPagination]}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    loop={project.images.length > 1}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full h-full project-detail-swiper"
                >
                    {project.images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${img})` }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Overlay with title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-linear-to-t from-black/70 to-transparent z-10 pointer-events-none">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/30 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm mb-3">
                        {project.category}
                    </span>
                    <h1 className="text-2xl md:text-4xl font-black text-white leading-tight">
                        {t(project.titleKey)}
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default ProjectHero;
