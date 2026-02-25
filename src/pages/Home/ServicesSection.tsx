import ServiceCard from "../../components/ui/ServiceCard";

const services = [
    {
        icon: "brush",
        title: "UI/UX Design",
        description:
            "Thiết kế giao diện người dùng tinh tế và tối ưu hóa trải nghiệm sản phẩm số qua nghiên cứu chuyên sâu.",
    },
    {
        icon: "fingerprint",
        title: "Branding",
        description:
            "Xây dựng bản sắc thương hiệu độc đáo, nhất quán và truyền tải đúng giá trị cốt lõi đến khách hàng.",
    },
    {
        icon: "lightbulb",
        title: "Product Strategy",
        description:
            "Tư vấn chiến lược phát triển sản phẩm dựa trên nhu cầu thị trường và bài toán kinh doanh thực tế.",
    },
];

const ServicesSection = () => {
    return (
        <section className="py-24 bg-white" id="skills">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                        Chuyên môn &amp; Dịch vụ
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Cung cấp các giải pháp toàn diện từ ý tưởng đến sản phẩm số hoàn thiện mang tính thẩm
                        mỹ cao.
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
