import styles from "./Contact.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "psicoterapiaOnline",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório.";
    if (!formData.phone.trim()) newErrors.phone = "Celular é obrigatório.";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido.";
    }
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    setErrors({});

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccessMessage("Mensagem enviada com sucesso!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            service: "psicoterapiaOnline",
            message: "",
          });
        },
        (error) => {
          setSuccessMessage("Erro ao enviar. Tente novamente.");
          console.error("EmailJS error:", error);
        }
      );
  };
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
        <form onSubmit={handleSubmit}>
          <div className={styles.inputName}>
            <input
              type="text"
              id="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>

          <div className={styles.inputPhoneEmail}>
            <input
              type="text"
              id="phone"
              placeholder="Celular (Whatsapp)"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <div className={styles.inputSelect}>
            <label htmlFor="service">
              Por qual serviço você está interessado(a)?
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
            >
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
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>

          <div className={styles.formButton}>
            <input type="submit" value="Enviar" />
          </div>

          {successMessage && <p className={styles.success}>{successMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
