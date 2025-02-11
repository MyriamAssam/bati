import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // ✅ Importation correcte
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}> {/* ✅ Doit être ici */}
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
