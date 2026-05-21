import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container">
        {/* Column 1: Navigation shortcuts */}
        <div className="footer-col">
          <div className="footer-item">
            <Link to="/">{t("home")}</Link>
          </div>
          <div className="footer-item">
            <Link to="/about">{t("about")}</Link>
          </div>
          <div className="footer-item">
            <Link to="/works">{t("services")}</Link>
          </div>
          <div className="footer-item">
            <Link to="/blog">{t("blog")}</Link>
          </div>
          <div className="footer-item">
            <Link to="/contact">{t("contact")}</Link>
          </div>
        </div>

        {/* Column 2: Contacts & Socials */}
        <div className="footer-col">
          <div className="footer-item">
            <a href="https://wa.me/5595991381406" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div className="footer-item">
            <a href="#">Instagram</a>
          </div>
          <div className="footer-item">
            <a href="#">LinkedIn</a>
          </div>
          <div className="footer-item">
            <a href="https://www.google.com/maps?q=Av.+Nossa+Sra.+de+Nazar%C3%A9,+2008+-+Caimb%C3%A9,+Boa+Vista+-+RR,+69312-165,+Brasil" target="_blank" rel="noopener noreferrer">
              {language === "es" ? "Cómo llegar" : "Como chegar"}
            </a>
          </div>
        </div>

        {/* Column 3: Corporate Info */}
        <div className="footer-col footer-info-col">
          <div className="footer-item info-brand">
            <h4>{t("logo")}</h4>
          </div>
          <div className="footer-item info-sub">
            <p>{language === "es" ? "Especialista en Seguridad Social" : "Especialista em Direito Previdenciário"}</p>
            <p>OAB/RR • Boa Vista, RR</p>
          </div>
          <div className="footer-item info-copyright">
            <p>© {year} {t("logo")}. {language === "es" ? "Todos los derechos reservados." : "Todos os direitos reservados."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
