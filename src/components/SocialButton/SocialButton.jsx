import React, { useState } from "react";
import styles from "./SocialButton.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiMessageSquare, FiX } from "react-icons/fi";

const SocialButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.socialLinks}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href="https://wa.me/5511988383632?text=Ol%C3%A1%2C%20eu%20estava%20navegando%20pelo%20site%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialIcon} ${styles.whatsapp}`}
              title="WhatsApp"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={24} />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/despertarfloresce/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialIcon} ${styles.instagram}`}
              title="Instagram"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram size={24} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.mainButton}
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default SocialButton;
