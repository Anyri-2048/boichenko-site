import React from "react";
import "./Prices.css";

const Prices = () => {
  return (
    <section id="prices" className="prices-section">
      <div className="prices-container">
        <h2>Послуги та ціни</h2>
        <p className="prices-intro">
          Ви можете обрати зручний формат та тривалість консультації. Усі консультації проводяться конфіденційно, з дотриманням етичних норм.
        </p>

        <div className="price-list">
          <div className="price-item">
            <h3>Індивідуальна консультація</h3>
            <p>Онлайн або в кабінеті</p>
            <p><strong>₴ ціна за домовленістю</strong></p>
          </div>

          <div className="price-item">
            <h3>Підлітки (13+)</h3>
            <p>Онлайн, з урахуванням особливостей підліткового віку</p>
            <p><strong>₴ ціна за домовленістю</strong></p>
          </div>

          <div className="price-item">
            <h3>Пакет з 5 сесій</h3>
            <p>Знижка при оплаті пакетом</p>
            <p><strong>₴ за домовленістю</strong></p>
          </div>
        </div>

        <p className="prices-note">
          Якщо ви не можете дозволити собі оплату повної вартості – напишіть мені. Ми зможемо знайти компроміс.
        </p>
      </div>
    </section>
  );
};

export default Prices;
