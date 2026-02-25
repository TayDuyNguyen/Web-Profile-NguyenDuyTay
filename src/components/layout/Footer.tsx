import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 md:items-start md:justify-items-center">
                    {/* Brand Column */}
                    <div className="grid grid-cols-1 md:grid-cols-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <img src="Logo.png" alt="Logo" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-slate-500 max-w-sm">
                                {t('footer.brand_desc', 'Kết nối với tôi qua các mạng xã hội để cập nhật những dự án và bài viết mới nhất.')}
                            </p>
                            <div className="flex gap-4 items-center justify-between">
                                <a
                                    className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined text-xl">public</span>
                                </a>
                                <a
                                    className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined text-xl">group</span>
                                </a>
                                <a
                                    className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined text-xl">mail</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Explore Column */}
                    <div>
                        <h5 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">
                            {t('footer.explore', 'Khám phá')}
                        </h5>
                        <ul className="space-y-4 text-slate-500">
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">{t('header.projects')}</a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">{t('footer.services', 'Dịch vụ')}</a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">{t('footer.blog_share', 'Blog chia sẻ')}</a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">{t('footer.about_me', 'Về tôi')}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h5 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">
                            {t('header.contact')}
                        </h5>
                        <ul className="space-y-4 text-slate-500">
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                                duytayqt@gmail.com
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-sm">phone</span>
                                0364 061 026
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                                Nghệ An, VN
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2024 Nguyen Duy Tay. {t('footer.rights')}</p>
                    <div className="flex gap-8">
                        <a className="hover:text-primary" href="#">{t('footer.privacy', 'Privacy Policy')}</a>
                        <a className="hover:text-primary" href="#">{t('footer.terms', 'Terms of Service')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
