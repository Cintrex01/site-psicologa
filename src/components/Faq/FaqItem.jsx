import React, { useState } from "react";
import styles from "./FaqItem.module.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={toggleOpen}>
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />} {question}
      </button>
      <div
        className={`${styles.faqAnswerWrapper} ${isOpen ? styles.open : ""}`}
      >
        <div className={styles.faqAnswer}>{answer}</div>
      </div>
    </div>
  );
};

export default FaqItem;
