import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "У мене немає чіткого запиту. Чи варто йти?",
    answer: "Так, формування запиту — це спільна робота клієнта та терапевта."
  },
  {
    question: "Я боюся зіткнутися з сильними емоціями.",
    answer: "Так буває. На першій зустрічі це трапляється рідко, але на наступних — клієнт допускає, що моя присутність допоможе це пережити."
  },
  {
    question: "Я соромлюся або боюся осуду з вашого боку.",
    answer: "Я не буду засуджувати ваш зовнішній вигляд, вік та запити, з якими ви прийшли."
  },
  {
    question: "Скільки мінімум сесій мені може знадобитися?",
    answer: "1 сесія — для ознайомлення. Для вирішення однієї проблеми — 5-10 сесій."
  },
  {
    question: "Що буде, якщо ви мені не підійдете?",
    answer: "Ми можемо обговорити це і знайти спеціаліста, який більше відповідатиме вашим потребам."
  },
  {
    question: "Чи консультуєте ви дітей та підлітків?",
    answer: "Консультую підлітків з 13 років."
  },
  {
    question: "Якими способами приймаєте оплату?",
    answer: "Надаю інформацію особисто при записі на консультацію."
  },
  {
    question: "Якщо я не можу прийти на сесію, що робити?",
    answer: "Повідом мене якомога раніше — ми домовимось про інший зручний час."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="faq-section">
      <h2>Відповіді та питання (FAQ)</h2>
      <div className="faq-list">
        {faqData.map((item, i) => (
          <div key={i} className="faq-item">
            <button onClick={() => toggleIndex(i)} className="faq-question">
              {item.question}
            </button>
            {openIndex === i && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;








