import ServiceCard from "../../components/ui/ServiceCard";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: "brush",
            title: t("home.services.items.0.title"),
            description: t("home.services.items.0.description"),
        },
        {
            icon: "fingerprint",
            title: t("home.services.items.1.title"),
            description: t("home.services.items.1.description"),
        },
        {
            icon: "lightbulb",
            title: t("home.services.items.2.title"),
            description: t("home.services.items.2.description"),
        },
    ];

    return (
        <section className="py-24 bg-white" id="skills">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                        {t("home.services.title")}
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        {t("home.services.description")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
