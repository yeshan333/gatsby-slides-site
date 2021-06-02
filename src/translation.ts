import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEn from "./locales/en/translation.json";
import translationEs from "./locales/es/translation.json";
import translationZh_CN from "./locales/zh-CN/translation.json";

// https://react.i18next.com/legacy-v9/i18next-instance

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEn,
      },
      es: {
        translations: translationEs,
      },
      zh_CN: {
        translations: translationZh_CN,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;