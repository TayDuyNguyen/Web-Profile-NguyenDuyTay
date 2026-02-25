import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import CTASection from "./CTASection";

const HomePage = () => {
    return (
        <>
            {/* Section: Hero */}
            <HeroSection />

            {/* Section: Chuyên môn & Dịch vụ */}
            <ServicesSection />

            {/* Section: Dự án tiêu biểu */}
            <ProjectsSection />

            {/* Section: Giới thiệu */}
            <AboutSection />

            {/* Section: Call to Action */}
            <CTASection />
        </>
    );
};

export default HomePage;
