import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      characterList: "Rick and Morty's Character List",
      home: "Home",
      image: "Image",
      language: "Language",
      loadCharacters: "Load {{series}} Characters",
      loading: "Loading...",
      name: "Name",
      rickAndMorty: "Rick and Morty",
    },
  },
  es: {
    translation: {
      characterList: "Lista de Personajes de Rick y Morty",
      home: "Inicio",
      image: "Imagen",
      language: "Lenguaje",
      loadCharacters: "Cargar personajes de {{series}}",
      loading: "Cargando...",
      name: "Nombre",
      rickAndMorty: "Rick y Morty",
    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
