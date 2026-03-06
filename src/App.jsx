// src/App.js (Verify this is exactly what's in your App.js)
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import WorkWith from "./components/WorkWith";
import FAQ from "./components/FAQ";
import Prices from './components/Prices';
import Contact from './components/Contact';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <section id="about">
          <About />
        </section>
        <section id="workwith">
          <WorkWith/>
        </section>
        <section id="faq">
          <FAQ/>
        </section>
        <section id="services">
          <Prices/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
        {/* If you're rendering Images, it should be here */}
        {/* <section id='images-section'>
          <Images/>
        </section> */}
       
        <Footer/>
      </div>
    </div>
  );
}

export default App;
