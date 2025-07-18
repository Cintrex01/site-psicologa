import styles from "./Contact.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className={styles.contact}>
      <div>
        <div className={styles.contactTitle}>
          <h1>ENTRE EM CONTATO</h1>
        </div>
        <div className={styles.contactLinks}>
          <div className={styles.link}>
            <i>
              <FaWhatsapp />
            </i>
            <p>(11)988383632</p>
          </div>
          <div>
            <a
              className={styles.link}
              href="https://www.instagram.com/despertarfloresce/"
              target="_blank"
            >
              <i>
                <FaInstagram />
              </i>
              <p>@despertarfloresce</p>
            </a>
          </div>
          <div className={styles.link}>
            <i>
              <MdOutlineEmail />
            </i>
            <p>viviannecintra@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.contactForm}>
        <form action="">
          <div className={styles.inputName}>
            <input type="text" id="name" placeholder="Nome" />
          </div>
          <div className={styles.inputPhoneEmail}>
            <input type="text" id="phone" placeholder="Celular (Whatsapp)" />
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className={styles.inputSelect}>
            <label for="service">
              Por qual serviço você está interessado(a)?
            </label>
            <select name="service" id="service">
              <option value="psicoterapiaOnline">Psicoterapia Online</option>
              <option value="parcerias">Parcerias</option>
              <option value="palestras">Palestras</option>
              <option value="outros">Outros</option>
            </select>
          </div>
          <div className={styles.inputMessage}>
            <textarea
              rows="6"
              name="message"
              id="message"
              placeholder="Mensagem"
            ></textarea>
          </div>
          <div className={styles.formButton}>
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
