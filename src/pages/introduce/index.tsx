import IntroHeroSection from "./IntroHeroSection";
import BioSection from "./BioSection";
import ExperienceSection from "./ExperienceSection";
import ValuesSection from "./ValuesSection";

const IntroducePage = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
            {/* Section: Hero với ảnh chân dung lớn */}
            <IntroHeroSection />

            {/* Section: Câu chuyện / Bio */}
            <BioSection />

            {/* Section: Timeline sự nghiệp */}
            <ExperienceSection />

            {/* Section: Giá trị cốt lõi */}
            <ValuesSection />
        </div>
    );
};

export default IntroducePage;
