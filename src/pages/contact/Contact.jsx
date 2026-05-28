import React from "react";
import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import { WhatsappLogo, Star, MapPin, Clock, Phone, Envelope } from "@phosphor-icons/react";
import MagneticButton from "../../components/magneticbutton/MagneticButton";
import { useLanguage } from "../../context/LanguageContext";

import "./contact.css";

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <div className="contact page">
      <div className="container">
        {/* Contact Hero */}
        <section className="contact-hero">
          <div className="contact-row">
            <div className="contact-col"></div>
            <div className="contact-col">
              <h1>
                {t("contact_title")} <span>{t("contact_subtitle")}</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Details & Form */}
        <section className="section contact-form">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>{t("contact").toUpperCase()}</span>
              </p>
              
              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <MapPin size={20} color="var(--color-accent)" />
                  <div>
                    <h5>{t("about_address")}</h5>
                    <p>{t("contact_address_val")}</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <Phone size={20} color="var(--color-accent)" />
                  <div>
                    <h5>{t("about_phone")}</h5>
                    <p>+55 95 99155-3615</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <Envelope size={20} color="var(--color-accent)" />
                  <div>
                    <h5>{t("about_email")}</h5>
                    <p>contato@aguiareoliveira.adv.br</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <Clock size={20} color="var(--color-accent)" />
                  <div>
                    <h5>{t("contact_hours_title")}</h5>
                    <p>{t("contact_hours_mon_wed")}</p>
                    <p>{t("contact_hours_thu")}</p>
                    <p>{t("contact_hours_fri")}</p>
                    <p>{t("contact_hours_sat_sun")}</p>
                  </div>
                </div>
              </div>

              <div className="contact-actions-row">
                <a 
                  href="https://wa.me/5595991553615" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="whatsapp-btn-contact"
                >
                  <WhatsappLogo size={22} weight="fill" />
                  {t("contact_whatsapp_cta")}
                </a>
              </div>
            </div>

            <div className="contact-col">
              <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="input">
                  <input type="text" placeholder={t("contact_name_placeholder")} />
                </div>
                <div className="input">
                  <textarea placeholder={t("contact_message_placeholder")} rows={6} />
                </div>
                <div className="input">
                  <input type="text" placeholder={t("contact_email_placeholder")} />
                  <button type="button">{t("contact_submit")}</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Map Embed Section */}
        <section className="contact-map-section">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>{language === "es" ? "UBICACIÓN" : "LOCALIZAÇÃO"}</span>
              </p>
            </div>
            <div className="contact-col">
              <div className="contact-map-container">
                <iframe 
                  title="Office Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3582522774913!2d-60.686561124237194!3d1.8412853981415664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d92fd487570ed3%3A0xcda6dcab14d872ec!2sAv.%20Brg.%20Eduardo%20Gomes%2C%201733%20-%20Aparecida%2C%20Boa%20Vista%20-%20RR%2C%2069305-005%2C%20Brazil!5e0!3m2!1sen!2sus!4v1716307000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.1)", borderRadius: "8px" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="contact-reviews-section">
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
              <p className="review-text">&quot;{t("review_julian_text")}&quot;</p>
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
              <p className="review-text">&quot;{t("review_miguel_text")}&quot;</p>
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
              <p className="review-text">&quot;{t("review_fran_text")}&quot;</p>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="contact-subscribe">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>{t("contact_newsletter_title").toUpperCase()}</span>
              </p>
            </div>
            <div className="contact-col">
              <h3>{t("contact_newsletter_desc")}</h3>
              <div className="input">
                <input type="text" placeholder={t("contact_newsletter_placeholder")} />
                <button type="button">{t("contact_newsletter_submit")}</button>
              </div>
            </div>
          </div>
        </section>

        {/* Socials */}
        <section className="contact-socials">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>{t("contact_socials_title").toUpperCase()}</span>
              </p>
            </div>
            <div className="contact-col">
              <div className="contact-social-link">
                <p>
                  <a href="https://wa.me/5595991553615" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </p>
              </div>
              <div className="contact-social-link">
                <p>
                  <a href="#">Instagram</a>
                </p>
              </div>
              <div className="contact-social-link">
                <p>
                  <a href="#">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Link to="/">
          <MagneticButton />
        </Link>
      </div>
    </div>
  );
};

export default Transition(Contact);
