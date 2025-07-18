import styles from "./Index.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Index() {
  return (
    <div>
      <Header />
      <h1 className={styles.tituloPrincipal}>Home</h1>
      <Footer />
    </div>
  );
}

export default Index;
