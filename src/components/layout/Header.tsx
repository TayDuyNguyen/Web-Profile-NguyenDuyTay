import { useTranslation } from "react-i18next";
import Select from "../select";

const Header = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = (value: string) => {
        i18n.changeLanguage(value);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src="Logo.png" width={100} height={100} alt="Logo" />
                    <span className="text-xl md:inline hidden font-extrabold tracking-tight text-slate-900 uppercase">
                        Nguyễn Duy Tây
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">
                        {t('header.home')}
                    </a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-600" href="#about">
                        {t('header.about')}
                    </a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-600" href="#projects">
                        {t('header.projects')}
                    </a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-600" href="#skills">
                        {t('header.skills')}
                    </a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-600" href="#blog">
                        {t('header.blog')}
                    </a>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Select options={[
                        { label: 'Tiếng Việt', value: 'vi', image: '/vi.png' },
                        { label: 'English', value: 'en', image: '/en.png' },
                        { label: '日本語', value: 'ja', image: '/ja.png' },
                        { label: '中文', value: 'zh', image: '/zh.png' },
                        { label: 'Français', value: 'fr', image: '/fr.png' },
                    ]} onChange={toggleLanguage} icon={<span className="material-symbols-outlined text-lg">language</span>} isSearchable />
                    <button className="hidden sm:flex items-center justify-center rounded-full bg-primary text-white px-6 py-2.5 text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                        {t('header.contact')}
                    </button>
                    <button className="md:hidden text-slate-900">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
