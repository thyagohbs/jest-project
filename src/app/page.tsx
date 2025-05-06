import Contador from "./components/simples/Contador";
import ToDoApp from "./components/complexos/ToDoApp";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Contador />
        <ToDoApp />
      </main>
    </div>
  );
}
