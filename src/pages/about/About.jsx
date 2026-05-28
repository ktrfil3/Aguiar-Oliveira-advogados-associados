import React from "react";
import "./about.css";

import Transition from "../../components/transition/Transition";
import Faq from "react-faq-component";
import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";
import PortraitImg from "../../assets/images/home/portrait.jpg";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();

  const data = {
    title: "",
    rows: [
      {
        title: t("faq_1_title"),
        content: t("faq_1_content"),
      },
      {
        title: t("faq_2_title"),
        content: t("faq_2_content"),
      },
      {
        title: t("faq_3_title"),
        content: t("faq_3_content"),
      },
    ],
  };

  const faqStyles = {
    bgColor: "transparent",
    titleTextColor: "#fff",
    rowTitleColor: "#fff",
    rowContentColor: "rgba(255, 255, 255, 0.6)",
    arrowColor: "#fff",
    rowTitleTextSize: "18px",
    rowContentTextSize: "15px",
    rowContentPaddingBottom: "1em",
  };

  return (
    <div className="about page">
      <div className="container">
        <section className="about-marquee">
          <Marquee speed={50} gradient={false}>
            <h1>
              {t("about_title")} • {t("about_established")} • {t("about_title")} • {t("about_established")} • 
            </h1>
          </Marquee>
        </section>

        <section className="about-intro">
          <h2>{t("about_intro")}</h2>
        </section>

        <section className="about-intro-copy">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>{t("about_established")}</span>
              </p>
            </div>
            <div className="about-col">
              <h3>{t("about_desc_1")}</h3>
              <h3 style={{ textIndent: "100px" }}>{t("about_desc_2")}</h3>
            </div>
          </div>
        </section>

        <section className="about-portrait">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>{t("about_contact_title")}</span>
              </p>
              <br />
              <br />
              <p>
                <span>{t("about_email")}: </span> <span>contato@aguiareoliveira.adv.br</span>
              </p>
              <p>
                <span>{t("about_phone")}: </span> <span>+55 95 99155-3615</span>
              </p>
              <p>
                <span>{t("about_address")}: </span>{" "}
                <span>{t("contact_address_val")}</span>
              </p>

              <br />
              <br />
              <br />
            </div>
            <div className="about-col">
              <div className="about-portrait-img">
                <img src={PortraitImg} alt="Aguiar & Oliveira" />
              </div>

              <div className="faqs">
                <h3 className="faq-section-title">{t("about_faq_title")}</h3>
                <Faq data={data} styles={faqStyles} />
              </div>
            </div>
          </div>
        </section>

        <section className="about-awards">
          <div className="about-row">
            <div className="about-col"></div>
            <div className="about-col award-header">
              <p>
                <span>{t("achievements_title")}</span>
              </p>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>{t("achievement_1_year")}</p>
              </div>
              <div className="award-view">
                <p>{t("achievement_1_title")}</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>{t("achievement_1_desc")}</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>{t("achievement_2_year")}</p>
              </div>
              <div className="award-view">
                <p>{t("achievement_2_title")}</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>{t("achievement_2_desc")}</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>{t("achievement_3_year")}</p>
              </div>
              <div className="award-view">
                <p>{t("achievement_3_title")}</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>{t("achievement_3_desc")}</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>{t("achievement_4_year")}</p>
              </div>
              <div className="award-view">
                <p>{t("achievement_4_title")}</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>{t("achievement_4_desc")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-contact">
          <div className="about-contact-copy">
            <h2>{t("contact_title")}</h2>
            <p>
              <span>
                {language === "es" 
                  ? "Para consultas preprevisionales, comuníquese con nosotros por WhatsApp o correo electrónico." 
                  : "Para consultas previdenciárias, fale conosco via WhatsApp ou e-mail."}
              </span>
            </p>

            <br />
            <p>
              <span>+55 95 99155-3615</span>
            </p>
            <p>
              <span>contato@aguiareoliveira.adv.br</span>
            </p>
          </div>
        </section>

        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(About);
