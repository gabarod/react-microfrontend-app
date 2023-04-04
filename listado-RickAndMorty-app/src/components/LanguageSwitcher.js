import React, { useState } from "react";
import i18n from "../utils/i18n";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { t } = useTranslation();
  const [language, handleLanguageChange] = useState();

  const handleChange = (event) => {
    const language = event.target.value;
    handleLanguageChange(language);
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <label htmlFor="language-switcher"> {t("language")}:</label>
      <select id="language-switcher" value={language} onChange={handleChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
