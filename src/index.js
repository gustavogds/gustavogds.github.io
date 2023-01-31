import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEn from './assets/locales/en/translationEn.js'
import translationPt from './assets/locales/pt/translationPt.js'
import translation from './assets/locales/pt/translation.json'

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";

import "./index.css";
import App from "./App";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationEn },
      pt: { translation: translationPt },
    },
    supportedLngs: ['en', 'pt'],
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    interpolation: { escapeValue: false },
  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
