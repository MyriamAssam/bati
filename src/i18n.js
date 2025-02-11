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
            fr: { translation: fr }
        },
        lng: localStorage.getItem("i18nextLng") || "fr", // 🔥 Sauvegarde la langue dans localStorage
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

// Sauvegarde automatique de la langue choisie
i18n.on("languageChanged", (lng) => {
    localStorage.setItem("i18nextLng", lng);
});

export default i18n;

