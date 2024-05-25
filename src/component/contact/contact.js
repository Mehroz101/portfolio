import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div id="contact">
        <h1>Contact Me</h1>
        <p>
          Get in touch to discuss your project, ask questions, or collaborate.
          I'm here to help you bring your vision to life.
        </p>
        <form action="" className="contactForm">
          <input type="text" placeholder="Your Name" className="field name" />
          <input
            type="email"
            placeholder="Your Email"
            className="field email"
          />
          <textarea
            name="msg"
            cols="30"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button className="submitBtn" type="submit">
            Send
          </button>
        </form>
        <div className="links">
          <i class="fa-brands fa-github" style={{ color: "#141e2f" }}></i>
          <i class="fa-brands fa-instagram" style={{ color: "#cc3352" }}></i>
          <i class="fa-brands fa-facebook" style={{ color: "#1060ea" }}></i>
          <i class="fa-brands fa-whatsapp" style={{ color: "#006b15" }}></i>
        </div>
      </div>
    </>
  );
};

export default Contact;
