import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    contactPref: "",
    message: "",
    consent: false,
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.consent) {
      alert("Будь ласка, заповніть усі обовʼязкові поля.");
      return;
    }
    setShowPopup(true);
    setFormData({
      name: "",
      phone: "",
      contactPref: "",
      message: "",
      consent: false,
    });
  };

  return (
    <section id="contacts" className="contact-section">
      <div className="contact-container">
        <h2>Контакти</h2>
        <p>Напишіть мені і ми підберемо зручний формат і дату консультації</p>
        <div className="contact-links">
            <a href="https://t.me/boichenko_olena" target="_blank">Telegram</a>
          <a href="https://www.instagram.com/psy.boichenko?igsh=MXVvODZIdTIpb3o1NQ==" target="_blank">Instagram</a>
          <a href="whatsapp://chat?number=+380980177407" target="_blank">WhatsApp</a>
          
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <label>Імʼя*</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Номер телефону*</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Віддаю перевагу Telegram / Instagram</label>
          <input type="text" name="contactPref" value={formData.contactPref} onChange={handleChange} />

          <label>Коментарі</label>
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange} />

          <label className="consent">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
            Даю свою згоду на обробку персональних даних *
          </label>

          <button type="submit">Відправити</button>
        </form>

        {showPopup && (
          <div className="popup">
            <p>
              Успіх! Я звʼяжусь з вами найближчим часом для уточнення деталей.
              Ми разом підберемо зручний формат і час консультації.
            </p>
            <button onClick={() => setShowPopup(false)}>Закрити</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

