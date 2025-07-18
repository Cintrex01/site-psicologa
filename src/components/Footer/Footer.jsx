import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>
        <p>
          Psicóloga Viviane Cintra Carvalhal CRP: 06/144178 &copy; {currentYear}{" "}
          – Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
