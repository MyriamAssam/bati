import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
        },
        lng: localStorage.getItem("i18nextLng") || "fr",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

console.log("✅ i18n initialized:", i18n.language); // Test si i18n est bien chargé

export default i18n;

