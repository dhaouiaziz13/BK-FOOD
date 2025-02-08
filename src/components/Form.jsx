import React, { useState } from "react";
import "../css/contactform.css"; // Import the external stylesheet
import WhatsAppButton from "./WhatsAppBtn";
const ContactForm = ({ setIsMailSent }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );

    window.location.href = `mailto:contact@bkfood.com.tn?subject=${subject}&body=${body}`;

    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setIsMailSent(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="input"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="inputGroup">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="Email"
            required
          />
        </div>

        <div className="inputGroup">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
            placeholder="Phone"
            required
          />
        </div>

        <div className="inputGroup">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="input"
            placeholder="Subject"
            required
          />
        </div>

        <div className="inputGroup">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input textarea"
            placeholder="Message"
            required
          />
        </div>

        <div className="buttonContainer">
          <WhatsAppButton />
          <button type="submit" className="button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
