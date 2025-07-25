import React from "react";
import FaqItem from "./FaqItem";
import styles from "./FaqList.module.css";

const faqData = [
  {
    question: "Atende planos de saúde?",
    answer:
      "Não atendo por convênio, mas emito nota fiscal para que você possa solicitar reembolso junto ao seu plano de saúde, de acordo com as regras da sua operadora. É importante verificar com o seu convênio se há cobertura para psicoterapia e qual o processo para reembolso.",
  },
  {
    question: "Com que frequência ocorrem as sessões?",
    answer: "As sessões têm duração de 50 minutos a 1 hora.",
  },
  {
    question: "Com que frequência ocorrem as sessões?",
    answer:
      "No início do processo terapêutico, os atendimentos costumam ser semanais, pois essa frequência favorece o vínculo e a continuidade do trabalho. Com o avanço do processo e conforme as demandas forem sendo trabalhadas, as sessões podem ser espaçadas para quinzenais.",
  },
  {
    question: "A terapia é online ou presencial?",
    answer:
      "Os atendimentos são 100% online, realizados por vídeo chamada, com segurança e sigilo. Atendo pessoas que vivem em diferentes regiões do Brasil e também no exterior.",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "Os pagamentos podem ser feitos por PIX ou transferência bancária. É possível optar por sessões avulsas ou pacotes mensais. De acordo com o Código de Ética do Psicólogo, não é permitida a divulgação de valores em sites ou redes sociais. Para saber mais sobre os valores e a disponibilidade de horários, entre em contato pelo WhatsApp.",
  },
];

const FaqList = () => {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqTitle}>
        <h3>F.A.Q</h3>
        <h2>Perguntas</h2>
        <h2>Frequentes</h2>
        <a
          href="https://wa.me/5511988383632?text=Ol%C3%A1%2C%20eu%20estava%20navegando%20pelo%20site%20e%20gostaria%20de%20conversar."
          target="_blank"
        >
          Agendar Sessão
        </a>
      </div>
      <div className={styles.questions}>
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqList;
