import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/locales/en.json";
import jp from "./i18n/locales/jp.json";
import it from "./i18n/locales/it.json";
import de from "./i18n/locales/de.json";
import pt from "./i18n/locales/pt.json";

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
      },
      de: {
         translation: de
      },
      pt: {
         translation: pt
      }
   },
});

export default i18n;