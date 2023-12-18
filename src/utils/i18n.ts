import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import global_en from "../constants/i18n/en.json";
import global_vi from "../constants/i18n/vi.json";

//validate if we are in development mode or not, in order to add the correct host.
// const getCurrentHost =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:5173"
//     : "LINK TO PROD";

i18n.use(initReactI18next).init({
  // lng: Default language.
  lng: "vi",
  //fallbackLng: Language that will be loaded in case the translations
  //the user is looking for are not available.
  fallbackLng: "vi",
  //interpolation.escapeValue: used to escape the values and avoid XSS attacks.
  //React has this by default
  interpolation: {
    escapeValue: true,
  },
  //resources: an object with the translations to be used in the application.
  resources: {
    en: {
      global: global_en,
    },
    vi: {
      global: global_vi,
    },
  },
  //i18nBackend: receives an object, which we will access to the loadPath property.
});

export default i18n;
