import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ffxxke9",
      "template_2wxztpd",
      form.current,
      "uue8Eb2iK7RuKfYrH"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option.icon" />
            <h4>Email</h4>
            <h5>xllao24@gmail.com</h5>
            <a href="mailto:xllao24@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className="contact__option.icon" />
            <h4>Telegram</h4>
            <h5>@xllao24</h5>
            <a href="https://t.me/xllao24" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option.icon" />
            <h4>WhatsApp</h4>
            <h5>+60 14 9849 038</h5>
            <a
              href="https://api.whatsapp.com/send?phone=60149849038&text=Hi%20Jason9%2C%20%20just%20I%20saw%20your%20portfolio..."
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="15"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
