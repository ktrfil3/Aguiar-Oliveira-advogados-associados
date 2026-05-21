import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <LanguageProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </LanguageProvider>
  </Router>
);

