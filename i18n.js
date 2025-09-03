import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation JSON files
import translationEN from "./src/dictionaries/en.json";
import translationFR from "./src/dictionaries/fr.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  // Add more languages if needed
};

i18next.use(initReactI18next).init({
  resources,
  lng:
    typeof window !== "undefined"
      ? localStorage?.getItem("lang") || "en"
      : "en", // Set default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
