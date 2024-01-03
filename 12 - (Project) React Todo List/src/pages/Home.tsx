import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Tasks from "../components/Tasks";
import { ITask } from "../types/Task";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <Form buttonText="Criar Tarefa" />
        <Tasks />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
