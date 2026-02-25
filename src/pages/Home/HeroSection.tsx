import { IMAGES } from "../../constants/home";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Sẵn sàng cho dự án mới
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-slate-900">
                        Xây dựng sản phẩm số
                        chuẩn chỉnh từ đầu
                    </h1>

                    <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                        Biến ý tưởng của bạn thành website và ứng dụng thực tế.
                        Thiết kế đẹp, vận hành ổn định —
                        đúng tiến độ, đúng ngân sách.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all cursor-pointer">
                            Xem dự án
                        </button>
                        <button className="cursor-pointer bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-300
                         transition-all">
                            Về tôi
                        </button>
                    </div>
                </div>

                {/* Portrait Image */}
                <div className="relative group">
                    <div className="absolute -inset-4 rounded-full blur-3xlbg-primary/30 transition-colors"></div>
                    <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-200 border-8 border-white shadow-2xl">
                        <img
                            alt="Portrait of Nguyen Duy Tay"
                            className="w-full h-full object-cover transition-all duration-700"
                            src={IMAGES.avatar1}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
