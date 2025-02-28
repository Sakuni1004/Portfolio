import React from "react";
import {
  FaEnvelopeOpen, // Corrected name
  FaPhoneSquareAlt, // Fixed typo in FaPhoneSquarAlt
  FaFacebookF,
  FaLinkedin,
  FaInstagram

} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import "./contact.css";


const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="section1-tittle">
        Get In <span>Touch</span>
      </h2>
      <div className="contact-container">
        <div className="contact-data">
          <h3 className="contact-tittle">Contact Me!</h3>
          <p className="contact-description">
            Feel free to get in touch with me! I am always open to discuss new
            projects,<br/> creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact-info">
            <div className="info-item1">
              <FaEnvelopeOpen className="info-icon" />
              <div>
                {/* <span className="info-tittle">Mail Me:  </span> */}
                <span className="info-description">
                  sakunikakarunathilaka99@gmail.com
                </span>
              </div>
            </div>
            <div className="info-item1">
              <FaPhoneSquareAlt className="info-icon" />
              <div>
                {/* <span className="info-tittle">Call Me:  </span> */}
                <span className="info-description">+94 70 230 0931</span>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://facebook.com" className="contact-link">
              <FaFacebookF />
            </a>
            <a href="https://linkdin.com" className="contact-link">
              <FaLinkedin />
            </a>
            <a href="https://instergram.com" className="contact-link">
              <FaInstagram />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-inputgroup">
            <div className="input-div">
              <input
                type="text"
                placeholder="your name"
                className="form-control"
              />
            </div>

            <div className="input-div">
              <input
                type="email"
                placeholder="your email"
                className="form-control"
              />
            </div>

            <div className="input-div">
              <input
                type="text"
                placeholder="your subject"
                className="form-control"
              />
            </div>
          </div>

          <div className="input-div">
            <textarea
              placeholder="Your Message"
              className="formControl-text"
            ></textarea>
          </div>

          <button className="button">
            Send Message <span className="button-icon contact-button-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
