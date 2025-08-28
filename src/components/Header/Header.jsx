import styles from "./Header.module.css";
import logo from "../../assets/logos/logo.png";
import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    "Sobre Mim",
    "Abordagens",
    "Atendimento",
    "Serviços",
    "F.A.Q",
    "Contatos",
  ];

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.logoBox}>
          <a href="/" aria-label="Voltar para a página inicial">
            <img className={styles.logo} src={logo} alt="Logo" />
          </a>
        </div>

        {/* Menu Desktop */}
        <nav className={styles.desktopMenu} role="navigation">
          {menuItems.map((item, index) => (
            <button key={index} className={styles.menuItem}>
              {item}
            </button>
          ))}
        </nav>

        {/* Botão Menu Hambúrguer */}
        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={closeMenu}
            className={styles.mobileMenuItem}
          >
            {item}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;
