import styles from "./Index.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import AboutMe from "../../components/AboutMe/AboutMe";
import FaqList from "../../components/Faq/FaqList";
import SocialButton from "../../components/SocialButton/SocialButton";

function Index() {
  return (
    <div>
      <Header />
      <AboutMe />
      <FaqList />
      <Contact />
      <SocialButton />
      <Footer />
    </div>
  );
}

export default Index;
