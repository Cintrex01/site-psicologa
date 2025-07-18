import styles from "./Index.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import aboutMeImage from "../../assets/images/aboutMeImage.jpg";

function Index() {
  return (
    <div>
      <Header />
      <div className={styles.aboutMe}>
        <div className={styles.aboutMeText}>
          <div className={styles.aboutMeTitle}>
            <h1>SOBRE MIM</h1>
          </div>
          <div>
            <p>
              Sou Viviane Cintra Carvalhal, Psicóloga Clínica (CRP 06/144178),
              especializada em Saúde Mental e Terapia Cognitivo-Comportamental,
              com pós-graduação em Terapia de Aceitação e Compromisso (ACT).
            </p>
            <p>
              Com um olhar atento e acolhedor, realizo atendimentos clínicos que
              vão além dos protocolos tradicionais. Acredito que cada pessoa é
              única e, por isso, minha prática é pautada na escuta cuidadosa e
              na leitura sensível das necessidades de quem se senta à minha
              frente.
            </p>
            <p>
              Utilizo abordagens com embasamento e evidência científica, como a
              Terapia Cognitivo-Comportamental, a Terapia de Aceitação e
              Compromisso e o Mindfulness, combinando essas ferramentas de forma
              personalizada, respeitando a individualidade de cada paciente.
            </p>
            <p>
              Meu propósito na clínica não é apenas tratar sintomas, mas
              caminhar junto com você, oferecendo suporte para lidar com os
              desafios da vida de forma mais flexível, fluida e leve. No espaço
              terapêutico, procuro cultivar um ambiente seguro, amoroso e
              gentil, onde o cuidado seja sempre integrativo.
            </p>
            <p>
              Neste site, você conhecerá um pouco mais sobre mim e os serviços
              que ofereço.
            </p>
            <button>Entre em contato</button>
          </div>
        </div>
        <div className={styles.aboutMeImage}>
          <img
            src={aboutMeImage}
            alt="Psicóloga Viviane sentada em um sofá claro, vestindo roupas em tons neutros e sapatos de salto, olhando suavemente para a câmera em um ambiente minimalista e iluminado."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
