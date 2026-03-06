// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll'; // Importiamo 'Link' per lo scrolling fluido alle sezioni
import "./Navbar.css";
const Navbar = () => {
  return (
    <navbar className="navbar">
      <div className="navbar-top">
        
        <nav className="navbar-menu">
          <a href="#about">Знайомство</a>
          <a href="#work">З чим працюю</a>
          <a href="#faq">Відповіді та питання</a>
          <a href="#prices">Послуги ціни</a>
          <a href="#contacts">Контакти</a>
        </nav>
      </div>

    </navbar>
  );
};

export default Navbar;
