import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/locales/en.json";
import jp from "./i18n/locales/jp.json";
import it from "./i18n/locales/it.json";

i18n.use(initReactI18next).init({
   fallbackLng: "jp",
   debug: true,
   resources: {
      en: {
         translation: en
      },
      jp: {
         translation: jp
      },
      it: {
         translation: it
      }
   },
});

export default i18n;