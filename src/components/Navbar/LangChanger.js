import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Box } from "@mui/material";
import "./Navbar.css";

const LangChanger = () => {
  const { i18n } = useTranslation();
  const [setLanguage] = useState(cookies.get("i18next") || "en");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <Box className="btnSlot">
      <button className="lang-btn" onClick={() => changeLanguage("pt")}>
        <span class="fi fi-br" />
      </button>
      <button className="lang-btn" onClick={() => changeLanguage("en")}>
        <span class="fi fi-gb" />
      </button>
    </Box>
  );
};

export default LangChanger;
