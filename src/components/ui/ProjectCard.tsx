interface ProjectCardProps {
    image: string;
    category: string;
    year: string;
    title: string;
    description: string;
}

const ProjectCard = ({ image, category, year, title, description }: ProjectCardProps) => {
    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-6 bg-slate-200">
                <img
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={image}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold">
                        Xem chi tiết
                    </span>
                </div>
            </div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                {category} • {year}
            </h4>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-slate-600 text-sm">{description}</p>
        </div>
    );
};

export default ProjectCard;
