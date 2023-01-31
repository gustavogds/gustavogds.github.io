import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie'

const LangChanger = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(cookies.get('i18next') || 'en');

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <select className="lang-selector" onChange={handleLangChange} value={language}>
      <option value="pt">🇧🇷</option>
      <option value="en">🇬🇧</option>
    </select>
    
  );
};

export default LangChanger;
