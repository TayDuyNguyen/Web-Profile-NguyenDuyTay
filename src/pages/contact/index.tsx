import { useTranslation } from "react-i18next";

const ContactPage = () => {
    const { t } = useTranslation();

    const subjectOptions = [
        t("contact.form.subject_options.0"),
        t("contact.form.subject_options.1"),
        t("contact.form.subject_options.2"),
        t("contact.form.subject_options.3"),
    ];

    return (
        <div className="min-h-screen bg-background-light">
            <main className="flex flex-1 flex-col items-center">
                {/* Hero Section / Header */}
                <div className="w-full max-w-[1200px] px-6 py-12 md:py-20 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                        {t("contact.hero.badge")}
                    </span>
                    <h1 className="text-slate-900 text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                        {t("contact.hero.title")}
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {t("contact.hero.description")}
                    </p>
                </div>

                <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 pb-24">
                    {/* Left Column: Info & Socials */}
                    <div className="flex flex-col gap-10">
                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-8 rounded-2xl bg-white border border-primary/5 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-3xl mb-4">mail</span>
                                <h3 className="text-lg font-bold mb-2">
                                    {t("contact.info.email_title")}
                                </h3>
                                <p className="text-slate-600">
                                    {t("contact.info.email_value")}
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-white border border-primary/5 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-3xl mb-4">call</span>
                                <h3 className="text-lg font-bold mb-2">
                                    {t("contact.info.phone_title")}
                                </h3>
                                <p className="text-slate-600">
                                    {t("contact.info.phone_value")}
                                </p>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold">
                                {t("contact.socials.title")}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-primary transition-all group cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">
                                        diversity_3
                                    </span>
                                    <span className="font-medium">
                                        {t("contact.socials.linkedin")}
                                    </span>
                                </a>
                                <a
                                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-primary transition-all group cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">
                                        camera
                                    </span>
                                    <span className="font-medium">
                                        {t("contact.socials.instagram")}
                                    </span>
                                </a>
                                <a
                                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-primary transition-all group cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">
                                        code
                                    </span>
                                    <span className="font-medium">
                                        {t("contact.socials.github")}
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Map Preview / Decorative */}
                        <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-200">
                            <div className="absolute inset-0 from-primary/20 to-transparent"></div>
                            <img
                                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                                alt="Abstract map illustration"
                                src="https://images.unsplash.com/photo-1510313881682-1ced00bf49fa?auto=format&fit=crop&w=800&q=80"
                            />
                            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-primary/10">
                                <p className="text-sm font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                                    {t("contact.map.location")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-primary/5 shadow-xl shadow-primary/5">
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-900 text-sm font-bold px-1">
                                    {t("contact.form.name_label")}
                                </label>
                                <input
                                    className="w-full rounded-xl border-slate-200 bg-background-light text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 p-4 transition-all"
                                    placeholder={t("contact.form.name_placeholder")}
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-900 text-sm font-bold px-1">
                                    {t("contact.form.email_label")}
                                </label>
                                <input
                                    className="w-full rounded-xl border-slate-200 bg-background-light text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 p-4 transition-all"
                                    placeholder={t("contact.form.email_placeholder")}
                                    type="email"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-900 text-sm font-bold px-1">
                                    {t("contact.form.subject_label")}
                                </label>
                                <select className="w-full rounded-xl border-slate-200 bg-background-light text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 p-4 transition-all appearance-none cursor-pointer">
                                    {subjectOptions.map((option, idx) => (
                                        <option key={idx} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-900 text-sm font-bold px-1">
                                    {t("contact.form.message_label")}
                                </label>
                                <textarea
                                    className="w-full rounded-xl border-slate-200 bg-background-light text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 min-h-[160px] p-4 transition-all"
                                    placeholder={t("contact.form.message_placeholder")}
                                ></textarea>
                            </div>
                            <button
                                className="mt-4 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20"
                                type="submit"
                            >
                                {t("contact.form.submit_button")}
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Friendly CTA Section */}
                <div className="w-full bg-primary/5 py-20 px-6">
                    <div className="max-w-[800px] mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            {t("contact.cta.title")}
                        </h2>
                        <p className="text-slate-600 mb-8">
                            {t("contact.cta.description")}
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                className="flex items-center gap-2 text-primary font-bold text-lg underline-offset-4 hover:underline cursor-pointer"
                                href={`mailto:${t("contact.cta.email")}`}
                            >
                                <span className="material-symbols-outlined">alternate_email</span>
                                {t("contact.cta.email")}
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="py-12 px-6 border-t border-primary/10 text-center">
                <p className="text-slate-500 text-sm">
                    {t("contact.footer.copyright")}
                </p>
            </footer>
        </div>
    );
};

export default ContactPage;
