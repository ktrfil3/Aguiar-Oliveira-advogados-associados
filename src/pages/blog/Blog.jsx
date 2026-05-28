import React from "react";
import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import MagneticButton from "../../components/magneticbutton/MagneticButton";
import { useLanguage } from "../../context/LanguageContext";

import "./Blog.css";

const Blog = () => {
  const { t, language } = useLanguage();

  return (
    <div className="blog page">
      <div className="container">
        <div className="blog-hero">
          <h1>
            {t("blog_hero_title")} <span>{t("blog_hero_subtitle")}.</span>
          </h1>
        </div>

        <section className="blogs">
          {/* Row 1 */}
          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/contact">
                        {t("blog_post_1_title")}
                      </Link>
                    </h3>
                    <p>
                      <span>{t("blog_tag_planning")}</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <Link to="/contact">
                      <ArrowRight size={32} weight="light" color="#fff" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/contact">
                        {t("blog_post_2_title")}
                      </Link>
                    </h3>
                    <p>
                      <span>{t("blog_tag_benefits")}</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <Link to="/contact">
                      <ArrowRight size={32} weight="light" color="#fff" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/contact">
                        {t("blog_post_3_title")}
                      </Link>
                    </h3>
                    <p>
                      <span>{t("blog_tag_rights")}</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <Link to="/contact">
                      <ArrowRight size={32} weight="light" color="#fff" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/contact">
                        {t("blog_post_4_title")}
                      </Link>
                    </h3>
                    <p>
                      <span>{t("blog_tag_planning")}</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <Link to="/contact">
                      <ArrowRight size={32} weight="light" color="#fff" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="blog-row">
            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/contact">
                        {t("blog_post_5_title")}
                      </Link>
                    </h3>
                    <p>
                      <span>{t("blog_tag_rights")}</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <Link to="/contact">
                      <ArrowRight size={32} weight="light" color="#fff" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-col">
              <div className="blog-item">
                <div className="blog-divider">
                  <div className="b-div-1"></div>
                  <div className="b-div-2"></div>
                </div>

                <div className="blog-title-wrapper">
                  <div className="blog-title">
                    <h3>
                      <Link to="/contact">
                        {t("blog_post_6_title")}
                      </Link>
                    </h3>
                    <p>
                      <span>{t("blog_tag_planning")}</span>
                    </p>
                  </div>

                  <div className="blog-arrow">
                    <Link to="/contact">
                      <ArrowRight size={32} weight="light" color="#fff" />
                    </Link>
                  </div>
                </div>
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
        
        <Link to="/contact">
          <MagneticButton />
        </Link>
      </div>
    </div>
  );
};

export default Transition(Blog);
