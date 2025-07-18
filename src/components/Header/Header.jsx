import styles from "./Header.module.css";
import logo from "../../assets/logos/logo.png";

function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logoBox}>
          <a href="">
            <img className={styles.logo} src={logo} alt="logo" />
          </a>
        </div>
        <div>
          <div className={styles.headerButtons}>
            <div>
              <button>Sobre Mim</button>
            </div>
            <div>
              <button>Abordagens</button>
            </div>
            <div>
              <button>Atendimento</button>
            </div>
            <div>
              <button>Serviços</button>
            </div>
            <div>
              <button>F.A.Q</button>
            </div>
            <div>
              <button>Contatos</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
