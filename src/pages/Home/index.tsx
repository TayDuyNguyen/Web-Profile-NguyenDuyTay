import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import CTASection from "./CTASection";

const HomePage = () => {
    return (
        <>
            <div >
                <video autoPlay loop muted className="w-full">
                    <source src="https://res.cloudinary.com/dyragzjcd/video/upload/v1772615065/video_demo_v1_grgpet.mp4" type="video/mp4" />
                </video>
            </div>
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
