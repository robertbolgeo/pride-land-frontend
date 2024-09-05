import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from "./locale/en.json";
import jpJSON from "./locale/jp.json";

// Initialize i18n
i18n.use(initReactI18next).init({
 resources: {
   en: { translation: enJSON },
   jp: { translation: jpJSON },
 }, // Where we're gonna put translations' files
 lng: "jp",     // Set the initial language of the App
});