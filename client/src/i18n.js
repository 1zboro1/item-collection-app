import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          recentItems: "Recent items",
          biggestColl: "Biggest collections",
          collections: "Collections",
          search: "Search..."
        },
      },
      pl: {
        translation: {
          recentItems: "Ostatnie przedmioty",
          biggestColl: "Największe kolekcje",
          collections: "Kolekcje",
          search: "Szukaj..."
        },
      },
    },
  });
