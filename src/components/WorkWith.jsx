import React from "react";
import "./WorkWith.css";

const WorkWith = () => {
  return (
    <section id="work" className="work-section">
      <div className="work-container">

        <h2>З чим працюю</h2>

        <p className="work-description">
          Я працюю з клієнтами, допомагаючи їм зрозуміти свої емоції,
          подолати стрес та тривогу, покращити самооцінку та знайти
          відповіді на важливі питання:
        </p>

       <div className="cards">

          <div className="card card-green">
            <h4>Безпека</h4>
            <p>Тут безпечно — тепло, без осуду і поспіху.</p>
          </div>

          <div className="card card-purple">
            <h4>Прийняття</h4>
            <p>Злість, сум, розгубленість — будь-яка твоя реакція має сенс і місце тут.</p>
          </div>

          <div className="card card-pink">
            <h4>Свобода</h4>
            <p>Ти не зобов'язаний бути зручним для інших. Тут важливо лише те, що істинне для тебе.</p>
          </div>

          <div className="card card-orange">
            <h4>Ресурс</h4>
            <p>Твій досвід — навіть найважчий — це не тягар, а ресурс.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkWith;