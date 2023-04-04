import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      characterList: "Harry Potter Character List",
      harryPotter: "Harry Potter",
      home: "Home",
      image: "Image",
      language: "Language",
      loadCharacters: "Load {{series}} Characters",
      loading: "Loading...",
      name: "Name",
    },
  },
  es: {
    translation: {
      characterList: "Lista de Personajes de Harry Potter",
      harryPotter: "Harry Potter",
      home: "Inicio",
      image: "Imagen",
      language: "Lenguaje",
      loadCharacters: "Cargar personajes de {{series}}",
      loading: "Cargando...",
      name: "Nombre",
    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
