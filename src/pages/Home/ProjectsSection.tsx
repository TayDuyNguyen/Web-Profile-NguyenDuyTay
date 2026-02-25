import ProjectCard from "../../components/ui/ProjectCard";

const projects = [
    {
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCvPmOqMR1Z8tHOIgV5sRxkRykl-fsj4yxOm4i30HuL2IetScvf4qjfXmo-VkMU3F2QQInnfOhQB4jyk_mh3YcuDGX-ovokHsyDd3cxVKCCI6AeptW0PTIu4Dz0_svYqmAkPd2OwmEruBr95GnI0mYKWZfmLeGFFlgOslzUkFKPaqhEvV8n9PIpFHv0-bYCY0Qwr3Oz4N4I0zoDctCs9v0jtUORL8SsdS_I4FhzbCsAo0iC2vBwlMUtEgepkY0eVOaXZK6soAdhmJI",
        category: "E-Commerce",
        year: "2023",
        title: "GenZ Marketplace Platform",
        description: "Tối ưu hóa trải nghiệm mua sắm cho thế hệ người dùng mới.",
    },
    {
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAaQVNAxEFHrgz4hh-DmOyBe4LXUwJtvy7nzgVp5zl5OyunzZP31Q1t46CbRHPDK07hEGLXvRrPgV25OENJIAhnhHUokGH9kfStRe3ADXF_snE1xdYpXrkIGYxzFLW4_agNF-DscOVDL9RB8DzNtSuBEikl3Q28I3du4809IxKwT4QVybDKU8gUU8j8oMmDJE0lF5DOXCoH_OxCb8dl1w8MbrddzlGWPwchownGSeG3eTZjj6RGKQlJq55ZshWF8xHzCDOjMp0jtUU",
        category: "Fintech",
        year: "2024",
        title: "NeoBank App UI Kit",
        description: "Giải pháp quản lý tài chính cá nhân thông minh và trực quan.",
    },
    {
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBnv5utqLRI5EhSsBgdFWEZh-zrME2283iOtpvkC0OO3vPBoKJUF9dblC4QZWntDBw6x0nt85KSzURcVR7iXeeWcBfuqMbkemSGKGAmMnIxHNh5ehT8iyMoKXOgms4NZ-iTV0-7oH62DlgWtyi9R8p3x9pfun4AUY5vTcHlP6ULuHQWzoEyTowywpkYJoORhQ-X8DbZbMVvva7Nx7JFkWHQjn4BiCcf6RLeGE1mZLCIUxIROMS3Q4JRnHirZZOy1FOgHptpONrt41s",
        category: "Smart Home",
        year: "2024",
        title: "Lumina Smart Living",
        description: "Hệ sinh thái điều khiển nhà thông minh đa nền tảng.",
    },
];

const ProjectsSection = () => {
    return (
        <section className="py-24" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                            Dự án tiêu biểu
                        </h2>
                        <p className="text-slate-600 max-w-xl">
                            Những sản phẩm tôi tâm đắc nhất, thể hiện sự kết hợp giữa nghệ thuật và kỹ thuật.
                        </p>
                    </div>
                    <button className="text-primary font-bold flex items-center gap-2 group">
                        Tất cả dự án{" "}
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
