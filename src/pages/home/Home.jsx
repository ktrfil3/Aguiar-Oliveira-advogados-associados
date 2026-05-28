import React, { useEffect, useRef } from "react";
import "./home.css";

import Transition from "../../components/transition/Transition";
import PortraitImg from "../../assets/images/home/portrait.jpg";

import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight, WhatsappLogo, Star, MapPin, Clock, Phone } from "@phosphor-icons/react";
import MagneticButton from "../../components/magneticbutton/MagneticButton";

const Home = () => {
  const { t, language } = useLanguage();

  const heroCopyReveal = useRef();
  const heroImageReveal = useRef();
  const heroTaglineReveal = useRef();

  useEffect(() => {
    heroCopyReveal.current = gsap.timeline({ paused: true }).to(".hero-copy-wrapper h1", {
      top: "0",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.35,
    });

    heroImageReveal.current = gsap
      .timeline({ paused: true })
      .from(".hero-img", {
        y: "1000",
        rotate: -10,
        duration: 1,
        ease: "power3.out",
        delay: 0.75,
      });

    heroTaglineReveal.current = gsap
      .timeline({ paused: true })
      .from(".hero-tagline-wrapper", {
        opacity: 0,
        bottom: "-5%",
        duration: 1,
        ease: "power3.out",
        delay: 1,
      });

    heroCopyReveal.current.play();
    heroImageReveal.current.play();
    heroTaglineReveal.current.play();
  }, []);

  return (
    <div className="home-page-container">
      <section className="hero-section">
        {/* Aurora effect */}
        <div className="hero-aurora" />
        {/* Hero Image */}
        <div className="hero-img">
          <img src={PortraitImg} alt="Aguiar & Oliveira" />
        </div>
        {/* Gradient bottom overlay */}
        <div className="hero-gradient-bottom" />
        <div className="hero-copy">
          <div className="hero-copy-wrapper">
            <h1>Aguiar &</h1>
          </div>
          <div className="hero-copy-wrapper">
            <h1>Oliveira</h1>
          </div>
        </div>
        <div className="hero-tagline">
          <div className="hero-tagline-wrapper">
            <p>{t("hero_tagline")}</p>
            <div className="hero-cta-btn">
              <a href="https://wa.me/5595991553615" target="_blank" rel="noopener noreferrer" className="whatsapp-cta-main">
                <WhatsappLogo size={20} weight="fill" />
                {t("hero_cta")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="home-marquee">
        <Marquee speed={60} gradient={false}>
          <h2 className="marquee-text">{t("marquee_text")}</h2>
        </Marquee>
      </section>

      {/* About Quick Section */}
      <section className="home-about-quick">
        <div className="container">
          <div className="section-grid">
            <div className="grid-label">
              <span>{t("about").toUpperCase()}</span>
            </div>
            <div className="grid-content">
              <h2>{t("about_intro")}</h2>
              <p className="description-para">{t("about_desc_1")}</p>
              <div className="about-cta-row">
                <Link to="/about" className="learn-more-link">
                  {language === "es" ? "Conocer más sobre la firma" : "Saiba mais sobre o escritório"}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas / Services Preview */}
      <section className="home-services-quick">
        <div className="container">
          <div className="section-header-row">
            <h2>{t("services")}</h2>
            <Link to="/works" className="view-all-link">
              {language === "es" ? "Ver todas las áreas" : "Ver todas as áreas"}
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="services-list">
            <div className="service-row-item">
              <span className="service-num">01</span>
              <div className="service-details">
                <h3>{t("service_1_title")}</h3>
                <p>{t("service_1_desc")}</p>
              </div>
            </div>
            <div className="service-row-item">
              <span className="service-num">02</span>
              <div className="service-details">
                <h3>{t("service_3_title")}</h3>
                <p>{t("service_3_desc")}</p>
              </div>
            </div>
            <div className="service-row-item">
              <span className="service-num">03</span>
              <div className="service-details">
                <h3>{t("service_4_title")}</h3>
                <p>{t("service_4_desc")}</p>
              </div>
            </div>
            <div className="service-row-item">
              <span className="service-num">04</span>
              <div className="service-details">
                <h3>{t("service_5_title")}</h3>
                <p>{t("service_5_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="home-reviews">
        <div className="container">
          <div className="reviews-header">
            <span>{t("reviews_title").toUpperCase()}</span>
            <h2>{t("reviews_subtitle")}</h2>
            <div className="rating-summary-badge">
              <div className="stars-row">
                <Star size={20} weight="fill" color="#ffc107" />
                <Star size={20} weight="fill" color="#ffc107" />
                <Star size={20} weight="fill" color="#ffc107" />
                <Star size={20} weight="fill" color="#ffc107" />
                <Star size={20} weight="fill" color="#ffc107" />
              </div>
              <p>{t("reviews_rating_summary")}</p>
            </div>
          </div>

          <div className="reviews-grid">
            {/* Review 1 */}
            <div className="review-card">
              <div className="review-card-header">
                <div className="reviewer-avatar">JF</div>
                <div className="reviewer-info">
                  <h4>{t("review_julian_name")}</h4>
                  <span className="verified-badge">{t("review_verified_label")}</span>
                </div>
                <div className="stars-row-small">
                  <Star size={14} weight="fill" color="#ffc107" />
                  <Star size={14} weight="fill" color="#ffc107" />
                  <Star size={14} weight="fill" color="#ffc107" />
                  <Star size={14} weight="fill" color="#ffc107" />
                  <Star size={14} weight="fill" color="#ffc107" />
                </div>
              </div>
              <p className="review-text">"{t("review_julian_text")}"</p>
              <div className="owner-reply">
                <h5>{t("review_reply_label")}</h5>
                <p>{t("review_julian_reply")}</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="review-card">
              <div className="review-card-header">
                <div className="reviewer-avatar">MB</div>
                <div className="reviewer-info">
                  <h4>{t("review_miguel_name")}</h4>
                  <span className="verified-badge">{t("review_verified_label")}</span>
                </div>
                <div className="stars-row-small">
                  <Star size={14} weight="fill" color="#ffc107" />
                  <Star size={14} weight="fill" color="#ffc107" />
                  <Star size={14} weight="fill" color="#ffc107" />
                  <Star size={14} weight="fill" color="#ffc107" />
                  <Star size={14} weight="fill" color="#ffc107" />
                </div>
              </div>
              <p className="review-text">"{t("review_miguel_text")}"</p>
              <div className="owner-reply">
                <h5>{t("review_reply_label")}</h5>
                <p>{t("review_miguel_reply")}</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="review-card">
              <div className="review-card-header">
                <div className="reviewer-avatar">FC</div>
                <div className="reviewer-info">
                  <h4>{t("review_fran_name")}</h4>
                  <span className="verified-badge">{t("review_verified_label")}</span>
                </div>
                <div className="stars-row-small">
                  <Star size={14} weight="fill" color="#ffc107" />
                  <Star size={14} weight="fill" color="#ffc107" />
                  <Star size={14} weight="fill" color="#ffc107" />
                  <Star size={14} weight="fill" color="#ffc107" />
                  <Star size={14} weight="fill" color="#ffc107" />
                </div>
              </div>
              <p className="review-text">"{t("review_fran_text")}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="home-contact-info">
        <div className="container">
          <div className="contact-grid">
            {/* Info and Hours */}
            <div className="contact-details-col">
              <span>{t("contact").toUpperCase()}</span>
              <h2>{t("contact_title")}</h2>

              <div className="info-block">
                <MapPin size={24} color="var(--color-accent)" />
                <div>
                  <h4>{t("about_address")}</h4>
                  <p>{t("contact_address_val")}</p>
                </div>
              </div>

              <div className="info-block">
                <Phone size={24} color="var(--color-accent)" />
                <div>
                  <h4>{t("about_phone")}</h4>
                  <p>+55 95 99155-3615</p>
                </div>
              </div>

              <div className="info-block">
                <Clock size={24} color="var(--color-accent)" />
                <div>
                  <h4>{t("contact_hours_title")}</h4>
                  <p>{t("contact_hours_mon_wed")}</p>
                  <p>{t("contact_hours_thu")}</p>
                  <p>{t("contact_hours_fri")}</p>
                  <p>{t("contact_hours_sat_sun")}</p>
                </div>
              </div>

              <div className="contact-ctas">
                <a
                  href="https://wa.me/5595991553615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta-button"
                >
                  <WhatsappLogo size={24} weight="fill" />
                  {t("contact_whatsapp_cta")}
                </a>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="contact-map-col">
              <div className="map-wrapper">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3582522774913!2d-60.686561124237194!3d1.8412853981415664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d92fd487570ed3%3A0xcda6dcab14d872ec!2sAv.%20Brg.%20Eduardo%20Gomes%2C%201733%20-%20Aparecida%2C%20Boa%20Vista%20-%20RR%2C%2069305-005%2C%20Brazil!5e0!3m2!1sen!2sus!4v1716307000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.1)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styled Magnetic Button to navigate to Contact Page */}
      <div className="home-magnetic-wrapper">
        <Link to="/contact">
          <MagneticButton />
        </Link>
      </div>
    </div>
  );
};

export default Transition(Home);
