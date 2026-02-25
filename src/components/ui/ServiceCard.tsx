interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
    return (
        <div className="p-8 rounded-2xl border border-slate-100 bg-background-light hover:border-primary/50 transition-all group">
            <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
    );
};

export default ServiceCard;
