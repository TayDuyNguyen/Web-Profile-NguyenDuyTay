import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './lang/en.json';
import vi from './lang/vi.json';
import ja from './lang/ja.json';
import zh from './lang/zh.json';
import fr from './lang/fr.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            vi: { translation: vi },
            en: { translation: en },
            ja: { translation: ja },
            zh: { translation: zh },
            fr: { translation: fr },
        },
        detection: {
            order: ['localStorage'],
            caches: ['localStorage']
        },
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
