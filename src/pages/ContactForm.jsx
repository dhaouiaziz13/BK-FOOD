import React, { useState } from "react";
import "../css/mainPage.css";
import "../css/contactform.css";
import videoBg from "../assets/Video-SEA.mp4";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import contimg from "../assets/Contact.png";
export default function ContactForm() {
  const [isMailSent, setIsMailSent] = useState(false);
  return (
    <div className="main-page-container">
      <video autoPlay loop muted className="video-bg">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-contact"></div>
      <div className="content-container">
        <Navbar buttonText={"home"} buttonUrl={"/"} />
        <div className="form-container">
          <img className="contact-img" src={contimg} alt="" />
          <div className="contact-form-slogan">Contact</div>
          <div className="form-body-container">
            <div className="form-body-slogan-container">
              {!isMailSent ? (
                <>
                  {" "}
                  <div className="form-body-slogan-title">
                    We are here for you!
                  </div>
                  <div className="form-body-slogan-subtitle">
                    Send us your message
                  </div>
                </>
              ) : null}
            </div>
            {!isMailSent ? (
              <Form setIsMailSent={setIsMailSent} />
            ) : (
              <div className="mailsent-msg-container">
                <div className="mailsent-msg-title">
                  Your message has been sent successfully!
                </div>
                <div className="mailsent-msg-paragraph">
                  Thank you for reaching out to us. Our team will get back to
                  you as<br /> soon as possible.<br />If you have any further questions,
                  feel free to contact us at: <span style={{ color: "red" }}>contact@bkfood.com.tn</span>.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
