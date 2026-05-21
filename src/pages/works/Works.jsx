import React, { useRef, useEffect } from "react";
import "./works.css";

import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";

import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";
import { gsap } from "gsap";
import { useLanguage } from "../../context/LanguageContext";

import ProjectImg1 from "../../assets/images/projects/project-1.jpg";
import ProjectImg2 from "../../assets/images/projects/project-2.jpg";
import ProjectImg3 from "../../assets/images/projects/project-3.jpg";
import ProjectImg4 from "../../assets/images/projects/project-4.jpg";
import ProjectImg5 from "../../assets/images/projects/project-5.jpg";

const Works = () => {
  const { t } = useLanguage();
  const workCopyReveal = useRef();

  useEffect(() => {
    workCopyReveal.current = gsap.timeline({ paused: true }).to("h1", {
      top: "0",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.35,
    });

    workCopyReveal.current.play();
  }, []);

  const projectPreivewImages = [
    ProjectImg1,
    ProjectImg2,
    ProjectImg3,
    ProjectImg4,
    ProjectImg5,
  ];

  let lastHoveredIndex = null;

  const handleResetPreivew = () => {
    const projectPreviewContainer = document.querySelector(".project-preview");
    if (!projectPreviewContainer) return;

    gsap.to(".project-preview img", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        lastHoveredIndex = -1;
      },
    });
  };

  const handleMouseOver = (index) => {
    const projectPreviewContainer = document.querySelector(".project-preview");
    if (!projectPreviewContainer) return;

    if (index !== lastHoveredIndex) {
      const img = document.createElement("img");
      img.src = projectPreivewImages[index - 1];
      projectPreviewContainer.appendChild(img);

      gsap.to(img, {
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          const allPrevImages = projectPreviewContainer.querySelectorAll("img");

          if (allPrevImages.length > 1) {
            Array.from(allPrevImages)
              .slice(0, -1)
              .forEach((img) => {
                setTimeout(() => {
                  img.remove();
                }, 1000);
              });
          }
        },
      });

      lastHoveredIndex = index;
    }
  };

  return (
    <div className="works page">
      <div className="project-preview"></div>
      <div className="container">
        <section
          className="works-hero"
          onMouseOver={() => {
            handleResetPreivew();
          }}
        >
          <div className="work-copy-wrapper">
            <h1>{t("services_hero_title")}</h1>
          </div>
          <div className="work-copy-wrapper">
            <h1>{t("services_hero_subtitle")}</h1>
          </div>
        </section>

        <section className="project-list">
          {/* Practice Area 1 */}
          <div className="project-list-row">
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseOver={() => handleMouseOver(1)}
              >
                <div className="project-img">
                  <Link to="/contact">
                    <img src={ProjectImg1} alt={t("service_1_title")} />
                  </Link>
                </div>
                <div className="project-copy copy-pos-right">
                  <h2>{t("service_1_title")}</h2>
                  <p className="service-desc-sub">{t("service_1_desc")}</p>
                </div>
              </div>
            </div>
            <div className="project-list-col whitespace-col"></div>
          </div>

          {/* Practice Area 2 */}
          <div className="project-list-row">
            <div className="project-list-col whitespace-col"></div>
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseOver={() => handleMouseOver(2)}
              >
                <div className="project-img">
                  <Link to="/contact">
                    <img src={ProjectImg2} alt={t("service_2_title")} />
                  </Link>
                </div>
                <div className="project-copy copy-pos-left">
                  <h2>{t("service_2_title")}</h2>
                  <p className="service-desc-sub">{t("service_2_desc")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Area 3 */}
          <div className="project-list-row">
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseOver={() => handleMouseOver(3)}
              >
                <div className="project-img">
                  <Link to="/contact">
                    <img src={ProjectImg3} alt={t("service_3_title")} />
                  </Link>
                </div>
                <div className="project-copy copy-pos-right">
                  <h2>{t("service_3_title")}</h2>
                  <p className="service-desc-sub">{t("service_3_desc")}</p>
                </div>
              </div>
            </div>
            <div className="project-list-col whitespace-col"></div>
          </div>

          {/* Practice Area 4 */}
          <div className="project-list-row">
            <div className="project-list-col whitespace-col"></div>
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseOver={() => handleMouseOver(4)}
              >
                <div className="project-img">
                  <Link to="/contact">
                    <img src={ProjectImg4} alt={t("service_4_title")} />
                  </Link>
                </div>
                <div className="project-copy copy-pos-left">
                  <h2>{t("service_4_title")}</h2>
                  <p className="service-desc-sub">{t("service_4_desc")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Area 5 */}
          <div className="project-list-row">
            <div className="project-list-col">
              <div
                className="project-item"
                onMouseOver={() => handleMouseOver(5)}
              >
                <div className="project-img">
                  <Link to="/contact">
                    <img src={ProjectImg5} alt={t("service_5_title")} />
                  </Link>
                </div>
                <div className="project-copy copy-pos-right">
                  <h2>{t("service_5_title")}</h2>
                  <p className="service-desc-sub">{t("service_5_desc")}</p>
                </div>
              </div>
            </div>
            <div className="project-list-col whitespace-col"></div>
          </div>
        </section>

        <div
          className="works-marquee"
          onMouseOver={() => {
            handleResetPreivew();
          }}
        >
          <Marquee speed={50} gradient={false}>
            <h1>{t("marquee_text")}</h1>
          </Marquee>
        </div>

        <div
          className="magnetic-btn"
          onMouseOver={() => {
            handleResetPreivew();
          }}
        >
          <Link to="/contact">
            <MagneticButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Transition(Works);
