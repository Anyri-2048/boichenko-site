import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
       
        <nav className="footer-menu">
          <a href="#about">Знайомство</a>
          <a href="#work">З чим працюю</a>
          <a href="#faq">Відповіді та питання</a>
          <a href="#prices">Послуги ціни</a>
          <a href="#contacts">Контакти</a>
        </nav>
      </div>

      <div className="footer-socials">
          <a href="https://t.me/boichenko_olena" target="_blank">Telegram</a>
         <a href="https://www.instagram.com/psy.boichenko?igsh=MXVvODZIdTIpb3o1NQ==" target="_blank">Instagram</a>
          <a href="whatsapp://chat?number=+380980177407" target="_blank">WhatsApp</a>
        
      </div>

      <div className="footer-info">
        <p>© {new Date().getFullYear()} Бойченко Олена – психолог. Всі права захищені.</p>
        <p>
        <a href="/privacy.html" target="_blank" rel="noopener noreferrer"> Політика конфіденційності</a>
         <a href="/cookies.html">Політика файлів cookie</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
