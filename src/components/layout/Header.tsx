import { useTranslation } from "react-i18next";
import Select from "../select";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [checkNav, setCheckNav] = useState(0);

    // Toggle Language
    const toggleLanguage = (value: string) => {
        i18n.changeLanguage(value);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const navItems = [
        { key: 'header.home', href: '/', value: 0 },
        { key: 'header.about', href: '/introduce', value: 1 },
        { key: 'header.projects', href: '/projects', value: 2 },
        { key: 'header.skills', href: '/skills', value: 3 },
        { key: 'header.blog', href: '/blog', value: 4 },
    ];

    const langOptions = [
        { label: 'Tiếng Việt', value: 'vi', image: '/vi.png' },
        { label: 'English', value: 'en', image: '/en.png' },
        { label: '日本語', value: 'ja', image: '/ja.png' },
        { label: '中文', value: 'zh', image: '/zh.png' },
        { label: 'Français', value: 'fr', image: '/fr.png' },
    ];

    // Đọc ngôn ngữ hiện tại từ i18n (từ localStorage) để đồng bộ UI Select
    const currentLang = langOptions.find(o => o.value === i18n.language) ?? langOptions[0];

    useEffect(() => {
        const curentItem = navItems.find(item => {
            if (item.href === location.pathname)
                return item;
        });
        if (curentItem) {
            setCheckNav(curentItem.value);
        }
    }, [location])


    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/10">
            <div className="w-full mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src="Logo.png" width={100} height={100} alt="Logo" />
                    {/* <span className="text-xl md:inline hidden font-extrabold tracking-tight text-slate-900 uppercase">
                        Nguyễn Duy Tây
                    </span> */}
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {
                        navItems.map((item) => (
                            <div key={item.key} className="">
                                <NavLink
                                    to={item.href}
                                    className={({ isActive }) => ` hover:text-primary transition-colors  ${isActive ? 'text-primary' : 'text-slate-900'}`}
                                >{t(item.key)}
                                </NavLink>
                                {
                                    checkNav === item.value && (
                                        <div className="w-full h-1 bg-primary/50 rounded-full"></div>
                                    )
                                }
                            </div>
                        ))
                    }
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Select
                        options={langOptions}
                        value={currentLang}
                        onChange={toggleLanguage}
                        icon={<span className="material-symbols-outlined text-lg">language</span>}
                        isSearchable
                    />
                    <button
                        onClick={() => navigate('/contact')}
                        className="hidden md:flex items-center justify-center rounded-full bg-primary text-white px-6 py-2.5 text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                    >
                        {t('header.contact')}
                    </button>
                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        onClick={toggleMenu}>
                        <span className="material-symbols-outlined text-2xl">{
                            isMenuOpen ? 'close' : 'menu'
                        }</span>
                    </button>
                </div>
            </div>
            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed top-20 right-4 w-[calc(50%-1rem)] bg-transparent max-w-sm backdrop-blur-lg rounded-2xl shadow-2xl transition-all duration-300 ease-in-out z-50 ${isMenuOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-4 pointer-events-none'
                }`}>
                <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
                    {
                        navItems.map((item, index) => (
                            <Link
                                to={item.href}
                                key={item.key}
                                className="font-bold text-stone-200 hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                onClick={closeMenu}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animation: isMenuOpen ? 'slideInUp 0.5s ease forwards' : 'none',
                                    opacity: isMenuOpen ? 1 : 0,
                                    textShadow: `
    -1px -1px 0 black,
     1px -1px 0 black,
    -1px  1px 0 black,
     1px  1px 0 black
  `
                                }}
                            >
                                {t(item.key)}
                            </Link>
                        ))
                    }

                    {/* Mobile contact button */}
                    <button
                        className="mt-2 mb-2 flex items-center justify-center rounded-full bg-primary text-white px-8 py-2 text-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                        onClick={() => {
                            closeMenu();
                            navigate('/contact');
                        }}
                    >
                        {t('header.contact')}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
